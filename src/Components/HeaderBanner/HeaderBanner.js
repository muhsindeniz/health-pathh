import React from 'react'

const HeaderBanner = (props) => {

    let {page, targetPage} = props;

    return (
        <div className="breadcrumbs_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <h3>{page}</h3>
                            <ul>
                                <li><a href="index.html">home</a></li>
                                <li>{targetPage}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner
