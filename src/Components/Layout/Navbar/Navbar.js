import React, { useState } from 'react'
import logo from '../../../Assets/media/img/logo/logo.png'
import { Link } from 'react-router-dom'
import product from '../../../Assets/media/img/s-product/product.jpg'
import product2 from '../../../Assets/media/img/s-product/product2.jpg'

const Navbar = () => {

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
                                <div className="col-lg-2 col-md-3 col-sm-3 col-3">
                                    <div className="logo">
                                        <a href="index.html"><img src={logo} alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-6 col-sm-7 col-8">
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
                                                <ul>
                                                    <li><Link to="/login">Register</Link></li>
                                                    <li><span>/</span></li>
                                                    <li><Link to="/login">Login</Link></li>
                                                </ul>
                                            </div>
                                            <div className="header_account_list header_wishlist">
                                                <Link to="/wishlist"><span className="lnr lnr-heart"></span> <span className="item_count">3</span> </Link>
                                            </div>
                                            <div className="header_account_list  mini_cart_wrapper">
                                                <Link to="/cart"><span className="lnr lnr-cart"></span><span className="item_count">2</span></Link>
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
                                                            <a href="cart.html"><i className="fa fa-shopping-cart"></i> View cart</a>
                                                        </div>
                                                        <div className="cart_button">
                                                            <a href="checkout.html"><i className="fa fa-sign-in"></i> Checkout</a>
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
                    <div className="header_bottom sticky-header">
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
                                <div className="col-lg-8">
                                    <div className="main_menu menu_position">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link to="/">home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/vegetables">Vegetables</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Fruits</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Natural Teas</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Useful Plants</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Diet Lists</Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Contact Us</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="call-support">
                                        <p><a href="tel:05457250440">(545) 725 04 40</a> Customer Support</p>
                                    </div>
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
