import React, { useEffect, useState, useContext } from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import { useHistory } from 'react-router';
import axios from 'axios';
import { message, Spin } from 'antd';
import Cookies from 'js-cookie';
import Loading from '../../Assets/media/gif/loading.gif'

const Delivery = () => {

    let { basket,
        token,
        discountCart,
        lastPrice,
        discount,
        setBasket,
        setDiscountCartInfo,
        setDiscountCart,
        setLastPrice,
        setDiscount } = useContext(GlobalSettingsContext)
    let { user } = useContext(CompanySettingsContext);
    let history = useHistory();
    let [storageAddress, setStorageAdress] = useState(null)
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        if (token) {
            if (user._id) {
                setLoading(true)
                axios.get(`http://localhost:3000/api/address/${user._id}`, {
                    headers: {
                        Authorization: token
                    }
                })
                    .then(res => {
                        setStorageAdress(res.data.result);
                        setLoading(false)
                    })
                    .catch(e => {
                        console.log(e)
                        setLoading(false)
                    })
            }
        }
    }, [token])

    let addOrder = () => {
        setLoading(true)
        axios.post('http://localhost:3000/api/addOrders', {
            userId: user._id,
            basket: basket,
            address: storageAddress,
            discountCodeAmount: discount,
            totalPricePaid: lastPrice.toFixed(2)
        })
            .then(resp => {
                axios.delete(`http://localhost:3000/api/basket/${user._id}`)
                    .then(resp => {
                        if (resp.data.result_message.type === "success") {
                            message.success(resp.data.result_message.message)
                            setLoading(false)
                            setBasket([])
                            setDiscountCartInfo(0)
                            setDiscountCart(0)
                            setLastPrice(0)
                            setDiscount(null)
                            history.push('/')
                        }
                        else {
                            message.info(resp.data.result_message.message)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })

    }

    return (
        <>
            <HeaderBanner page="Delivery" targetPage="Order Delivery Address" />

            <div className="shopping_cart_area mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="delivery_address__container">
                                <h4>Delivery and Billing address</h4>

                                <div className="delivery_address_item">
                                    <div className="address_header_radio">
                                        <input name="typeshipping" type="radio" className="address_header_input" checked />
                                    </div>

                                    <div className="header_context">
                                        <h3>
                                            {storageAddress?.addressTitle}
                                        </h3>
                                        <p>
                                            <span>{storageAddress?.address}</span>
                                            <span>{storageAddress?.district} / {storageAddress?.province}</span>
                                        </p>
                                    </div>

                                    <div className="header_edit_button" onClick={() => history.push("/membership-infos?activeKey=3")}>
                                        <svg width="16" height="16"><path fill="#7B7B7B" d="M11.369 10.002l-.076.068L8 13.363 4.707 10.07a1 1 0 00-1.483 1.339l.069.075 3.81 3.811a1.264 1.264 0 001.71.076l.083-.075 3.811-3.812a1 1 0 00-1.338-1.482zM8 .444c-.336 0-.659.134-.896.372l-3.811 3.81-.069.076A1 1 0 004.707 6.04L8 2.748l3.293 3.292.076.07a1 1 0 001.338-1.484L8.896.815 8.813.74A1.264 1.264 0 008 .444z" fillRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="coupon_area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">

                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="coupon_code right">
                                            <h3>Cart Totals</h3>
                                            <div className="coupon_inner">
                                                <div className="cart_subtotal">
                                                    <p>Subtotal</p>
                                                    <p className="cart_amount">${Number(discountCart).toFixed(2)}</p>
                                                </div>
                                                <div className="cart_subtotal">
                                                    <p>Calculate shipping</p>
                                                    <p className="cart_amount">${basket.length > 0 ? 15 : 0}</p>
                                                </div>

                                                <div style={{ display: discount !== null ? "block" : "none" }}>
                                                    <div className="cart_subtotal">
                                                        <p>Price</p>
                                                        <p className="cart_amount">$<del>{(Number(discountCart) + (basket.length > 0 ? 15 : 0))}</del></p>
                                                    </div>
                                                </div>

                                                <div style={{ display: discount !== null ? "block" : "none" }}>
                                                    <div className="cart_subtotal">
                                                        <p>Discount amount</p>
                                                        <p className="cart_amount">${discount}</p>
                                                    </div>
                                                </div>

                                                <div className="cart_subtotal">
                                                    <p>Total</p>
                                                    <p className="cart_amount">${lastPrice.toFixed(2)}</p>
                                                </div>
                                                <div className="checkout_btn">
                                                    <a onClick={() => addOrder()} className="text-white">Proceed to Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                loading && <div className="loading__container">
                    <img src={Loading} />
                </div>
            }
        </>
    )
}

export default Delivery
