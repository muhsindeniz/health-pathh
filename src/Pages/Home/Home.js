import React, { useContext, useEffect, useState } from 'react'
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
import product19 from '../../Assets/media/img/product/product19.jpg';
import banner1 from '../../Assets/media/img/bg/banner1.jpg';
import banner2 from '../../Assets/media/img/bg/banner2.jpg';
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import { message, Spin, Select } from 'antd'
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';
import Loading from '../../Assets/media/gif/loading.gif'
import axios from 'axios';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Home = () => {

    let { mobile, basket, setBasket } = useContext(GlobalSettingsContext)
    let { user } = useContext(CompanySettingsContext);
    let [vegetablesProduct, setVegetablesProduct] = useState(null)
    let [loading, setLoading] = useState(false)

    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
            return '<span className=\"' + className + '\"></span>';
        }
    }

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/vegetables')
            .then(resp => {
                setVegetablesProduct(resp.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    console.log(vegetablesProduct)

    function ADD_TO_BASKET(product) {
        var response = basket.find(resp => resp._id === product._id)
        if (!response) {
            setBasket([...basket, product])
            ADD_DB_BASKET([...basket, product])
        } else {
            setBasket([...basket.filter(b => b._id !== product._id), { ...response, quntity: response.quntity + 1 }])
            ADD_DB_BASKET([...basket.filter(b => b._id !== product._id), { ...response, quntity: response.quntity + 1 }])
        }
    }

    function ADD_DB_BASKET(data) {
        setLoading(true)
        axios.post(`http://localhost:3000/api/basket`, {
            userId: user._id,
            products: data
        })
            .then(response => {
                message.success("Product Added to Cart.")
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
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
                                                <Link to="/vegetables">Read more </Link>
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
                                                <Link to="/vegetables">Read more </Link>
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
                                                <Link to="/vegetables">Read more </Link>
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
                                    <Link to="/fruits"><img src={banner5} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <Link to="/vegetables"><img src={banner6} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="banner2_sidebar">
                                <div className="banner_thumb mb-30">
                                    <Link to="/natural-teas"><img src={banner7} alt="" /></Link>
                                </div>
                                <div className="banner_thumb">
                                    <Link to="/useful-plants"><img src={banner8} alt="" /></Link>
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
                                <h2>Vegetables</h2>
                            </div>
                        </div>
                    </div>
                    <div className="product_container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product_carousel">

                                    <Swiper slidesPerView={mobile === true ? 1 : 4} spaceBetween={30} navigation={true} loop={true} autoplay={true} className="mySwiper">

                                        {
                                            vegetablesProduct && vegetablesProduct.map((vegetablesProduct, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="single_product">
                                                        <div className="product_thumb">
                                                            <Link className="primary_img" to={`/product-detail/${vegetablesProduct._id}?cat=${vegetablesProduct.productCategory}`}><img style={{ height: "240px", objectFit: "cover" }} src={`http://localhost:3000/${vegetablesProduct.avatar}`} alt="" /></Link>
                                                            <div className="label_product">
                                                                <span className="label_sale"><small>Oil: {vegetablesProduct.oil} kcal</small></span>
                                                                <span className="label_new">New</span>
                                                            </div>
                                                            <div className={parseFloat(vegetablesProduct?.stock) < 1 ? "d-none" : "d-flex action_links"} >
                                                                <button disabled={parseFloat(vegetablesProduct?.stock) < 1 ? true : false} className={parseFloat(vegetablesProduct?.stock) < 1 ? "passiveButtonCategories w-100 d-none" : "w-100 activeButton"} style={{ background: "none", border: "none" }} onClick={() =>
                                                                    ADD_TO_BASKET({
                                                                        _id: vegetablesProduct._id,
                                                                        name: vegetablesProduct.name,
                                                                        avatar: vegetablesProduct.avatar,
                                                                        farmerName: vegetablesProduct.farmerName,
                                                                        quntity: 1,
                                                                        total: parseFloat(vegetablesProduct.newPrice),
                                                                        price: vegetablesProduct.price,
                                                                        newPrice: vegetablesProduct.newPrice,
                                                                        category: vegetablesProduct.productCategory
                                                                    })}>
                                                                    Sepete Ekle
                                                                </button>

                                                            </div>
                                                        </div>
                                                        <div className="product_content grid_content">
                                                            <h4 className="product_name mb-2"><a href="#">{vegetablesProduct.name}</a></h4>
                                                            <div className={parseFloat(vegetablesProduct?.stock) < 1 ? "text-danger" : "text-dark"}>
                                                                <b>
                                                                    {
                                                                        parseFloat(vegetablesProduct?.stock) < 1 ? "Stokta yok" : ""
                                                                    }
                                                                </b>
                                                            </div>
                                                            <div className="price_box m-0">
                                                                <span className="old_price">{vegetablesProduct.price} TL</span>
                                                                <span style={{ marginLeft: "10px" }} className="current_price">{vegetablesProduct.newPrice} TL</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
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
                                <h2>Farmer discount <span>all Useful Plants products</span></h2>
                                <Link to="/useful-plants">discover now</Link>
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
                                    <Link to="/vegetables"><img src={banner4} alt="" /></Link>
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
                                                        <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                            <ul>
                                                                <li className="add_to_cart">
                                                                    Add to Basket
                                                                </li>
                                                            </ul>
                                                        </Link>
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
                                                        <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                            <ul>
                                                                <li className="add_to_cart">
                                                                    Add to Basket
                                                                </li>
                                                            </ul>
                                                        </Link>
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
                                                        <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                            <ul>
                                                                <li className="add_to_cart">
                                                                    Sepete Ekle
                                                                </li>
                                                            </ul>
                                                        </Link>
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
                                                        <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                            <ul>
                                                                <li className="add_to_cart">
                                                                    Add to Basket
                                                                </li>
                                                            </ul>
                                                        </Link>
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
                                                        <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                            <ul>
                                                                <li className="add_to_cart">
                                                                    Add to Basket
                                                                </li>
                                                            </ul>
                                                        </Link>
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
                                                        <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                            <ul>
                                                                <li className="add_to_cart">
                                                                    Add to Basket
                                                                </li>
                                                            </ul>
                                                        </Link>
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
                                    <Link to="/vegetables"><img src={banner1} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <Link to="/fruits"><img src={banner2} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 

            <div className="banner_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single_banner">
                                <div className="banner_thumb">
                                    <Link to="/fruits"><img src={banner9} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 */}


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
                                                    <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                        <ul>
                                                            <li className="add_to_cart">
                                                                Add to Basket
                                                            </li>
                                                        </ul>
                                                    </Link>
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
                                                    <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                        <ul>
                                                            <li className="add_to_cart">
                                                                Add to Basket
                                                            </li>
                                                        </ul>
                                                    </Link>
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
                                                    <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                        <ul>
                                                            <li className="add_to_cart">
                                                                Add to Basket
                                                            </li>
                                                        </ul>
                                                    </Link>
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
                                                    <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                        <ul>
                                                            <li className="add_to_cart">
                                                                Add to Basket
                                                            </li>
                                                        </ul>
                                                    </Link>
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
                                                    <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                        <ul>
                                                            <li className="add_to_cart">
                                                                Add to Basket
                                                            </li>
                                                        </ul>
                                                    </Link>
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
                                                    <Link to="/cart" data-tippy="Add to cart" data-tippy-placement="top" data-tippy-arrow="true" data-tippy-inertia="true">
                                                        <ul>
                                                            <li className="add_to_cart">
                                                                Add to Basket
                                                            </li>
                                                        </ul>
                                                    </Link>
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

            {
                loading && <div className="loading__container">
                    <img src={Loading} />
                </div>
            }
        </>
    )
}

export default Home
