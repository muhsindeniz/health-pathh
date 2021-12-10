import React from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'

const LoginRegister = () => {
    return (
        <>

            <HeaderBanner page="Login" targetPage="Login" />

            <div className="customer_login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="account_form">
                                <h2>login</h2>
                                <form action="#">
                                    <p>
                                        <label>Username or email <span>*</span></label>
                                        <input type="text" />
                                    </p>
                                    <p>
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" />
                                    </p>
                                    <div className="login_submit">
                                        <a href="#">Lost your password?</a>
                                        <label htmlFor="remember">
                                            <input id="remember" type="checkbox" />
                                            Remember me
                                        </label>
                                        <button type="submit">login</button>

                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="account_form register">
                                <h2>Register</h2>
                                <form action="#">
                                    <p>
                                        <label>Email address  <span>*</span></label>
                                        <input type="text" />
                                    </p>
                                    <p>
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" />
                                    </p>
                                    <div className="login_submit">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRegister
