import React from 'react'

const Filter = () => {
    return (
        <>
            <aside className="sidebar_widget">
                <div className="widget_inner"> 
                    <div className="widget_list widget_filter">
                        <h3>Filter by price</h3>
                        <form action="#">
                            <div id="slider-range"></div>
                            <button type="submit">Filter</button> 
                            <input type="text" name="text" id="amount" />
                        </form>
                    </div>
                    <div className="widget_list widget_color">
                        <h3>Select By Color</h3>
                        <ul>
                            <li>
                                <a href="#">Black  <span>(6)</span></a>
                            </li>
                            <li>
                                <a href="#"> Blue <span>(8)</span></a>
                            </li>
                            <li>
                                <a href="#">Brown <span>(10)</span></a>
                            </li>
                            <li>
                                <a href="#"> Green <span>(6)</span></a>
                            </li>
                            <li>
                                <a href="#">Pink <span>(4)</span></a>
                            </li>

                        </ul>
                    </div>
                    <div className="widget_list widget_color">
                        <h3>Select By SIze</h3>
                        <ul>
                            <li>
                                <a href="#">S  <span>(6)</span></a>
                            </li>
                            <li>
                                <a href="#"> M <span>(8)</span></a>
                            </li>
                            <li>
                                <a href="#">L <span>(10)</span></a>
                            </li>
                            <li>
                                <a href="#"> XL <span>(6)</span></a>
                            </li>
                            <li>
                                <a href="#">XLL <span>(4)</span></a>
                            </li>

                        </ul>
                    </div>
                    <div className="widget_list widget_manu">
                        <h3>Manufacturer</h3>
                        <ul>
                            <li>
                                <a href="#">Brake Parts <span>(6)</span></a>
                            </li>
                            <li>
                                <a href="#">Accessories <span>(10)</span></a>
                            </li>
                            <li>
                                <a href="#">Engine Parts <span>(4)</span></a>
                            </li>
                            <li>
                                <a href="#">hermes <span>(10)</span></a>
                            </li>
                            <li>
                                <a href="#">louis vuitton <span>(8)</span></a>
                            </li>

                        </ul>
                    </div>
                    <div className="widget_list tags_widget">
                        <h3>Product tags</h3>
                        <div className="tag_cloud">
                            <a href="#">Men</a>
                            <a href="#">Women</a>
                            <a href="#">Watches</a>
                            <a href="#">Bags</a>
                            <a href="#">Dress</a>
                            <a href="#">Belt</a>
                            <a href="#">Accessories</a>
                            <a href="#">Shoes</a>
                        </div>
                    </div>
                    <div className="widget_list banner_widget">
                        <div className="banner_thumb">
                            <a href="#"><img src="assets/img/bg/banner17.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Filter
