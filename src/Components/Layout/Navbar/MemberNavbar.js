import React, { useContext, useEffect, useState } from 'react'
import logo from '../../../Assets/media/img/logo/logo.png'
import { Link } from 'react-router-dom'
import product from '../../../Assets/media/img/s-product/product.jpg'
import product2 from '../../../Assets/media/img/s-product/product2.jpg'
import { Menu, message } from 'antd';
import { GlobalSettingsContext } from '../../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../../Contexts/CompanySettingsContext'
import { useHistory } from "react-router-dom";

const MemberNavbar = () => {

    let { mobile, token, setToken } = useContext(GlobalSettingsContext)
    let { user, setUser } = useContext(CompanySettingsContext);
    let history = useHistory();
    let [userName, setUserName] = useState(null);
    let [openMemberMenu, setOpenMemberMenu] = useState(false)

    let logOut = () => {
        message.info("Çıkış yapılıyor...")
        setTimeout(() => {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            setUser(null)
            setToken(null)
            message.success("Başarıyla çıkış yapıldı.")
            history.push('/')
        }, 2500)
    }

    useEffect(() => {
        if (token) {
            var matches = user?.name.match(/\b(\w)/g);
            var acronym = matches.join('');
            setUserName(acronym)
        }
        else {

        }
    }, [token])

    openMemberMenu == true && mobile ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"

    return (
        <>
            <header>
                <div className="main_header">
                    <div className="header_top">
                    </div>
                    <div className="header_middle">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-3 col-4">
                                    <div className="logo d-flex">
                                        <Link to="/"><img src={logo} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-9 col-8">
                                    <div className="header_right_info_member_ship">
                                        <div className="search_container_member mobail_s_none m-0">
                                            <form action="#" className="align-items-center">
                                                <div className="search_box">
                                                    <input placeholder="Search product..." type="text" />
                                                </div>
                                            </form>
                                        </div>

                                        {
                                            mobile === true ? "" : <Link to="/cart">
                                                <div className="members_basket_container">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                        </svg>
                                                    </span>
                                                    <span className="members_basket_title">Sepetim</span>
                                                </div>
                                            </Link>
                                        }

                                        {
                                            mobile === true ? "" : <Link to="/">
                                                <div className="members_basket_container">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                                                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                                        </svg>
                                                    </span>
                                                    <span className="members_basket_title">Siparişlerim</span>
                                                </div>
                                            </Link>
                                        }

                                        <div className="header_account_area">
                                            <label className="member_nav_profile" onClick={() => { setOpenMemberMenu(!openMemberMenu); }}>
                                                {
                                                    userName === null ? <i className="far fa-user"></i> : userName
                                                }

                                                {
                                                    openMemberMenu && <div className="member_nav_open_dropdown">
                                                        <div className="member_nav_open_dropdown_before"></div>
                                                        <header>
                                                            <div className="close_button" style={{ display: mobile ? "flex" : "none", justifyContent: "center", alignItems: "center", marginLeft: "auto" }}>
                                                                {
                                                                    mobile && <i className="fas fa-times"></i>
                                                                }
                                                            </div>
                                                        </header>
                                                        <main>
                                                            <section className="border-bottom pb-3">
                                                                <h4 className="mb-3">Hesabım</h4>
                                                                <div className="member_sub_menu_mobile">
                                                                    <Link className="d-flex" to="/membership-infos">
                                                                        <div><i className="fas fa-user-cog"></i></div>
                                                                        <span>Kullanıcı bilgilerim</span>
                                                                    </Link>
                                                                    {
                                                                        mobile === true ? <Link className="d-flex" to="/cart">
                                                                            <div><i className="fas fa-shopping-basket"></i></div>
                                                                            <span>Sepetim</span>
                                                                        </Link> : ""
                                                                    }
                                                                    <Link className="d-flex" to="/" onClick={() => logOut()}>
                                                                        <div><i className="fas fa-sign-out-alt"></i></div>
                                                                        <span>Çıkış</span>
                                                                    </Link>
                                                                </div>
                                                            </section>

                                                            <section className="customer_service">
                                                                <span>MÜŞTERİ HİZMETLERİ</span>

                                                                <ul>
                                                                    <li>Destek Taleplerim</li>
                                                                    <li>Çözüm Merkezi</li>
                                                                </ul>
                                                            </section>
                                                        </main>
                                                    </div>
                                                }
                                            </label>

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
                                <div className="col-sm-12 col-md-12 mobail_s_block">
                                    <div className="search_container_member">
                                        <form action="#">
                                            <div className="search_box">
                                                <input placeholder="Search product..." type="text" />
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

export default MemberNavbar
