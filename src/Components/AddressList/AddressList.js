import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Modal, message, Spin } from 'antd';
import axios from 'axios';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import Loading from '../../Assets/media/gif/loading.gif'

const AddressList = (props) => {

    let { storageAddress, setStorageAdress } = props;
    let { user, setUser } = useContext(CompanySettingsContext);
    let { token } = useContext(GlobalSettingsContext)
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    let deleteAddress = () => {
        setLoading(true)
        axios.delete(`http://localhost:3000/api/address/${user._id}`, {
            headers: {
                "Authorization": token
            }
        }).then(resp => {
            if (resp.data.result_message.type === "success") {
                message.success("Shipping address deleted successfully")
                localStorage.setItem("address", null)
                setLoading(false)
                setStorageAdress(null)
            } else {
                message.error("Adres silinemedi!")
                setLoading(false)
            }
        })
    }

    return (
        <>

            {
                showModal && <div>
                    <div className="popup-filter"></div>
                    <div className="add-user-popup-container">
                        <div className="card">
                            <div className="d-flex justify-content-end">
                                <button className="close-button" onClick={() => setShowModal(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="card-body pt-5">
                                <div> Are you sure you want to delete the address?</div>

                                <div className="mt-4">
                                    <div className="btn btn-primary" onClick={() => deleteAddress()}>Evet</div>
                                    <div className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={() => setShowModal(false)}>Hayır</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <section className="card">
                <div className="card-body">
                    <h4><b>{storageAddress?.addressTitle}</b></h4>

                    <div className="text-secondary mt-3"><b>{storageAddress?.name}</b></div>

                    <p className="mt-1">
                        {storageAddress?.address}
                    </p>

                    <div>
                        {storageAddress?.province} / {storageAddress?.district}
                    </div>

                    <h5 className="mt-2"><b>{storageAddress?.phone}</b></h5>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger" onClick={() => setShowModal(true)}>Delete</button>
                    </div>
                </div>
            </section>

            {
                loading && <div className="loading__container">
                    <img src={Loading} />
                </div>
            }
        </>
    );
};

export default AddressList;
