import React, { useContext, useEffect, useState } from 'react'
import logo from '../../../Assets/media/img/logo/logo.png'
import { Link } from 'react-router-dom'
import product from '../../../Assets/media/img/s-product/product.jpg'
import product2 from '../../../Assets/media/img/s-product/product2.jpg'
import { Menu, message } from 'antd';
import { GlobalSettingsContext } from '../../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../../Contexts/CompanySettingsContext'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";

const Navbar = () => {

    let { mobile, token, setToken } = useContext(GlobalSettingsContext)
    let { user, setUser } = useContext(CompanySettingsContext);
    let history = useHistory();

    let logOut = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        setToken(null)
        message.success("Başarıyla çıkış yapıldı..")
        history.push('/')
    }

    return (
        <>
            <header>
                <div className="main_header">
                    <div className="header_top">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">

                                </div>
                                <div className="col-lg-6">
                                    <div className="header_social text-right">
                                        <ul>
                                            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i className="ion-social-googleplus-outline"></i></a></li>
                                            <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header_middle">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-3 col-4">
                                    <div className="logo">
                                        <Link to="/"><img src={logo} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-9 col-8">
                                    <div className="header_right_info">
                                        <div className="search_container mobail_s_none">
                                            <form action="#">
                                                <div className="hover_category">

                                                </div>
                                                <div className="search_box">
                                                    <input placeholder="Search product..." type="text" />
                                                    <button type="submit"><span className="lnr lnr-magnifier"></span></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="header_account_area">
                                            <div className="header_account_list register">
                                                <div className="sec-center">
                                                    <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                                                    <label className="for-dropdown" htmlFor="dropdown">
                                                        <i className="far fa-user"></i>
                                                        <div style={{ lineHeight: "15px", textAlign: "left" }}>
                                                            <span className="header-title-login">
                                                            {token === null ? "Giriş Yap" : "Hesabım"}
                                                            </span>
                                                            <br />
                                                            <small>{token === null ? "veya üye ol" : user?.name}</small>
                                                        </div>
                                                    </label>
                                                    <div className="section-dropdown">
                                                        <Link className={token === null ? "d-block" : "d-none"} to="/login">Giriş Yap</Link>
                                                        <Link className={token === null ? "d-block" : "d-none"} to="/register">Üye Ol </Link>
                                                        <Link to="/">Siparişlerim</Link>
                                                        <Link to="/">Kullanıcı Bilgilerim</Link>
                                                        <Link to="#" className={token === null ? "d-none" : "d-block"} onClick={() => logOut()}>Çıkış Yap</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {
                                                mobile === true ? <div className="user-profile-container">
                                                    <i className="far fa-user"></i>
                                                </div> : <div className="header_account_list header_wishlist">
                                                    <Link to="/cart">
                                                        <div className="sec-center">
                                                            <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                                                            <label className="for-dropdown">
                                                                <i className="fas fa-shopping-cart" data-value={4}></i>
                                                                <div style={{ lineHeight: "15px", textAlign: "left" }}>
                                                                    <span className="header-title-login position-relative">
                                                                        Sepetim
                                                                    </span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </Link>
                                                </div>
                                            }

                                            <div className="header_account_list  mini_cart_wrapper">
                                                <div className="mini_cart">
                                                    <div className="cart_gallery">
                                                        <div className="cart_close">
                                                            <div className="cart_text">
                                                                <h3>cart</h3>
                                                            </div>
                                                            <div className="mini_cart_close">
                                                                <i className="icon-x"></i>
                                                            </div>
                                                        </div>
                                                        <div className="cart_item">
                                                            <div className="cart_img">
                                                                <a href="#"><img src={product} alt="" /></a>
                                                            </div>
                                                            <div className="cart_info">
                                                                <a href="#">Primis In Faucibus</a>
                                                                <p>1 x <span> $65.00 </span></p>
                                                            </div>
                                                            <div className="cart_remove">
                                                                <a href="#"><i className="icon-x"></i></a>
                                                            </div>
                                                        </div>
                                                        <div className="cart_item">
                                                            <div className="cart_img">
                                                                <a href="#"><img src={product2} alt="" /></a>
                                                            </div>
                                                            <div className="cart_info">
                                                                <a href="#">Letraset Sheets</a>
                                                                <p>1 x <span> $60.00 </span></p>
                                                            </div>
                                                            <div className="cart_remove">
                                                                <a href="#"><i className="icon-x"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mini_cart_table">
                                                        <div className="cart_table_border">
                                                            <div className="cart_total">
                                                                <span>Sub total:</span>
                                                                <span className="price">$125.00</span>
                                                            </div>
                                                            <div className="cart_total mt-10">
                                                                <span>total:</span>
                                                                <span className="price">$125.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mini_cart_footer">
                                                        <div className="cart_button">
                                                            <Link to="cart.html"><i className="fa fa-shopping-cart"></i> View cart</Link>
                                                        </div>
                                                        <div className="cart_button">
                                                            <Link to="checkout.html"><i className="fa fa-sign-in"></i> Checkout</Link>
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
                    <div className="header_bottom sticky-header ant-menu-horizontal">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-6 mobail_s_block">
                                    <div className="search_container">
                                        <form action="#">
                                            <div className="search_box">
                                                <input placeholder="Search product..." type="text" />
                                                <button type="submit"><span className="lnr lnr-magnifier"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <section className="d-lg-none d-sm-block">

                                    </section>
                                </div>
                                <div className="col-lg-10 col-sm-12">
                                    <Menu mode="horizontal" className="border-0">
                                        <Menu.Item key="home" >
                                            <Link to="/">Home</Link>
                                        </Menu.Item>
                                        <Menu.Item key="vegetables">
                                            <Link to="/vegetables">Vegetables</Link>
                                        </Menu.Item>
                                        <Menu.Item key="fruits">
                                            <Link to="/fruits">Fruits</Link>
                                        </Menu.Item>
                                        <Menu.Item key="tea">
                                            <Link to="/natural-teas">Natural Teas</Link>
                                        </Menu.Item>
                                        <Menu.Item key="plants">
                                            <Link to="/useful-plants">Useful Plants</Link>
                                        </Menu.Item>
                                        <Menu.Item key="lists">
                                            <Link to="/diet-list">Diet Lists</Link>
                                        </Menu.Item>
                                        <Menu.Item key="us">
                                            <Link to="/contact">Contact Us</Link>
                                        </Menu.Item>
                                    </Menu>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar
