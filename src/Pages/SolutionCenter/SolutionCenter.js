import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import { DatePicker, Tabs, Input, Switch, Button, Spin, Collapse } from 'antd';
import Loading from '../../Assets/media/gif/loading.gif'
const { Panel } = Collapse;

const SolutionCenter = () => {

    let panelQuestionOne = <><img data-v-492b9d60="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/624/icons/searchProduct.svg" alt="" /> How can I track my order ?</>
    let panelQuestionTwo = <><img data-v-492b9d60="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/651/icons/orderandpayment.svg" alt="" /> What payment options are there ?</>
    let panelQuestionThree = <><img data-v-492b9d60="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/651/icons/shipment.svg" alt="" />"What are the return conditions ?</>
    let panelQuestionFour = <><img data-v-492b9d60="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/651/icons/cancelreturn.svg" alt="" /> When will my parcel arrive ?</>
    let panelQuestionFive = <><img data-v-492b9d60="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/651/icons/9.svg" alt="" /> Where can I find detailed information about the features of the products ?</>
    let panelQuestionSix = <><img data-v-492b9d60="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/651/icons/account.svg" alt="" /> Can I order without being a member ?</>
    let panelQuestionSeven = <><img data-v-492b9d60="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/651/icons/promotion.svg" alt="" />Can I go and pick up my order from the nearest seller ?</>

    return (
        <>
            <div className='entrance'>
                <div data-v-60c2a762="" className="main">
                    <div data-v-60c2a762="" className="web-entrance-icon">
                        <div data-v-60c2a762="" id="web-entrance-icon" style={{ display: "none" }}>
                        </div>
                        <div data-v-60c2a762="" className="cm">
                            <div data-v-60c2a762="" className="canvas">
                                <div data-v-60c2a762="" className="bubble"
                                ></div><div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                                <div data-v-60c2a762="" className="bubble"></div>
                            </div>
                        </div>
                    </div>
                    <div data-v-17c682b7="" data-v-60c2a762="" className="entrance-container">
                        <div data-v-17c682b7="" className="entrance-title">
                            Merhaba  Muhsin Deniz,
                        </div>
                        <div data-v-17c682b7="" className="text">
                            Size nasıl yardımcı olabiliriz?
                        </div
                        ><div data-v-17c682b7="" className="button-container">
                            <div data-v-72bee508="" data-v-17c682b7="" className="btn button-primary-default">
                                <a target="_blank" href="mailto:mnknsro413@gmail.com">
                                    <button data-v-72bee508="">
                                        Siparişim ile ilgili sorum var </button>
                                </a>
                            </div>
                            <div data-v-72bee508="" data-v-17c682b7="" className="btn button-secondary-default">
                                <a href='#frequentlyAskedQuestion'>
                                    <button data-v-72bee508="">
                                        Farklı bir konuda sorum var </button>
                                </a>
                            </div>
                        </div>
                        <div data-v-95e5dd92="" data-v-17c682b7="" className="message-card-container">
                            <div data-v-95e5dd92="" style={{ marginBottom: "180px" }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-70 mb-70 container'>
                <div className="membershipInfo_header_title" id='frequentlyAskedQuestion'>
                    <h3>Frequently Asked Questions</h3>

                    <div>
                        <Collapse accordion>
                            <Panel header={panelQuestionOne} key="1">
                                <p>You can follow the status of your order in detail on the "My Orders" page, and you can see the status of your products from the order statuses.</p>
                                <p><b>"Waiting for approval</b> If it is written, the product is waiting to be approved by the administrator.</p>
                                <p><b>Products are being prepared</b> If it is written, the product is naturally collected by the farmer.</p>
                                <p><b>Your order is on its way</b> If it is written, it means that your order has been sent to your address by the farmer.</p>
                                <p><b>Order delivered</b> If it is written, it means that your order has been delivered to you.</p>
                            </Panel>
                            <Panel header={panelQuestionTwo} key="2">
                                <p>Your payments while shopping on the Health Path;</p>

                                <p><span><img data-v-43d9db83="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/v2_290/img/arrow-right.38dbaef5.svg" alt="" /></span> Credit/Debit Card</p>
                                <p><span><img data-v-43d9db83="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/v2_290/img/arrow-right.38dbaef5.svg" alt="" /></span> By cash</p>

                                <p>method you can do.</p>
                            </Panel>
                            <Panel header={panelQuestionThree} key="3">
                                <p>
                                    You can easily return the products you purchased, free of charge, within the return conditions, by applying to Heath Path on the day you receive them.

                                    Return Policy:
                                </p>

                                <p><span><img data-v-43d9db83="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/v2_290/img/arrow-right.38dbaef5.svg" alt="" /></span> In order for the products to be returned within the right of withdrawal;</p>

                                <p><span><img data-v-43d9db83="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/v2_290/img/arrow-right.38dbaef5.svg" alt="" /></span> The purchased product must be in its original box, unopened and undamaged,</p>

                                <p><span><img data-v-43d9db83="" src="https://images.hepsiburada.net/cst/assets/solutioncenter/v2_290/img/arrow-right.38dbaef5.svg" alt="" /></span> It should be sent with your invoice on your purchase. No invoice is required for your individual purchases.</p>
                            </Panel>
                            <Panel header={panelQuestionFour} key="4">
                                You can track the details of your delivery from the <b>“My Orders”</b> page <b>"Order Detail"</b> step.
                            </Panel>
                            <Panel header={panelQuestionFive} key="5">
                                <p>
                                    In addition to product images, you can access features such as farmer information and product details on the product page and in the 'Product Description' section.
                                </p>
                                <p>You can also send your questions by clicking the 'Ask seller' button on the product page.</p>
                            </Panel>
                            <Panel header={panelQuestionSix} key="6">
                                <p>You can order with your e-mail address without being a member. As a member, you can benefit from many advantages and also track your order.</p>
                            </Panel>
                            <Panel header={panelQuestionSeven} key="8">
                                <p>Yes, if your address is close to the farmer's production area, you can go directly there and get the products.</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SolutionCenter;
