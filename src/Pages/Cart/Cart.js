import { message, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import { useHistory } from 'react-router';

const Cart = () => {

    let history = useHistory();
    let { basket, setBasket, token, setDiscountCartInfo } = useContext(GlobalSettingsContext)
    let { user } = useContext(CompanySettingsContext);
    let [discountCart, setDiscountCart] = useState(0)
    let [loading, setLoading] = useState(false);

    let priceProgress = (count, id) => {
        setBasket([...basket.map(data => {
            if (data._id === id) {
                return {
                    _id: data._id,
                    name: data.name,
                    avatar: data.avatar,
                    farmerName: data.farmerName,
                    quntity: parseInt(count),
                    total: (parseFloat(data.newPrice) * parseFloat(count)).toFixed(2),
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
                    name: data.name,
                    avatar: data.avatar,
                    farmerName: data.farmerName,
                    quntity: parseInt(count),
                    total: (parseFloat(data.newPrice) * parseFloat(count)).toFixed(2),
                    price: data.price,
                    newPrice: data.newPrice
                }
            } else {
                return { ...data }
            }
        })])
    }

    let UPDATE_DB_QUANTITY = (data) => {
        setLoading(true)
        axios.post(`http://localhost:3000/api/basket`, {
            userId: user._id,
            products: data
        })
            .then(response => {
                message.success("Ürün sepetten kaldırıldı!", 4)
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
                message.success("Ürün sepetten kaldırıldı!", 4)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }

    useEffect(() => {
        const sum = basket.length > 0 ? basket.map(datum => datum.total).reduce((a, b) => parseFloat(a) + parseFloat(b), 0) : 0
        setDiscountCart(sum)
        setDiscountCartInfo(sum)
    }, [basket])

    let checkOut = async () => {
        history.push('/delivery')
    }

    return (
        <>
            <HeaderBanner page="Cart" targetPage="Shopping Cart" />

            <div className="shopping_cart_area mt-70">
                <div className="container">
                    <form action="#">
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
                                                            <td className="product_quantity"><label>Quantity</label> <input onChange={(e) => priceProgress(e.target.value, bask._id)} min="1" max="100" defaultValue={bask?.quntity || 1} type="number" /></td>
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
                                                <p className="cart_amount">${Number(discountCart).toFixed(2)}</p>
                                            </div>
                                            <div className="cart_subtotal">
                                                <p>Calculate shipping</p>
                                                <p className="cart_amount">${basket.length > 0 ? 15 : 0}</p>
                                            </div>

                                            <div className="cart_subtotal">
                                                <p>Total</p>
                                                <p className="cart_amount">${(Number(discountCart) + (basket.length > 0 ? 15 : 0)).toFixed(2)}</p>
                                            </div>
                                            <div className="checkout_btn">
                                                <a onClick={() => checkOut()} className="text-white">Proceed to Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
