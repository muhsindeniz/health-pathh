import React, { useContext } from 'react'
import slider4 from '../../Assets/media/img/slider/slider4.jpg';
import slider5 from '../../Assets/media/img/slider/slider5.jpg';
import slider6 from '../../Assets/media/img/slider/slider6.jpg';
import banner4 from '../../Assets/media/img/bg/banner4.jpg';
import banner5 from '../../Assets/media/img/bg/banner5.jpg';
import banner6 from '../../Assets/media/img/bg/banner6.jpg';
import banner7 from '../../Assets/media/img/bg/banner7.jpg';
import banner8 from '../../Assets/media/img/bg/banner8.jpg';
import banner9 from '../../Assets/media/img/bg/banner9.jpg';
import product1 from '../../Assets/media/img/product/product1.jpg';
import product2 from '../../Assets/media/img/product/product2.jpg';
import product3 from '../../Assets/media/img/product/product3.jpg';
import product4 from '../../Assets/media/img/product/product4.jpg';
import product5 from '../../Assets/media/img/product/product5.jpg';
import product6 from '../../Assets/media/img/product/product6.jpg';
import product7 from '../../Assets/media/img/product/product7.jpg';
import product8 from '../../Assets/media/img/product/product8.jpg';
import product9 from '../../Assets/media/img/product/product9.jpg';
import product10 from '../../Assets/media/img/product/product10.jpg';
import product11 from '../../Assets/media/img/product/product11.jpg';
import product12 from '../../Assets/media/img/product/product12.jpg';
import product13 from '../../Assets/media/img/product/product13.jpg';
import product19 from '../../Assets/media/img/product/product19.jpg';
import banner1 from '../../Assets/media/img/bg/banner1.jpg';
import banner2 from '../../Assets/media/img/bg/banner2.jpg';
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Home = () => {

    let { mobile } = useContext(GlobalSettingsContext)
    let { name } = useContext(CompanySettingsContext);

    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span className=\"' + className + '\"></span>';
        }
    }

    return (
        <>
            <section className="slider_section color_two mb-70">
                <div className="slider_area">

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        centeredSlides
                        loop
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }} pagination={{
                            "clickable": true
                        }}
                    >

                        <SwiperSlide>
                            <div className="single_slider d-flex align-items-center" style={{ backgroundImage: `url(${slider4})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="slider_content">
                                                <h1>Fresh Organic Food</h1>
                                                <h2>Tomatoes, Onions & Garlic</h2>
                                                <p>
                                                    10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!
                                                </p>
                                                <Link to="/">Read more </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single_slider d-flex align-items-center" style={{ backgroundImage: `url(${slider5})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="slider_content">
                                                <h1>Onions & Shallots</h1>
                                                <h2>Natural Farm Products</h2>
                                                <p>
                                                    Widest range of farm-fresh Vegetables, Fruits & seasonal produce
                                                </p>
                                                <Link to="/">Read more </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single_slider d-flex align-items-center" style={{ backgroundImage: `url(${slider6})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="slider_content">
                                                <h1>Fresh Organic Food</h1>
                                                <h2>Cabbage, Root Vegetables</h2>
                                                <p>
                                                    Natural organic tomatoes make your health stronger. Put your information here
                                                </p>
                                                <Link to="/">Read more </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </section>



            <div className="banner_area banner_gallery2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <Link to="/"><img src={banner5} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <Link to="/"><img src={banner6} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="banner2_sidebar">
                                <div className="banner_thumb mb-30">
                                    <Link to="/"><img src={banner7} alt="" /></Link>
                                </div>
                                <div className="banner_thumb">
                                    <Link to="/"><img src={banner8} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="product_area color_two mb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <p>Recently added our store </p>
                                <h2>Mostview Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="product_container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product_carousel">

                                    <Swiper slidesPerView={mobile === true ? 1 : 4} spaceBetween={30} navigation={true} loop={true} autoplay={true} className="mySwiper">
                                        <SwiperSlide>
                                            <article className="single_product">
                                                <figure>
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="/product-detail/1"><img src={product19} alt="" /></Link>
                                                        <Link className="secondary_img" to="/product-detail/1"><img src={product19} alt="" /></Link>
                                                        <div className="label_product">
                                                            <span className="label_sale">Sale</span>
                                                            <span className="label_new">New</span>
                                                        </div>
                                                        <div className="action_links">
                                                            <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                                <ul>
                                                                    <li className="add_to_cart">
                                                                        Sepete Ekle
                                                                    </li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <figcaption className="product_content">
                                                        <h4 className="product_name"><Link to="/product-detail/1">Quisque In Arcu</Link></h4>
                                                        <p><Link to="/product-detail/1">Fruits</Link></p>
                                                        <div className="price_box">
                                                            <span className="current_price">$55.00</span>
                                                            <span className="old_price">$235.00</span>
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                            </article>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <article className="single_product">
                                                <figure>
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="/product-detail/1"><img src={product19} alt="" /></Link>
                                                        <Link className="secondary_img" to="/product-detail/1"><img src={product19} alt="" /></Link>
                                                        <div className="label_product">
                                                            <span className="label_sale">Sale</span>
                                                            <span className="label_new">New</span>
                                                        </div>
                                                        <div className="action_links">
                                                            <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                                <ul>
                                                                    <li className="add_to_cart">
                                                                        Sepete Ekle
                                                                    </li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <figcaption className="product_content">
                                                        <h4 className="product_name"><Link to="/product-detail/1">Quisque In Arcu</Link></h4>
                                                        <p><Link to="/product-detail/1">Fruits</Link></p>
                                                        <div className="price_box">
                                                            <span className="current_price">$55.00</span>
                                                            <span className="old_price">$235.00</span>
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                            </article>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <article className="single_product">
                                                <figure>
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="/product-detail/1"><img src={product19} alt="" /></Link>
                                                        <Link className="secondary_img" to="/product-detail/1"><img src={product19} alt="" /></Link>
                                                        <div className="label_product">
                                                            <span className="label_sale">Sale</span>
                                                            <span className="label_new">New</span>
                                                        </div>
                                                        <div className="action_links">
                                                            <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                                <ul>
                                                                    <li className="add_to_cart">
                                                                        Sepete Ekle
                                                                    </li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <figcaption className="product_content">
                                                        <h4 className="product_name"><Link to="/product-detail/1">Quisque In Arcu</Link></h4>
                                                        <p><Link to="/product-detail/1">Fruits</Link></p>
                                                        <div className="price_box">
                                                            <span className="current_price">$55.00</span>
                                                            <span className="old_price">$235.00</span>
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                            </article>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <article className="single_product">
                                                <figure>
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="/product-detail/1"><img src={product19} alt="" /></Link>
                                                        <Link className="secondary_img" to="/product-detail/1"><img src={product19} alt="" /></Link>
                                                        <div className="label_product">
                                                            <span className="label_sale">Sale</span>
                                                            <span className="label_new">New</span>
                                                        </div>
                                                        <div className="action_links">
                                                            <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                                <ul>
                                                                    <li className="add_to_cart">
                                                                        Sepete Ekle
                                                                    </li>
                                                                </ul>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <figcaption className="product_content">
                                                        <h4 className="product_name"><Link to="/product-detail/1">Quisque In Arcu</Link></h4>
                                                        <p><Link to="/product-detail/1">Fruits</Link></p>
                                                        <div className="price_box">
                                                            <span className="current_price">$55.00</span>
                                                            <span className="old_price">$235.00</span>
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                            </article>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="banner_fullwidth color_two">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner_full_content">
                                <p>Black Fridays !</p>
                                <h2>Sale 50% OFf <span>all vegetable products</span></h2>
                                <Link to="/">discover now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="product_banner_area color_two mb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <p>Recently added our store </p>
                                <h2>Best Sellers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="product_banner_container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="banner_thumb">
                                    <Link to="/"><img src={banner4} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="small_product_area product_carousel  product_column2 owl-carousel">
                                    <div className="product_items row">
                                        <article className="single_product col-sm-12 col-lg-6">
                                            <figure>
                                                <div className="product_thumb">
                                                    <Link className="primary_img" to="/product-detail/1"><img src={product5} alt="" /></Link>
                                                    <Link className="secondary_img" to="/product-detail/1"><img src={product6} alt="" /></Link>
                                                </div>
                                                <figcaption className="product_content">
                                                    <h4 className="product_name"><Link to="/product-detail/1">Mauris Vel Tellus</Link></h4>
                                                    <p><Link to="/product-detail/1">Fruits</Link></p>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                            <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                            <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                            <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="price_box">
                                                        <span className="current_price">$56.00</span>
                                                        <span className="old_price">$362.00</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </article>

                                        <article className="single_product col-sm-12 col-lg-6">
                                            <figure>
                                                <div className="product_thumb">
                                                    <Link className="primary_img" to="/product-detail/1"><img src={product5} alt="" /></Link>
                                                    <Link className="secondary_img" to="/product-detail/1"><img src={product6} alt="" /></Link>
                                                </div>
                                                <figcaption className="product_content">
                                                    <h4 className="product_name"><Link to="/product-detail/1">Mauris Vel Tellus</Link></h4>
                                                    <p><Link to="/product-detail/1">Fruits</Link></p>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                            <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                            <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                            <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="price_box">
                                                        <span className="current_price">$56.00</span>
                                                        <span className="old_price">$362.00</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </article>

                                        <article className="single_product col-sm-12 col-lg-6">
                                            <figure>
                                                <div className="product_thumb">
                                                    <Link className="primary_img" to="/product-detail/1"><img src={product5} alt="" /></Link>
                                                    <Link className="secondary_img" to="/product-detail/1"><img src={product6} alt="" /></Link>
                                                </div>
                                                <figcaption className="product_content">
                                                    <h4 className="product_name"><Link to="/product-detail/1">Mauris Vel Tellus</Link></h4>
                                                    <p><Link to="/product-detail/1">Fruits</Link></p>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                            <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                            <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                            <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="price_box">
                                                        <span className="current_price">$56.00</span>
                                                        <span className="old_price">$362.00</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </article>

                                        <article className="single_product col-sm-12 col-lg-6">
                                            <figure>
                                                <div className="product_thumb">
                                                    <Link className="primary_img" to="/product-detail/1"><img src={product5} alt="" /></Link>
                                                    <Link className="secondary_img" to="/product-detail/1"><img src={product6} alt="" /></Link>
                                                </div>
                                                <figcaption className="product_content">
                                                    <h4 className="product_name"><Link to="/product-detail/1">Mauris Vel Tellus</Link></h4>
                                                    <p><Link to="/product-detail/1">Fruits</Link></p>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                            <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                            <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                            <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="price_box">
                                                        <span className="current_price">$56.00</span>
                                                        <span className="old_price">$362.00</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </article>

                                        <article className="single_product col-sm-12 col-lg-6">
                                            <figure>
                                                <div className="product_thumb">
                                                    <Link className="primary_img" to="/product-detail/1"><img src={product5} alt="" /></Link>
                                                    <Link className="secondary_img" to="/product-detail/1"><img src={product6} alt="" /></Link>
                                                </div>
                                                <figcaption className="product_content">
                                                    <h4 className="product_name"><Link to="/product-detail/1">Mauris Vel Tellus</Link></h4>
                                                    <p><Link to="/product-detail/1">Fruits</Link></p>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                            <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                            <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                            <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="price_box">
                                                        <span className="current_price">$56.00</span>
                                                        <span className="old_price">$362.00</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </article>

                                        <article className="single_product col-sm-12 col-lg-6">
                                            <figure>
                                                <div className="product_thumb">
                                                    <Link className="primary_img" to="/product-detail/1"><img src={product5} alt="" /></Link>
                                                    <Link className="secondary_img" to="/product-detail/1"><img src={product6} alt="" /></Link>
                                                </div>
                                                <figcaption className="product_content">
                                                    <h4 className="product_name"><Link to="/product-detail/1">Mauris Vel Tellus</Link></h4>
                                                    <p><Link to="/product-detail/1">Fruits</Link></p>
                                                    <div className="action_links">
                                                        <ul>
                                                            <li className="add_to_cart"><Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></Link></li>
                                                            <li className="quick_button"><Link to="/" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></Link></li>
                                                            <li className="wishlist"><Link to="/wishlist" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></Link></li>
                                                            <li className="compare"><Link to="/" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="price_box">
                                                        <span className="current_price">$56.00</span>
                                                        <span className="old_price">$362.00</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </article>


                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="banner_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <a href="shop.html"><img src={banner1} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <a href="shop.html"><img src={banner2} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="banner_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <Link to="/"><img src={banner9} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="custom_product_area color_two">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <p>Recently added our store </p>
                                <h2>Featured Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="small_product_area product_carousel product_column3 owl-carousel">
                                <div className="row mb-5">
                                    <article className="single_product col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="#"><img src={product1} alt="" /></a>
                                                <a className="secondary_img" href="#"><img src={product2} alt="" /></a>
                                            </div>
                                            <figcaption className="product_content">
                                                <h4 className="product_name"><a href="#">Aliquam Consequat</a></h4>
                                                <p><a href="#">Fruits</a></p>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                                        <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                        <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>
                                                        <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="price_box">
                                                    <span className="current_price">$26.00</span>
                                                    <span className="old_price">$362.00</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                    <article className="single_product col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="#"><img src={product3} alt="" /></a>
                                                <a className="secondary_img" href="#"><img src={product4} alt="" /></a>
                                            </div>
                                            <figcaption className="product_content">
                                                <h4 className="product_name"><a href="#">Donec Non Est</a></h4>
                                                <p><a href="#">Fruits</a></p>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                                        <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                        <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>
                                                        <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="price_box">
                                                    <span className="current_price">$46.00</span>
                                                    <span className="old_price">$382.00</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                    <article className="single_product col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="#"><img src={product5} alt="" /></a>
                                                <a className="secondary_img" href="#"><img src={product6} alt="" /></a>
                                            </div>
                                            <figcaption className="product_content">
                                                <h4 className="product_name"><a href="#">Mauris Vel Tellus</a></h4>
                                                <p><a href="#">Fruits</a></p>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                                        <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                        <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>
                                                        <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="price_box">
                                                    <span className="current_price">$56.00</span>
                                                    <span className="old_price">$362.00</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                    <article className="single_product col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="#"><img src={product5} alt="" /></a>
                                                <a className="secondary_img" href="#"><img src={product6} alt="" /></a>
                                            </div>
                                            <figcaption className="product_content">
                                                <h4 className="product_name"><a href="#">Mauris Vel Tellus</a></h4>
                                                <p><a href="#">Fruits</a></p>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                                        <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                        <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>
                                                        <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="price_box">
                                                    <span className="current_price">$56.00</span>
                                                    <span className="old_price">$362.00</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                    <article className="single_product col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="#"><img src={product5} alt="" /></a>
                                                <a className="secondary_img" href="#"><img src={product6} alt="" /></a>
                                            </div>
                                            <figcaption className="product_content">
                                                <h4 className="product_name"><a href="#">Mauris Vel Tellus</a></h4>
                                                <p><a href="#">Fruits</a></p>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                                        <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                        <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>
                                                        <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="price_box">
                                                    <span className="current_price">$56.00</span>
                                                    <span className="old_price">$362.00</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                    <article className="single_product col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <figure>
                                            <div className="product_thumb">
                                                <a className="primary_img" href="#"><img src={product5} alt="" /></a>
                                                <a className="secondary_img" href="#"><img src={product6} alt="" /></a>
                                            </div>
                                            <figcaption className="product_content">
                                                <h4 className="product_name"><a href="#">Mauris Vel Tellus</a></h4>
                                                <p><a href="#">Fruits</a></p>
                                                <div className="action_links">
                                                    <ul>
                                                        <li className="add_to_cart"><a href="cart.html" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"> <span className="lnr lnr-cart"></span></a></li>
                                                        <li className="quick_button"><a href="#" data-tippy="quick view" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true" data-bs-toggle="modal" data-bs-target="#modal_box" > <span className="lnr lnr-magnifier"></span></a></li>
                                                        <li className="wishlist"><a href="wishlist.html" data-tippy="Add to Wishlist" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-heart"></span></a></li>
                                                        <li className="compare"><a href="#" data-tippy="Add to Compare" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true"><span className="lnr lnr-sync"></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="price_box">
                                                    <span className="current_price">$56.00</span>
                                                    <span className="old_price">$362.00</span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
