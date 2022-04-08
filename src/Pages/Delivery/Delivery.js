import React, { useEffect, useState, useContext } from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import { useHistory } from 'react-router';
import axios from 'axios';
import { message, Spin } from 'antd';

const Delivery = () => {

    let { basket, setBasket, token, discountCartInfo } = useContext(GlobalSettingsContext)
    let { user } = useContext(CompanySettingsContext);
    let history = useHistory();
    let [storageAddress, setStorageAdress] = useState(null)
    let [loading, setLoading] = useState(false)

    useEffect(() => {

        if (token) {
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
    }, [token])

    let addOrder = () => {
        message.success("Siparişiniz başarıyla verildi..", 3)
    }

    return (
        <>
            <HeaderBanner page="Delivery" targetPage="Order Delivery Address" />

            <div className="shopping_cart_area mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="delivery_address__container">
                                <h4>Teslimat ve Fatura adresi</h4>

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
                                        <div className="coupon_code left">
                                            <h3>Coupon</h3>
                                            <div className="coupon_inner">
                                                <p>Enter your coupon code if you have one.</p>
                                                <input placeholder="Coupon code" type="text" />
                                                <button type="submit">Apply coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="coupon_code right">
                                            <h3>Cart Totals</h3>
                                            <div className="coupon_inner">
                                                <div className="cart_subtotal">
                                                    <p>Subtotal</p>
                                                    <p className="cart_amount">${Number(discountCartInfo).toFixed(2)}</p>
                                                </div>
                                                <div className="cart_subtotal">
                                                    <p>Calculate shipping</p>
                                                    <p className="cart_amount">${basket.length > 0 ? 15 : 0}</p>
                                                </div>

                                                <div className="cart_subtotal">
                                                    <p>Total</p>
                                                    <p className="cart_amount">${(Number(discountCartInfo) + (basket.length > 0 ? 15 : 0)).toFixed(2)}</p>
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
                    <Spin size="large" />
                </div>
            }
        </>
    )
}

export default Delivery
