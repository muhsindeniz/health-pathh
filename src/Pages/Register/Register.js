import React, { useContext, useState } from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import axios from 'axios'
import { message, Spin } from 'antd'
import { useHistory } from "react-router-dom";
import Loading from '../../Assets/media/gif/loading.gif'

const Register = () => {

    let history = useHistory();
    let [loading, setLoading] = useState(false);
    let [userRegister, setUserRegister] = useState({ "name": "", "email": "", "password": "", "passwordAgain": "" })

    let registerSubmit = () => {
        if (userRegister.name == "", userRegister.email == "", userRegister.password == "", userRegister.passwordAgain == "") {
            message.error("Please fill in all fields")
        } else {
            if (userRegister.password === userRegister.passwordAgain) {
                setLoading(true)
                axios.post("http://localhost:3000/api/register", {
                    name: userRegister.name,
                    email: userRegister.email,
                    password: userRegister.password
                }, {
                    headers: { "Content-Type": "application/json" }
                }).then(({ data: { result_message } }) => {
                    if (result_message.type == "success") {
                        message.success("Your registration has been done successfully.", 3)
                        history.push('/login')
                    }
                    else message.error("Registration failed!!", 3)
                    setLoading(false)
                })
            }
            else {
                message.error("Passwords are not the same, please check!!")
            }
        }
    }

    return (
        <>

            <HeaderBanner page="Register" targetPage="Register" />

            <div className="customer_login">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="account_form register register_form_container">
                                <form action="javascript:void(0)">
                                    <p>
                                        <label>Name Surname <span>*</span></label>
                                        <input onChange={(e) => setUserRegister({ ...userRegister, name: e.target.value })} type="text" />
                                    </p>
                                    <p>
                                        <label>Email address  <span>*</span></label>
                                        <input onChange={(e) => setUserRegister({ ...userRegister, email: e.target.value })} type="email" />
                                    </p>
                                    <p>
                                        <label>Passwords <span>*</span></label>
                                        <input onChange={(e) => setUserRegister({ ...userRegister, password: e.target.value })} type="password" />
                                    </p>
                                    <p>
                                        <label>Passwords again <span>*</span></label>
                                        <input onChange={(e) => setUserRegister({ ...userRegister, passwordAgain: e.target.value })} type="password" />
                                    </p>
                                    <div className="login_submit">
                                        <button className="w-100 m-0" onClick={() => registerSubmit()} type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                loading && <div className="loading__container">
                    <img src={Loading} />
                </div>
            }
        </>
    )
}

export default Register
