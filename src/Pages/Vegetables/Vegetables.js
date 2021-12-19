import React from 'react'
import { Link } from 'react-router-dom';
import productbig1 from '../../Assets/media/img/product/productbig1.jpg'
import productbig2 from '../../Assets/media/img/product/productbig2.jpg'
import banner17 from '../../Assets/media/img/bg/banner17.jpg'
import { Select } from 'antd';

const Vegetables = () => {

    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    } 
    
    return (
        <>
            <div className="shop_area shop_reverse mt-70 mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <aside className="sidebar_widget">
                                <div className="widget_inner">
                                    <div className="widget_list widget_filter">
                                        <h3>Filter by price</h3>
                                        <div className="filter-price">
                                            <input placeholder="En az" type="number" />
                                            <input placeholder="En az" type="number" />
                                            <button type="submit"><i class="fas fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                    <div className="widget_list widget_color">
                                        <h3>Choose Calorie Values</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Low-calorie Vegetables<span>(6)</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Medium-calorie Vegetables<span>(8)</span></a>
                                            </li>
                                            <li>
                                                <a href="#">High Calorie Vegetables<span>(10)</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list tags_widget">
                                        <h3>Product tags</h3>
                                        <div className="tag_cloud">
                                            <Link to="/vegetables">Vegetables</Link>
                                            <Link to="/vegetables">Low-calorie Vegetables</Link>
                                            <Link to="/vegetables">Helth Vegetables</Link>
                                            <Link to="/vegetables">Health</Link>
                                        </div>
                                    </div>
                                    <div className="widget_list banner_widget">
                                        <div className="banner_thumb">
                                            <a href="#"><img src={banner17} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <div className="col-lg-9 col-md-12">
                            <div className="shop_toolbar_wrapper">
                                <div className=" niceselect_option">
                                <Select defaultValue="Sort by average rating" style={{ width: "100%" }} onChange={handleChange}>
                                            <Option value="jack">Sort by popularity</Option>
                                            <Option value="lucy">Sort by newness</Option>
                                            <Option value="Yiminghe">Sort by price: low to high</Option>
                                            <Option value="a">Sort by price: low to high</Option>
                                            <Option value="b">Product Name: Z</Option>
                                        </Select>
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

export default Vegetables
