import React, { useContext, useEffect } from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext'

const Contact = () => {

    let { setting } = useContext(CompanySettingsContext);

    return (
        <>
            <HeaderBanner page="Contact Us" targetPage="Contact Us" />

            <div className="contact_map mt-70">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51590.889037618246!2d35.934378443244356!3d36.08299090611279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1525d6a47a2890ad%3A0x8ad66bfc29e4b6e8!2sSamanda%C4%9F%2C%20Hatay!5e0!3m2!1sen!2str!4v1638790343156!5m2!1sen!2str" width="100%" height="450" style={{ border: "none" }} allowFullScreen="" loading="lazy"></iframe>
            </div>

            <div className="contact_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact_message content">
                                <h3>contact us</h3>
                                <p>We find the most healthy and natural foods for you, we prepare your personalized diet lists according to your body mass index value.</p>
                                <ul>
                                    <li><i className="fa fa-fax"></i>  Address : {setting?.address}</li>
                                    <li><i className="far fa-paper-plane"></i> <a target="_blank" href={`mailto:${setting?.email}`}>{setting?.email}</a></li>
                                    <li><i className="fa fa-phone"></i><a target="_blank" href={`tel:${setting?.phone}`}>{setting?.phone}</a>  </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact_message form">
                                <h3>Tell us your project</h3>
                                <form id="contact-form" method="" action="">
                                    <p>
                                        <label> Your Name (required)</label>
                                        <input name="name" placeholder="Name *" type="text" />
                                    </p>
                                    <p>
                                        <label>  Your Email (required)</label>
                                        <input name="email" placeholder="Email *" type="email" />
                                    </p>
                                    <p>
                                        <label>  Subject</label>
                                        <input name="subject" placeholder="Subject *" type="text" />
                                    </p>
                                    <div className="contact_textarea">
                                        <label>  Your Message</label>
                                        <textarea placeholder="Message *" name="message" className="form-control2" ></textarea>
                                    </div>
                                    <button type="submit"> Send</button>
                                    <p className="form-messege"></p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
