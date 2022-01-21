import React, { useContext, useState } from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import axios from 'axios'
import { message, Spin } from 'antd'
import Cookies from "js-cookie"
import { useHistory } from "react-router-dom";
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext'
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext'

const LoginRegister = () => {

    let [loginInfo, setLoginInfo] = useState({ "email": "", "password": "" })
    let [loading, setLoading] = useState(false);
    let history = useHistory();
    let { setUser } = useContext(CompanySettingsContext);
    let { setToken } = useContext(GlobalSettingsContext);

    let loginSubmit = () => {
        if (loginInfo.email == "" || loginInfo.password == "") {
            message.info("Lütfen tüm alanları doldurun!!.");
        } else {
            setLoading(true)
            axios.post("http://localhost:3000/api/login", {
                email: loginInfo.email,
                password: loginInfo.password
            }, {
                headers: { "Content-Type": "application/json" }
            }).then(({data: { result, result_message }}) => {
                if(result){
                    message.success("Giriş Başarılı..")
                    Cookies.set("user", JSON.stringify(result))
                    Cookies.set("token", result.token)
                    setToken(result.token)
                    setUser(result);
                    setLoading(false)
                    history.push('/')
                }else {
                    message.error(result_message, 3)
                    setLoading(false)
                }
                setLoading(false)
            })
        }
    }

    return (
        <>

            <HeaderBanner page="Login" targetPage="Login" />

            <div className="customer_login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="account_form">
                                <h2>login</h2>
                                <form action="javascript:void(0)">
                                    <p>
                                        <label>Username or email <span>*</span></label>
                                        <input onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })} type="text" />
                                    </p>
                                    <p>
                                        <label>Passwords <span>*</span></label>
                                        <input onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} type="password" />
                                    </p>
                                    <div className="login_submit">
                                        <a href="#">Lost your password?</a>
                                        <label htmlFor="remember">
                                            <input id="remember" type="checkbox" />
                                            Remember me
                                        </label>
                                        <button type="submit" onClick={() => loginSubmit()}>login</button>

                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="account_form register">
                                <h2>Register</h2>
                                <form action="javascript:void(0)">
                                    <p>
                                        <label>Name Surname <span>*</span></label>
                                        <input type="text" />
                                    </p>
                                    <p>
                                        <label>Email address  <span>*</span></label>
                                        <input type="email" />
                                    </p>
                                    <p>
                                        <label>Passwords <span>*</span></label>
                                        <input type="password" />
                                    </p>
                                    <p>
                                        <label>Passwords again <span>*</span></label>
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

            {
                loading && <div className="loading__container">
                    <Spin size="large" />
                </div>
            }
        </>
    )
}

export default LoginRegister
