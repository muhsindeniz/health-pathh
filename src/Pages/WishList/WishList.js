import React from 'react'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import productbig1 from '../../Assets/media/img/product/productbig1.jpg'
import productbig2 from '../../Assets/media/img/product/productbig2.jpg'
import productbig3 from '../../Assets/media/img/product/productbig3.jpg'

const WishList = () => {
    return (
        <>
            <HeaderBanner page="Wishlist" targetPage="Wishlist" />

            <div className="wishlist_area mt-70">
                <div className="container">
                    <form action="#">
                        <div className="row">
                            <div className="col-12">
                                <div className="table_desc wishlist">
                                    <div className="cart_page">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">Delete</th>
                                                    <th className="product_thumb">Image</th>
                                                    <th className="product_name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product_quantity">Stock Status</th>
                                                    <th className="product_total">Add To Cart</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product_remove"><a href="#">X</a></td>
                                                    <td className="product_thumb"><a href="#"><img src={productbig1} alt="" /></a></td>
                                                    <td className="product_name"><a href="#">Handbag fringilla</a></td>
                                                    <td className="product-price">£65.00</td>
                                                    <td className="product_quantity">In Stock</td>
                                                    <td className="product_total"><a href="#">Add To Cart</a></td>


                                                </tr>

                                                <tr>
                                                    <td className="product_remove"><a href="#">X</a></td>
                                                    <td className="product_thumb"><a href="#"><img src={productbig2} alt="" /></a></td>
                                                    <td className="product_name"><a href="#">Handbags justo</a></td>
                                                    <td className="product-price">£90.00</td>
                                                    <td className="product_quantity">In Stock</td>
                                                    <td className="product_total"><a href="#">Add To Cart</a></td>


                                                </tr>
                                                <tr>
                                                    <td className="product_remove"><a href="#">X</a></td>
                                                    <td className="product_thumb"><a href="#"><img src={productbig3} alt="" /></a></td>
                                                    <td className="product_name"><a href="#">Handbag elit</a></td>
                                                    <td className="product-price">£80.00</td>
                                                    <td className="product_quantity">In Stock</td>
                                                    <td className="product_total"><a href="#">Add To Cart</a></td>


                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </form>
                    <div className="row">
                        <div className="col-12">
                            <div className="wishlist_share">
                                <h4>Share on:</h4>
                                <ul>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                                    <li><a href="#"><i className="fa fa-tumblr"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WishList
