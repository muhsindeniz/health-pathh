import React, { useContext, useState } from 'react'
import logo from '../../../Assets/media/img/logo/logo.png';
import paypal1 from '../../../Assets/media/img/icon/paypal1.jpg'
import paypal2 from '../../../Assets/media/img/icon/paypal2.jpg'
import paypal3 from '../../../Assets/media/img/icon/paypal3.jpg'
import paypal4 from '../../../Assets/media/img/icon/paypal4.jpg'
import productbig1 from '../../../Assets/media/img/product/productbig1.jpg'
import productbig2 from '../../../Assets/media/img/product/productbig2.jpg'
import productbig3 from '../../../Assets/media/img/product/productbig3.jpg'
import productbig4 from '../../../Assets/media/img/product/productbig4.jpg'
import Loading from '../../../Assets/media/gif/loading.gif'

import { CompanySettingsContext } from '../../../Contexts/CompanySettingsContext';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import { GlobalSettingsContext } from '../../../Contexts/GlobalSettingsContext';

const Footer = () => {

    let { user, setting } = useContext(CompanySettingsContext);
    let { token } = useContext(GlobalSettingsContext)

    let [loading, setLoading] = useState(false);

    let handleSubmit = (e) => {
        e.preventDefault()

        if (!token) {
            message.info("Lütfen abone olmadan önce giriş yapın!")
        } else {
            if (e.target[0].value == "") {
                message.info("Please enter your e-mail address for subscription!")
            } else {
                setLoading(true)
                axios.post(`http://localhost:3000/api/addSubscribe`, {
                    userId: user._id,
                    email: e.target[0].value
                })
                    .then(resp => {
                        if (resp.data.result_message.type === 'success') {
                            message.success("Your subscription has been successfully registered, now you will be instantly informed of all news, announcements and discounts.")
                        } else {
                            message.info(resp.data.result_message.message)
                        }
                        setLoading(false)
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                    })
            }
        }
    }

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
                                    <p><span>Address:</span> {setting?.address}</p>
                                    <p><span>Email:</span> <a target="_blank" href={`mailto:${setting?.email}`}>{setting?.email}</a></p>
                                    <p><span>Call us:</span> <a target="_blank" href={`tel:${setting?.phone}`}>{setting?.phone}</a> </p>
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
                                        <form onSubmit={handleSubmit} className="mc-form footer-newsletter" >
                                            <input type="email" autoComplete="off" placeholder="Enter you email" />
                                            <button>Subscribe</button>
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
                                        <p>Copyright  © 2021  <a href="#">Health Path</a>. All Rights Reserved. Design by <a href="#">Muhsin Deniz</a></p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5">
                                    {/* <div className="footer_payment">
                                        <ul>
                                            <li><a href="#"><img src={paypal1} alt="" /></a></li>
                                            <li><a href="#"><img src={paypal2} alt="" /></a></li>
                                            <li><a href="#"><img src={paypal3} alt="" /></a></li>
                                            <li><a href="#"><img src={paypal4} alt="" /></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {
                loading && <div className="loading__container">
                    <img src={Loading} />
                </div>
            }
        </>
    )
}

export default Footer
