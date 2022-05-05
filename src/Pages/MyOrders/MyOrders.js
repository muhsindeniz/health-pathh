import axios from 'axios';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import { message, Spin } from 'antd'
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import moment from 'moment'
import returnPolicy from '../../contracts/returnPolicy.pdf'
import salesContract from '../../contracts/salescontract.pdf'
import { Link } from 'react-router-dom';
import Loading from '../../Assets/media/gif/loading.gif'

const MyOrders = () => {

    let [orders, setOrders] = useState(null)
    let [loading, setLoading] = useState(false)
    let { user } = useContext(CompanySettingsContext)

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/api/userOrders/${user._id}`)
            .then(res => {
                setOrders(res.data.result);
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
                setLoading(false)
            })
    }, [user])

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    return (
        <>
            <HeaderBanner page="My Orders" targetPage="My Orders" />


            <div className="product_details mt-70 mb-70">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-lg-10">

                            <div className="order-month-bar">
                                <div className="month-bar month-bar--march">
                                    <div className="month-bar__date">
                                        <span className="month-bar__date__month">My Orders</span>
                                        <small className="month-bar__date__year"></small>
                                    </div>
                                    <div className="month-bar__bg"></div>
                                </div>
                            </div>

                            {
                                orders && orders.map((resp, index) => (

                                    <div key={index} data-highlight-base="757937353" className="order-row e2e-orderRow" >
                                        <div className="order-row__summary" tabIndex="0" role="button" aria-pressed="false" aria-controls="order_number_757937353">
                                            <div className="order-row__summary__images e2e-orderRow-productImages">
                                                {
                                                    resp && resp.basket.slice(0, 4).map((prods, index) => (
                                                        <div className="image__item" key={index}>
                                                            <img src={`http://localhost:3000/${prods?.avatar}`} alt="" />
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                            <div className="order-row__summary__order-data" x-apple-data-detectors="true">
                                                <div className="order-number e2e-orderRow-orderNumber">
                                                    <small>Order number
                                                        <b data-highlight-binder="orderNumber | chapterValue: 3">{numberWithSpaces(resp.orderNumber)}</b>
                                                    </small>
                                                </div>
                                                <div className="date e2e-orderRow-orderDate">
                                                    <small>
                                                        <span>{moment(new Date(resp?.createdAt)).format("LLL")} </span>
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="order-row__summary__progress-bar e2e-orderRow-progressBar">
                                                <div className="progress-theme-bar">
                                                    <div className="progress-bar__status">
                                                        <div className="progress-bar__status--delivered">
                                                            <svg fill="none" width="20" height="20" viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16zm-16.799 5.426l8.094-8.518a1.769 1.769 0 0 0-.001-2.41 1.563 1.563 0 0 0-2.29 0l-7.36 7.746-2.213-2.328a1.563 1.563 0 0 0-2.29 0 1.768 1.768 0 0 0 0 2.409l3.438 3.617a1.563 1.563 0 0 0 2.289 0c.141-.15.254-.326.333-.516z" fill="#BFBFBF"></path><mask id="4g34gg" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><path fillRule="evenodd" clipRule="evenodd" d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16zm-16.799 5.426l8.094-8.518a1.769 1.769 0 0 0-.001-2.41 1.563 1.563 0 0 0-2.29 0l-7.36 7.746-2.213-2.328a1.563 1.563 0 0 0-2.29 0 1.768 1.768 0 0 0 0 2.409l3.438 3.617a1.563 1.563 0 0 0 2.289 0c.141-.15.254-.326.333-.516z" fill="#fff"></path></mask><g mask="url(#4g34gg)"><path fillRule="evenodd" clipRule="evenodd" d="M0 0h32v32H0V0z" fill="#393"></path></g></svg>
                                                            <span>
                                                                {
                                                                    resp?.orderStatus
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-row__summary__price e2e-orderRow-price"><b>{resp?.totalPricePaid} <i className="f-s-text t-normal">$</i></b>
                                                <small>My Health Path Wallet</small>
                                            </div>
                                            <div className="order-row__summary__toggle e2e-orderRow-toggleButton">
                                                <div className="order-row__summary__toggle__icon">
                                                    <svg viewBox="0 0 24 24" fill="none"><mask id="n8rkk70mo1ex260qddsxi" maskUnits="userSpaceOnUse" x="0" y="5" width="24" height="14"><path fillRule="evenodd" clipRule="evenodd" d="M2.65618 0.434008C2.04415 -0.158311 1.05323 -0.13864 0.447917 0.45805C-0.159636 1.06348 -0.146185 2.02737 0.470336 2.61313L10.2248 11.9045L0.699009 21.41C0.0936976 22.0132 0.107149 22.9793 0.72367 23.5651C1.02857 23.8579 1.42314 24 1.81771 24C2.2235 24 2.62928 23.8448 2.93418 23.541L13.554 12.9426C14.1593 12.3372 14.1459 11.3733 13.5294 10.7854L2.65618 0.434008Z" transform="translate(24 5) rotate(90)" fill="white"></path></mask><g mask="url(#n8rkk70mo1ex260qddsxi)"><path fillRule="evenodd" clipRule="evenodd" d="M0 0H17.5V24H0V0Z" transform="translate(0 19) rotate(-90)" fill="#484848"></path></g></svg>
                                                </div>
                                            </div>
                                        </div>




                                        {
                                            resp && resp.basket.map((subProd, index) => (
                                                <div className="d-flex mt-3" key={index}>
                                                    <div className="order-detail-cards__item">
                                                        <div className="order-detail-cards__column">
                                                            <div className="card-products">
                                                                <div className="product-card card-products__item">
                                                                    <div className="product-card__image"><a aria-label="Ürün fotoğrafı" aria-disabled="false" className="" target="_self">
                                                                        <img src={`http://localhost:3000/${subProd?.avatar}`} /></a>
                                                                    </div>
                                                                    <div className="product-card__content">
                                                                        <div className="product-card__content__title">
                                                                            <a aria-label="Ürün adı" data-highlight-binder="orderLines.name" className="" aria-disabled="false" target="_self">{subProd?.name}</a>
                                                                        </div>
                                                                        <div className="product-card__content__merchant"><span>Dealer: </span>
                                                                            <span className="product-card__content__merchant-name">
                                                                                <a aria-disabled="false" className="" target="_self">{subProd?.farmerName}</a>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-card__content__peace-of-mind d-none">
                                                                    </div>
                                                                    <div className="solo-tooltip solo-tooltip--top solo-tooltip--hidden" id="tkovlxxefxbho4wciewd0u" role="tooltip" data-popper-reference-hidden="true" data-popper-escaped="true" data-popper-placement="bottom">
                                                                        <div className="solo-tooltip__arrow" >
                                                                        </div>
                                                                        <div className="solo-tooltip__container">
                                                                            <div className="solo-tooltip__content">
                                                                                <p className="solo-tooltip__description mt-3 mb-2">Your product is transported to your desired location quickly, undamaged and free of charge with the assurance of Health Path manufacturers.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-card__content__price">
                                                                    <span>{Number(subProd?.price).toFixed(2)} <i className="f-s-text t-normal">$</i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="order-detail-cards__column order-detail-cards__column--information">
                                                            <div className="lineitem-content lineitem-content--delivered">
                                                                <div className="lineitem-content__header">
                                                                    <div className="lineitem-content__header__icon" style={{ background: resp?.orderStatus == "Waiting for approval" ? "#F2C213" : "#5ad363" }}>
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.7731 6.21253C17.7629 6.20363 17.7529 6.19443 17.7431 6.18491C17.6113 6.06976 17.4388 6 17.25 6H9.75H2.25C2.06123 6 1.88875 6.06974 1.75691 6.18486C1.74712 6.1944 1.73712 6.20362 1.7269 6.21254C1.58693 6.34879 1.5 6.53924 1.5 6.75V17.25C1.5 17.6642 1.83579 18 2.25 18H8.25C8.66421 18 9 18.3358 9 18.75C9 19.1642 8.66421 19.5 8.25 19.5H2.25C1.00736 19.5 0 18.4926 0 17.25V6.75C0 6.13036 0.250483 5.56921 0.655719 5.16231L3.42795 1.002C3.84522 0.376033 4.54772 0 5.3 0H9.75H14.2016C14.9522 0.00155857 15.6527 0.377384 16.0689 1.0018L18.8441 5.16216C19.2495 5.56908 19.5 6.13028 19.5 6.75V8.25C19.5 8.66421 19.1642 9 18.75 9C18.3358 9 18 8.66421 18 8.25V6.75C18 6.53924 17.9131 6.34878 17.7731 6.21253ZM9 1.5H5.3C5.0493 1.5 4.81515 1.62534 4.67613 1.83389L2.89956 4.5H9V1.5ZM10.5 4.5V1.5H14.2C14.4487 1.50052 14.6822 1.62579 14.8209 1.834L16.5993 4.5H10.5ZM24 17.25C24 20.9779 20.9779 24 17.25 24C13.5221 24 10.5 20.9779 10.5 17.25C10.5 13.5221 13.5221 10.5 17.25 10.5C20.9779 10.5 24 13.5221 24 17.25ZM12 17.25C12 20.1495 14.3505 22.5 17.25 22.5C20.1495 22.5 22.5 20.1495 22.5 17.25C22.5 14.3505 20.1495 12 17.25 12C14.3505 12 12 14.3505 12 17.25ZM19.324 15.055L16.418 18.9284L14.9183 17.4287C14.6254 17.1358 14.1506 17.1358 13.8577 17.4287C13.5648 17.7216 13.5648 18.1964 13.8577 18.4893L15.3577 19.9893C15.6655 20.2968 16.0911 20.4556 16.5247 20.4249C16.9582 20.3943 17.3572 20.1771 17.6185 19.8297L20.524 15.955C20.7725 15.6236 20.7053 15.1535 20.374 14.905C20.0426 14.6565 19.5725 14.7237 19.324 15.055Z" fill="white"></path></svg>
                                                                    </div>
                                                                    <div className="lineitem-content__header__content">
                                                                        <div className="title"><b data-highlight-binder="receivedBys">{resp?.orderStatus}</b>
                                                                        </div>
                                                                        <div className="date">Order date <b>{moment(new Date(resp?.createdAt)).format("DD MMM dddd h:mm")}</b>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="lineitem-content__body"><div className="lineitem-content__body__buttons">
                                                                    <div className="action-button-group">
                                                                        <a className="action-button action-button--return-request" target="_blank" href="mailto:mnknsro413@gmail.com">
                                                                            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M17.5 3.333c1.036 0 1.875.84 1.875 1.875v10c0 1.036-.84 1.875-1.875 1.875h-15a1.875 1.875 0 01-1.875-1.875v-10c0-1.036.84-1.875 1.875-1.875h15zm.625 2.134l-6.063 4.665a3.382 3.382 0 01-4.124 0L1.875 5.468v9.74c0 .345.28.625.625.625h15c.345 0 .625-.28.625-.625V5.467zm-.901-.884H2.775L8.7 9.141a2.133 2.133 0 002.453.104l.147-.104 5.924-4.558z" fill="#484848"></path></svg>
                                                                            Create request
                                                                        </a>
                                                                        <a className="action-button action-button--evaluate-merchant" target="_blank" href="mailto:mnknsro413@gmail.com">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                                                <g fill="none" fillRule="current"><g fill="#484848"><g><g><g><g><g><g>
                                                                                    <path d="M3.75 8.75c2.071 0 3.75 1.679 3.75 3.75v1.875c0 .345-.28.625-.625.625h-.698l-.557 4.453c-.035.284-.258.504-.535.541L5 20H2.5c-.315 0-.581-.235-.62-.547L1.323 15H.625c-.316 0-.578-.235-.62-.54L0 14.375V12.5c0-2.071 1.679-3.75 3.75-3.75zm0 1.25c-1.38 0-2.5 1.12-2.5 2.5v1.25h.625c.287 0 .532.194.604.464l.016.083.557 4.453h1.395l.558-4.453c.035-.284.258-.504.535-.541l.085-.006h.625V12.5c0-1.331-1.04-2.42-2.353-2.496zM18.125 0c.992 0 1.805.771 1.87 1.747l.005.128v10c0 .992-.771 1.805-1.747 1.87l-.128.005h-2.242l-3.566 3.567c-.373.373-.997.142-1.062-.356l-.005-.086V13.75H9.375c-.316 0-.578-.235-.62-.54l-.005-.085c0-.316.235-.578.54-.62l.085-.005h2.5c.316 0 .578.235.62.54l.005.085v2.24l2.683-2.682c.094-.094.214-.155.344-.175l.098-.008h2.5c.316 0 .578-.235.62-.54l.005-.085v-10c0-.316-.235-.578-.54-.62l-.085-.005h-10c-.316 0-.578.235-.62.54l-.005.085c0 .345-.28.625-.625.625s-.625-.28-.625-.625c0-.992.771-1.805 1.747-1.87L8.125 0h10zm-5 2.498c.422 0 .809.237.999.613l.867 1.706h1.374c.419-.01.804.217 1.002.58l.049.101c.176.422.076.909-.249 1.224l-1.321 1.297.73 1.684c.17.406.085.869-.207 1.187l-.085.083c-.36.316-.882.367-1.29.13l-1.87-1.053-1.864 1.05c-.38.22-.85.196-1.204-.053l-.093-.074c-.36-.316-.478-.827-.29-1.278l.73-1.677-1.317-1.296c-.301-.292-.41-.725-.29-1.12l.038-.107c.177-.422.594-.692 1.036-.68l1.39-.002.866-1.701c.173-.343.508-.57.885-.609zm0 1.406L12.2 5.723c-.107.21-.322.341-.557.341H10.2l1.387 1.365c.161.158.222.39.166.604l-.032.09-.74 1.699 1.838-1.033c.163-.092.357-.105.529-.04l.084.04 1.832 1.032-.736-1.698c-.09-.208-.06-.445.073-.623l.063-.072 1.385-1.36h-1.441c-.206 0-.397-.102-.513-.267l-.045-.075-.926-1.822zM3.75 2.5c1.726 0 3.125 1.4 3.125 3.125 0 1.726-1.4 3.125-3.125 3.125-1.726 0-3.125-1.4-3.125-3.125 0-1.726 1.4-3.125 3.125-3.125zm0 1.25c-1.036 0-1.875.84-1.875 1.875 0 1.036.84 1.875 1.875 1.875 1.036 0 1.875-.84 1.875-1.875 0-1.036-.84-1.875-1.875-1.875z" transform="translate(-1078 -668) translate(348 328) translate(40 166) translate(456) translate(218 160) translate(16) translate(0 14)"></path></g></g></g></g></g></g></g></g></svg>
                                                                            Ask seller
                                                                        </a>
                                                                    </div>
                                                                    <div className="lineitem-content__footer-content">
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }


                                        <div className="order-detail-footer">
                                            <div className="order-information">
                                                <div className="order-information__column order-information__column--addresses">
                                                    <h5 className="order-information__title">Address information</h5>
                                                    <div className="order-information__content">
                                                        <div className="order-information__column order-information__column--shipping-address">
                                                            <div className="order-information__column__row">
                                                                <b className="order-information__content__address-title">Delivery address</b>
                                                                <div className="address">
                                                                    <address>
                                                                        {
                                                                            resp && resp.address && resp.address.map((adresInfo, index) => (
                                                                                <div key={index}>
                                                                                    <p>
                                                                                        <b>
                                                                                            {adresInfo?.addressTitle}
                                                                                        </b>
                                                                                    </p>

                                                                                    <div>
                                                                                        {`${adresInfo?.province} / ${adresInfo?.district}`}
                                                                                    </div>

                                                                                    <div>
                                                                                        {adresInfo?.address}
                                                                                    </div>

                                                                                    <b>
                                                                                        {`${adresInfo?.name} - ${adresInfo?.phone}`}
                                                                                    </b>

                                                                                </div>
                                                                            ))
                                                                        }

                                                                    </address>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="order-information__column m-t-25">
                                                            <b className="order-information__content__address-title">Billing Information</b>
                                                            <div className="address">
                                                                <address>
                                                                    {
                                                                        resp && resp.address && resp.address.map((adresInfo, index) => (
                                                                            <div key={index}>
                                                                                <p>
                                                                                    <b>
                                                                                        {adresInfo?.addressTitle}
                                                                                    </b>
                                                                                </p>

                                                                                <div>
                                                                                    {`${adresInfo?.province} / ${adresInfo?.district}`}
                                                                                </div>

                                                                                <div>
                                                                                    {adresInfo?.address}
                                                                                </div>

                                                                                <b>
                                                                                    {`${adresInfo?.name} - ${adresInfo?.phone}`}
                                                                                </b>

                                                                            </div>
                                                                        ))
                                                                    }
                                                                </address>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-information__column order-information__column--payment">
                                                    <h5 className="order-information__title">Payment information</h5>
                                                    <div className="order-information__content">
                                                        <div className="order-information__group">
                                                            <span className="order-information__group__key">Products</span>
                                                            <span className="order-information__group__value">
                                                                {
                                                                    (resp.basket.reduce((accumulator, current) => parseFloat(accumulator) + parseFloat(current?.price), 0)).toFixed(2)
                                                                }
                                                                $
                                                            </span>
                                                        </div>
                                                        <div className="order-information__group">
                                                            <span className="order-information__group__key">Cargo</span>
                                                            <span className="order-information__group__value">15, 00 $</span>
                                                        </div>
                                                        <div className="order-information__group">
                                                            <span className="order-information__group__key">Total</span>
                                                            <span className="order-information__group__value order-information__group__value--total-amount">
                                                                <del>
                                                                    {
                                                                        (resp?.basket?.reduce((accumulator, current) => parseFloat(accumulator) + parseFloat(current?.price), 0) + 15).toFixed(2)
                                                                    }
                                                                    $
                                                                </del>
                                                            </span>
                                                        </div>
                                                        <div className="order-information__group">
                                                            <span className="order-information__group__key" style={{ textAlign: "right" }}>Amount to be paid with farmer discount </span>
                                                        </div>

                                                        <div className="order-information__group">
                                                            <span className="order-information__group__value order-information__group__value--total-amount">
                                                                <b>
                                                                    <h4>{resp?.totalPricePaid} $</h4>
                                                                </b>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="order-information__column order-information__column--other">
                                                <h5 className="order-information__title">Other</h5>
                                                <div className="order-information__content">
                                                    <nav>
                                                        <Link rel="noreferrer" target="_blank" to={salesContract} role="button">Sales Agreement</Link>
                                                        <Link rel="noreferrer" target="_blank" to={returnPolicy} role="button">Return Policy</Link>
                                                    </nav>
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


            {
                loading && <div className="loading__container">
                    <img src={Loading} />
                </div>
            }
        </>
    )
};

export default MyOrders;
