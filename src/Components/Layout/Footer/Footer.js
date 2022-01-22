import React from 'react'
import logo from '../../../Assets/media/img/logo/logo.png';
import paypal1 from '../../../Assets/media/img/icon/paypal1.jpg'
import paypal2 from '../../../Assets/media/img/icon/paypal2.jpg'
import paypal3 from '../../../Assets/media/img/icon/paypal3.jpg'
import paypal4 from '../../../Assets/media/img/icon/paypal4.jpg'

import productbig1 from '../../../Assets/media/img/product/productbig1.jpg'
import productbig2 from '../../../Assets/media/img/product/productbig2.jpg'
import productbig3 from '../../../Assets/media/img/product/productbig3.jpg'
import productbig4 from '../../../Assets/media/img/product/productbig4.jpg'

import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer className="footer_widgets color_two">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-7">
                                <div className="widgets_container contact_us">
                                    <div className="footer_logo">
                                        <Link to="/"><img src={logo} alt="" /></Link>
                                    </div>
                                    <p className="footer_desc">We find the most healthy and natural foods for you, we prepare your personalized diet lists according to your body mass index value.</p>
                                    <p><span>Address:</span> New Neighborhood Ahmet Rasim Street House No: 145 Hatay / Samandag</p>
                                    <p><span>Email:</span> <a href="#">mnknsro413@gmail.com</a></p>
                                    <p><span>Call us:</span> <a href="tel:0(545) 725 04 40">0(545) 725 04 40</a> </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-5">
                                <div className="widgets_container widget_menu">
                                    <h3>Menu</h3>
                                    <div className="footer_menu">

                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/vegetables">Vegetables</Link></li>
                                            <li><Link to="/fruits"> Fruits</Link></li>
                                            <li><Link to="/natural-teas"> Natural Teas</Link></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <div className="widgets_container widget_menu">
                                <h3>Menu</h3>
                                    <div className="footer_menu">
                                        <ul>
                                        <li><Link to="/useful-plants"> Useful Plants</Link></li>
                                            <li><Link to="/diet-list"> Diet Lists</Link></li>
                                            <li><Link to="/contact"> Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="widgets_container widget_newsletter">
                                    <h3>Sign up newsletter</h3>
                                    <p className="footer_desc">Get updates by subscribe our weekly newsletter</p>
                                    <div className="subscribe_form">
                                        <form id="mc-form" className="mc-form footer-newsletter" >
                                            <input id="mc-email" type="email" autoComplete="off" placeholder="Enter you email" />
                                            <button id="mc-submit">Subscribe</button>
                                        </form>

                                        <div className="mailchimp-alerts text-centre">
                                            <div className="mailchimp-submitting"></div>
                                            <div className="mailchimp-success"></div>
                                            <div className="mailchimp-error"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_bottom mt-5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7">
                                    <div className="copyright_area">
                                        <p>Copyright  © 2021  <a href="#">Health Safira</a>  . All Rights Reserved.Design by  <a href="#">Muhsin Deniz</a></p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5">
                                    <div className="footer_payment">
                                        <ul>
                                            <li><a href="#"><img src={paypal1} alt="" /></a></li>
                                            <li><a href="#"><img src={paypal2} alt="" /></a></li>
                                            <li><a href="#"><img src={paypal3} alt="" /></a></li>
                                            <li><a href="#"><img src={paypal4} alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
