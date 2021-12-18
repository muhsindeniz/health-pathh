import React from 'react'
import { Link } from 'react-router-dom';

import productbig1 from '../../Assets/media/img/product/productbig1.jpg'
import productbig2 from '../../Assets/media/img/product/productbig2.jpg'
import Filter from '../../Components/Filters/Filter';

const NaturalTeas = () => {
    return (
        <>
             <div className="shop_area shop_reverse mt-70 mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <Filter />
                        </div>

                        <div className="col-lg-9 col-md-12">
                            <div className="shop_toolbar_wrapper">
                                <div className=" niceselect_option">
                                    <form className="select_option" action="#">
                                        <select name="orderby" id="short">
                                            <option selected defaultValue="1">Sort by average rating</option>
                                            <option value="2">Sort by popularity</option>
                                            <option value="3">Sort by newness</option>
                                            <option value="4">Sort by price: low to high</option>
                                            <option value="5">Sort by price: high to low</option>
                                            <option value="6">Product Name: Z</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="page_amount">
                                    <p>Showing 1–9 of 21 results</p>
                                </div>
                            </div>
                            <div className="row shop_wrapper">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <Link className="primary_img" to="/product-detail/1"><img src={productbig1} alt="" /></Link>
                                            <Link className="secondary_img" to="/product-detail/1"><img src={productbig2} alt="" /></Link>
                                            <div className="label_product">
                                                <span className="label_sale">Sale</span>
                                                <span className="label_new">New</span>
                                            </div>
                                            <div className="action_links">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_content grid_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                        </div>
                                        <div className="product_content list_content">
                                            <h4 className="product_name"><a href="product-details.html">Aliquam Consequat</a></h4>
                                            <p><Link to="product-detail">Fruits</Link></p>
                                            <div className="price_box">
                                                <span className="current_price">$26.00</span>
                                                <span className="old_price">$362.00</span>
                                            </div>
                                            <div className="product_desc">
                                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Viva..</p>
                                            </div>
                                            <div className="action_links list_action_right">
                                                <ul>
                                                    <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                    <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                    <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                    <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="shop_toolbar t_bottom">
                                <div className="pagination">
                                    <ul>
                                        <li className="current">1</li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li className="next"><a href="#">next</a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NaturalTeas
