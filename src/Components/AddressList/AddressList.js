import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Modal, message, Spin } from 'antd';
import axios from 'axios';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext';
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';

const AddressList = () => {

    let { user, setUser } = useContext(CompanySettingsContext);
    let { token } = useContext(GlobalSettingsContext)
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Are you sure you want to delete the delivery address?');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('Address is being deleted, please wait..');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            deleteAddress()
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    let deleteAddress = useMemo(() => async () => {
        await axios.delete(`http://localhost:3000/api/address/${user._id}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": token
            }
        }).then(({ data: { result_message } }) => {
            if (result_message.type === "success") {
                message.success("Shipping address deleted successfully")
            } else {
                message.error(result_message.message)
            }
        })
    }, [user, token])

    return (
        <>

            <Modal
                title=""
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>

            <section className="card">
                <div className="card-body">
                    <h4><b>Ev</b></h4>

                    <div className="text-secondary mt-3"><b>Muhsin Deniz</b></div>

                    <p className="mt-1">
                        Yeni Mahalle Ahmet Rasim Sokak Ev No: 141 Hatay / Samadağ
                    </p>

                    <div>
                        Hatay / Samandağ
                    </div>

                    <h5 className="mt-2"><b>05457250440</b></h5>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger" onClick={() => showModal()}>Delete</button>
                        <button className="btn btn-success" style={{ marginLeft: "10px" }}>Edit</button>
                    </div>
                </div>
            </section>

            {
                loading && <div className="loading__container">
                    <Spin size="large" />
                </div>
            }
        </>
    );
};

export default AddressList;
