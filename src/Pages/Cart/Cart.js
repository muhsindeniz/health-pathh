import { message, Spin, Input } from 'antd';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import { useHistory } from 'react-router';

const Cart = () => {

    let history = useHistory();
    let { basket, setBasket, setDiscountCartInfo, discountCart, setDiscountCart, lastPrice, setLastPrice, discount, setDiscount } = useContext(GlobalSettingsContext)
    let { user } = useContext(CompanySettingsContext);
    let [loading, setLoading] = useState(false);
    let [couponCode, setCouponCode] = useState(null)

    let priceProgress = (count, id) => {
        let positive = count.replace('-', "");
        if (positive == "" || positive == " ") {
            return false
        } else {
            setBasket([...basket.map(data => {
                if (data._id === id) {
                    return {
                        _id: data._id,
                        category: data.category,
                        name: data.name,
                        avatar: data.avatar,
                        farmerName: data.farmerName,
                        quntity: parseInt(positive || 1),
                        total: (parseFloat(data.newPrice) * parseFloat(positive || 1)).toFixed(2),
                        price: data.price,
                        newPrice: data.newPrice
                    }
                } else {
                    return { ...data }
                }
            })])

            UPDATE_DB_QUANTITY([...basket.map(data => {
                if (data._id === id) {
                    return {
                        _id: data._id,
                        category: data.category,
                        name: data.name,
                        avatar: data.avatar,
                        farmerName: data.farmerName,
                        quntity: parseInt(positive || 1),
                        total: (parseFloat(data.newPrice) * parseFloat(positive || 1)).toFixed(2),
                        price: data.price,
                        newPrice: data.newPrice
                    }
                } else {
                    return { ...data }
                }
            })])
        }
    }

    let UPDATE_DB_QUANTITY = (data) => {
        setLoading(true)
        axios.post(`http://localhost:3000/api/basket`, {
            userId: user._id,
            products: data
        })
            .then(response => {
                message.success("Sepet güncellendi!")
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }

    let removeBasket = (info) => {
        setBasket([...basket.filter(b => b._id !== info)])
        REMOVE_DB_BASKET([...basket.filter(b => b._id !== info)])
    }

    let REMOVE_DB_BASKET = (data) => {
        setLoading(true)
        axios.post(`http://localhost:3000/api/basket`, {
            userId: user._id,
            products: data
        })
            .then(response => {
                message.success("Ürün sepetten kaldırıldı!")
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }

    if (basket.length === 0) {
        setLastPrice(0)
        setDiscount(null)
    }

    let checkOut = async () => {
        history.push('/delivery')
    }

    let sendCouponCode = () => {
        if (couponCode === null) {
            message.info("Lütfen bir kupon kodu giriniz!")
        } else {
            setLoading(true)
            axios.post(`http://localhost:3000/api/coupon`, {
                coupon: couponCode
            })
                .then(response => {
                    if (response.data.result_message.type === "info") {
                        message.info(response.data.result_message.message)
                    } else if (response.data.result_message.type === "error")
                        message.error(response.data.result_message.message)
                    else {
                        message.success(response.data.result_message.message)
                        setDiscount(response.data.result)
                    }
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                })
        }
    }

    useEffect(() => {
        setLastPrice((Number(discountCart) + (basket.length > 0 ? 15 : 0)) - Number(discount))
    }, [discount, basket, discountCart])

    return (
        <>
            <HeaderBanner page="Cart" targetPage="Shopping Cart" />

            <div className="shopping_cart_area mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="cart_page">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product_remove">Delete</th>
                                                <th className="product_thumb">Image</th>
                                                <th className="product_name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product_quantity">Quantity</th>
                                                <th className="product_total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                basket && basket.map((bask, index) => (
                                                    <tr key={index}>
                                                        <td className="product_remove"><a><i onClick={() => removeBasket(bask._id)} className="far fa-trash-alt"></i></a></td>
                                                        <td className="product_thumb"><a href="#"><img src={`http://localhost:3000/${bask?.avatar}`} alt="" /></a></td>
                                                        <td className="product_name"><a href="#">{bask.name}</a></td>
                                                        <td className="product-price">${bask.newPrice}</td>
                                                        <td className="product_quantity"><label>Quantity</label>
                                                            <input onChange={(e) => priceProgress(e.target.value, bask._id)} min={1} max={100} defaultValue={bask.quntity || 1} type="number" />
                                                        </td>
                                                        <td className="product_total">${Number(bask.newPrice * bask.quntity).toFixed(2)}</td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coupon_area">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code left" style={{ display: discount !== null || basket.length === 0 ? "none" : "block" }}>
                                    <h3>Coupon</h3>
                                    <div className="coupon_inner">
                                        <p>Enter your coupon code if you have one.</p>
                                        <input style={{ textTransform: "uppercase" }} onChange={(e) => setCouponCode(e.target.value.toUpperCase())} placeholder="Coupon code" type="text" />
                                        <button onClick={() => sendCouponCode()}>Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code right">
                                    <h3>Cart Totals</h3>
                                    <div className="coupon_inner">
                                        <div className="cart_subtotal">
                                            <p>Subtotal</p>
                                            <p className="cart_amount">${parseFloat(discountCart).toFixed(2)}</p>
                                        </div>

                                        <div className="cart_subtotal">
                                            <p>Calculate shipping</p>
                                            <p className="cart_amount">${basket.length > 0 ? 15 : 0}</p>
                                        </div>

                                        <div style={{ display: discount !== null ? "block" : "none" }}>
                                            <div className="cart_subtotal">
                                                <p>Price</p>
                                                <p className="cart_amount">$<del>{(parseFloat(discountCart) + (basket.length > 0 ? 15 : 0)).toFixed(2)}</del></p>
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
                                            <p className="cart_amount">${parseFloat(lastPrice).toFixed(2) || 0}</p>
                                        </div>
                                        <div className={basket.length === 0 ? "d-none checkout_btn" : "checkout_btn"}>
                                            <a onClick={() => checkOut()} className="text-white">Proceed to Checkout</a>
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

export default Cart
