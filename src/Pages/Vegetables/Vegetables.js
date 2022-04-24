import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Link } from 'react-router-dom';
import banner17 from '../../Assets/media/img/bg/banner17.jpg'
import { Select } from 'antd';
import axios from 'axios';
import { message, Spin } from 'antd'
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';

const Vegetables = () => {

    const { Option } = Select;
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let { basket, setBasket } = useContext(GlobalSettingsContext)
    let { user } = useContext(CompanySettingsContext)
    let [filterButtonActive, setFilterButtonActive] = useState(null);
    let [priceFilter, setPriceFilter] = useState({
        minPrice: "",
        maxPrice: ""
    })

    console.log(basket)

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/api/vegetables`)
            .then(res => {
                setData(res.data);
                setFilterButtonActive(res.data)
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
                setLoading(false)
            })
    }, [])

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
                message.success("Ürün Sepete Eklendi.")
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }

    let filterProduct = () => {
        if (priceFilter.minPrice == '' && priceFilter.maxPrice == '') {
            setData([...data, ...filterButtonActive])
        } else if (priceFilter.minPrice == '0' || priceFilter.maxPrice == '0') {
            setData([...data, ...filterButtonActive])
        } else {
            setData([...data.filter(a => parseFloat(a.price) > parseFloat(priceFilter.minPrice) || parseFloat(a.price) < parseFloat(priceFilter.maxPrice))])
        }
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
                                            <input placeholder="En az" type="number" onChange={(e) => setPriceFilter({ ...priceFilter, minPrice: e.target.value })} />
                                            <input placeholder="En çok" type="number" onChange={(e) => setPriceFilter({ ...priceFilter, maxPrice: e.target.value })} />
                                            <button className={(priceFilter.minPrice == '' && priceFilter.maxPrice == '') ? "filterButtonPassive" : (priceFilter.minPrice == '0' || priceFilter.maxPrice == '0') ? "filterButtonPassive" : "filterButtonActive"} disabled={(priceFilter.minPrice == '' && priceFilter.maxPrice == '') ? true : (priceFilter.minPrice == '0' || priceFilter.maxPrice == '0') ? true : false} onClick={() => filterProduct()} type="submit"><i className="fas fa-arrow-right"></i></button>
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

                                {
                                    data && data.map((product, index) => (
                                        <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 ">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <Link className="primary_img" to={`/product-detail/${product._id}`}><img style={{ height: "240px", objectFit: "cover" }} src={`http://localhost:3000/${product.avatar}`} alt="" /></Link>
                                                    <div className="label_product">
                                                        <span className="label_sale"><small>Oil: {product.oil} kcal</small></span>
                                                        <span className="label_new">New</span>
                                                    </div>
                                                    <div className={parseFloat(product?.stock) < 1 ? "d-none" : "d-flex action_links"} >
                                                        <button disabled={parseFloat(product?.stock) < 1 ? true : false} className={parseFloat(product?.stock) < 1 ? "passiveButtonCategories w-100 d-none" : "w-100 activeButton"} style={{ background: "none", border: "none" }} onClick={() =>
                                                            ADD_TO_BASKET({
                                                                _id: product._id,
                                                                name: product.name,
                                                                avatar: product.avatar,
                                                                farmerName: product.farmerName,
                                                                quntity: 1,
                                                                total: parseFloat(product.newPrice),
                                                                price: product.price,
                                                                newPrice: product.newPrice,
                                                                category: product.productCategory
                                                            })}>
                                                            Sepete Ekle
                                                        </button>

                                                    </div>
                                                </div>
                                                <div className="product_content grid_content">
                                                    <h4 className="product_name mb-2"><a href="#">{product.name}</a></h4>
                                                    <div className={parseFloat(product?.stock) < 1 ? "text-danger" : "text-dark"}>
                                                        <b>
                                                            {
                                                                parseFloat(product?.stock) < 1 ? "Stokta yok" : ""
                                                            }
                                                        </b>
                                                    </div>
                                                    <div className="price_box m-0">
                                                        <span className="old_price">{product.price} TL</span>
                                                        <span style={{ marginLeft: "10px" }} className="current_price">{product.newPrice} TL</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


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

export default Vegetables
