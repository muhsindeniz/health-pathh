import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import logo from '../../../Assets/media/img/logo/logo.png'
import { Link } from 'react-router-dom'
import product from '../../../Assets/media/img/s-product/product.jpg'
import product2 from '../../../Assets/media/img/s-product/product2.jpg'
import { Menu, message } from 'antd';
import { GlobalSettingsContext } from '../../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../../Contexts/CompanySettingsContext'
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie'
import axios from 'axios'
import SearchPanel from '../../SearchPanel/SearchPanel'

const Navbar = (props) => {

    let { mobile, token, setToken, basket } = useContext(GlobalSettingsContext)
    let { user, setUser } = useContext(CompanySettingsContext);
    let history = useHistory();
    let [searchData, setSearchData] = useState([]);
    let [loading, setLoading] = useState(false);
    let [text, setText] = useState("");

    let logOut = () => {
        Cookies.remove("user")
        Cookies.remove("token")
        setUser(null)
        setToken(null)
        message.success("Successfully logged out.")
        document.location.reload();
    }

    useEffect(() => {
        if (!token || !user) {
            history.push('/login')
        }
    }, [])

    let handleChange = () => {
        let data = text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
        if (data == "" || text.trim() == "") {

        } else {
            setLoading(true)
            axios.post('http://localhost:3000/api/search', {
                text: text
            })
                .then(resp => {
                    setSearchData(resp.data.result)
                    setLoading(false)

                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)

                })
        }
    }

    console.log(text)

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
                                                    <input onChange={(e) => {setText(e.target.value); handleChange(e.target.value)}} placeholder="Search product..." type="text" />
                                                    <button type="submit"><span className="lnr lnr-magnifier"></span></button>
                                                    {
                                                        text.length > 0 && <SearchPanel setText={setText} searchData={searchData} loading={loading} setLoading={setLoading} />
                                                    }
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
                                                                {!token ? "Giriş Yap" : "My account"}
                                                            </span>
                                                            <br />
                                                            <small>{!token ? "or sign up" : user?.name}</small>
                                                        </div>
                                                    </label>
                                                    <div className="section-dropdown">
                                                        <Link className={!token ? "d-block" : "d-none"} to="/login">Login</Link>
                                                        <Link className={!token ? "d-block" : "d-none"} to="/register">Sign up</Link>
                                                        <Link className={!token ? "d-none" : "d-block"} to="/my-orders">My orders</Link>
                                                        <Link className={!token ? "d-none" : "d-block"} to="/membership-infos">My User Info</Link>
                                                        <Link to="#" className={!token ? "d-none" : "d-block"} onClick={() => logOut()}>Logout</Link>
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
                                                                <i className="fas fa-shopping-cart" data-value={basket?.length || 0}></i>
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
                                                {
                                                    text.length > 0 && <SearchPanel searchData={searchData} loading={loading} setLoading={setLoading} />
                                                }
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