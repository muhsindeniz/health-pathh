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
                                        <a href="index.html"><img src={logo} alt="" /></a>
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
                                        <p>Copyright  © 2021  <a href="#">Safira</a>  . All Rights Reserved.Design by  <a href="#">Safira</a></p>
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



            <div className="modal fade" id="modal_box" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="icon-x"></i></span>
                        </button>
                        <div className="modal_body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="modal_tab">
                                            <div className="tab-content product-details-large">
                                                <div className="tab-pane fade show active" id="tab1" role="tabpanel" >
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src={productbig1} alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab2" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src={productbig2} alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab3" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src={productbig3} alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab4" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src={productbig4} alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal_tab_button">
                                                <ul className="nav product_navactive owl-carousel" role="tablist">
                                                    <li >
                                                        <a className="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="assets/img/product/product6.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link button_three" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false"><img src="assets/img/product/product7.jpg" alt="" /></a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <div className="modal_right">
                                            <div className="modal_title mb-10">
                                                <h2>Donec Ac Tempus</h2>
                                            </div>
                                            <div className="modal_price mb-10">
                                                <span className="new_price">$64.99</span>
                                                <span className="old_price" >$78.99</span>
                                            </div>
                                            <div className="modal_description mb-15">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel recusandae </p>
                                            </div>
                                            <div className="variants_selects">
                                                <div className="variants_size">
                                                    <h2>size</h2>
                                                    <select className="select_option">
                                                        <option selected defaultValue="1">s</option>
                                                        <option defaultValue="1">m</option>
                                                        <option defaultValue="1">l</option>
                                                        <option defaultValue="1">xl</option>
                                                        <option defaultValue="1">xxl</option>
                                                    </select>
                                                </div>
                                                <div className="variants_color">
                                                    <h2>color</h2>
                                                    <select className="select_option">
                                                        <option selected defaultValue="1">purple</option>
                                                        <option defaultValue="1">violet</option>
                                                        <option defaultValue="1">black</option>
                                                        <option defaultValue="1">pink</option>
                                                        <option defaultValue="1">orange</option>
                                                    </select>
                                                </div>
                                                <div className="modal_add_to_cart">
                                                    <form action="#">
                                                        <input min="1" max="100" step="2" defaultValue="1" type="number" />
                                                        <button type="submit">add to cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal_social">
                                                <h2>Share this product</h2>
                                                <ul>
                                                    <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                    <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
