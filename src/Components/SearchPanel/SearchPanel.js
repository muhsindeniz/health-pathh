import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../Assets/media/gif/loading.gif'

const SearchPanel = (props) => {

    let { searchData, loading, setLoading, setText } = props;

    return (
        <div className="subSearchBar__container">

            {
                searchData && searchData.map((data, index) => (
                    <Link onClick={() => setText("")} to={
                        data.productCategory === "vegetables" ? `/product-detail/${data._id}?cat=vegetables` :
                        data.productCategory === "Fruit" ? `/product-detail/${data._id}?cat=Fruit` :
                        data.productCategory === "Teas" ? `/product-detail/${data._id}?cat=Teas` : `/product-detail/${data._id}?cat=Plants`
                    }>
                        <div className="card p-3 mb-2">
                            <div className="d-flex flex-row flex-wrap">
                                <div className="image">
                                    <img src={`http://localhost:3000/${data.avatar}`} />
                                </div>
                                <div className="content">
                                    {
                                        data.name
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }

            {
                loading && <div className="loading_search_container">
                    <img src={Loading} />
                </div>
            }
        </div>
    )
}

export default SearchPanel