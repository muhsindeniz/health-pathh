import React, { useState, useEffect, useContext } from 'react'
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { message, Spin } from 'antd'
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';

SwiperCore.use([Navigation, Thumbs]);

const ProductDetail = () => {

    let { id } = useParams();
    let [productDetail, setProductDetail] = useState(null)
    let [loading, setLoading] = useState(null)
    let { basket, setBasket } = useContext(GlobalSettingsContext)
    let { user } = useContext(CompanySettingsContext)
    let [priceProgress, setPriceProgress] = useState(1)

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/api/vegetables/${id}`)
            .then(res => {
                setProductDetail(res.data.result);
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
                setLoading(false)
            })
    }, [id])

    let ADD_TO_BASKET = (product) => {
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
                message.success("Ürün Sepete Eklendi.")
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }

    return (
        <>
            <div className="product_details mt-70 mb-70">
                <div className="container">
                    <div className="row product-detail-container-row">
                        <div className="col-lg-6 col-md-6 p-0">
                            <section className="product-detail-container">
                                <img src={`http://localhost:3000/${productDetail?.avatar}`} />
                            </section>
                        </div>
                        <div className="col-lg-6 col-md-6 p-0">
                            <div className="product_d_right">
                                <h1 className="mb-3"><b className="text-secondary">{productDetail?.name}</b></h1>
                                <div>
                                    <span><h4 className="mb-1"><b className="text-dark">Farmer Name</b></h4></span>
                                    <h4><a className="text-primary">{productDetail?.farmerName}</a></h4>
                                </div>
                                <div className="price_box">
                                    <div className="d-flex align-items-center">
                                        <h3 className="text-secondary"> <b><del>{productDetail?.price}$</del></b></h3>
                                        <h3 className="text-success" style={{ marginLeft: "20px" }}>
                                            %<b>{productDetail?.discount}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h12v12H0z" />
                                                        <path d="M10.886 3.004 6.73 9.866a.854.854 0 0 1-1.46 0L1.114 3.004a.854.854 0 0 1 .73-1.282h8.311a.854.854 0 0 1 .73 1.282z" fill="#439E4A" />
                                                    </g>
                                                </svg>
                                            </b>
                                        </h3>
                                    </div>
                                    <h2 className="text-success">{productDetail?.newPrice} $</h2>
                                </div>
                                <div className="product_variant quantity">
                                    <label>quantity</label>
                                    <input onChange={(e) => setPriceProgress(e.target.value)} min="1" max="100" defaultValue="1" type="number" />
                                    <button className={parseInt(productDetail?.stock) === 0 ? "passiveButton" : "button activeButton"} disabled={parseInt(productDetail?.stock) === 0 ? true : false} type="submit" onClick={() => ADD_TO_BASKET({
                                        _id: productDetail?._id,
                                        name: productDetail?.name,
                                        avatar: productDetail?.avatar,
                                        farmerName: productDetail?.farmerName,
                                        quntity: parseInt(priceProgress),
                                        total: parseFloat(productDetail?.newPrice),
                                        price: productDetail?.price,
                                        newPrice: productDetail?.newPrice,
                                        category: productDetail?.productCategory
                                    })}>add to cart</button>
                                </div>
                                <div className="product_meta">
                                    <span style={{ textTransform: "capitalize" }}>Category: <a>{productDetail?.productCategory}</a></span>
                                </div>

                                <div className="product_meta">
                                    <h4> <span>Stock Status:
                                        <b className={parseInt(productDetail?.stock) < 20 ? "text-danger" : "text-dark"}>
                                            {
                                                parseInt(productDetail?.stock) < 20 ? " Only " : ""
                                            }
                                            {productDetail?.stock} Kg
                                            {
                                                parseInt(productDetail?.stock) < 20 ? " left in stock" : ""
                                            }
                                        </b>
                                    </span></h4>
                                </div>

                                <div className="priduct_social">
                                    <ul>
                                        <li><a className="facebook" href="#" title="facebook"><i className="fab fa-facebook-f"></i> Like</a></li>
                                        <li><a className="twitter" href="#" title="twitter"><i className="fab fa-twitter"></i> tweet</a></li>
                                        <li><a className="pinterest" href="#" title="pinterest"><i className="fab fa-pinterest"></i> save</a></li>
                                        <li><a className="google-plus" href="#" title="google +"><i className="fab fa-google-plus"></i> share</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product_d_info mb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_d_inner">
                                <div className="product_info_button">
                                    <ul className="nav" role="tablist" id="nav-tab">
                                        <li >
                                            <a className="active" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Description</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="info" role="tabpanel" >
                                        <div className="product_info_content">
                                            <p>
                                                {productDetail?.productDescription}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="sheet" role="tabpanel" >
                                        <div className="product_d_table">
                                            <form action="#">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="first_child">Compositions</td>
                                                            <td>Polyester</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first_child">Styles</td>
                                                            <td>Girly</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first_child">Properties</td>
                                                            <td>Short Dress</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </form>
                                        </div>
                                        <div className="product_info_content">
                                            <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="reviews" role="tabpanel" >
                                        <div className="reviews_wrapper">
                                            <h2>1 review for Donec eu furniture</h2>
                                            <div className="reviews_comment_box">
                                                <div className="comment_thmb">
                                                    <img src="assets/img/blog/comment2.jpg" alt="" />
                                                </div>
                                                <div className="comment_text">
                                                    <div className="reviews_meta">
                                                        <div className="star_rating">
                                                            <ul>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <p><strong>admin </strong>- September 12, 2018</p>
                                                        <span>roadthemes</span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="comment_title">
                                                <h2>Add a review </h2>
                                                <p>Your email address will not be published.  Required fields are marked </p>
                                            </div>
                                            <div className="product_ratting mb-10">
                                                <h3>Your rating</h3>
                                                <ul>
                                                    <li><a href="#"><i className="icon-star"></i></a></li>
                                                    <li><a href="#"><i className="icon-star"></i></a></li>
                                                    <li><a href="#"><i className="icon-star"></i></a></li>
                                                    <li><a href="#"><i className="icon-star"></i></a></li>
                                                    <li><a href="#"><i className="icon-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product_review_form">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <label htmlFor="review_comment">Your review </label>
                                                            <textarea name="comment" id="review_comment" ></textarea>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <label htmlFor="author">Name</label>
                                                            <input id="author" type="text" />

                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <label htmlFor="email">Email </label>
                                                            <input id="email" type="text" />
                                                        </div>
                                                    </div>
                                                    <button type="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default ProductDetail
