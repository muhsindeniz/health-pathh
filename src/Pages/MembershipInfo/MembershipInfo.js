import React, { useEffect, useState, useContext, useCallback } from 'react';
import { DatePicker, Tabs, Input, Switch, Button, Spin, message } from 'antd';
import moment from 'moment';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { GlobalSettingsContext } from '../../Contexts/GlobalSettingsContext';
import { CompanySettingsContext } from '../../Contexts/CompanySettingsContext'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useGetData, usePatchData, usePostData } from '../../hooks/ServiceGetways';
const { TabPane } = Tabs;

const MembershipInfo = () => {

    let { token } = useContext(GlobalSettingsContext)
    let { user, setUser } = useContext(CompanySettingsContext);
    let history = useHistory();
    let postData = usePostData()
    let patchData = usePatchData()
    let [userInfo, setUserInfo] = useState({ "name": "", "email": "", "gender": "", "birthdayString": "" });
    let [loading, setLoading] = useState(false);
    let [genderChecked, setGenderChecked] = useState(null);
    let [userPassword, setUserPassword] = useState({ "password": "", "newPassword": "" })

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    function birthdayString(date, dateString) {
        setUserInfo({ ...userInfo, birthdayString: dateString })
    }

    function gender(checked) {
        setUserInfo({ ...userInfo, gender: checked === true ? "Kadın" : "Erkek" })
    }

    useEffect(() => {
        setUserInfo({ ...userInfo, name: user.name, email: user.email, birthdayString: user.birthdayString, gender: user.gender })
    }, [user])

    useEffect(() => {
        setGenderChecked(userInfo.gender == "Erkek" ? false : true)
    }, [userInfo])

    let get = useCallback(() => {
        postData(`user/${user._id}`, {}).then(({ result, result_message }) => {
            if (result_message.type === "error") console.log(result_message.message);
            setUser(result)
        });
    }, [])

    let updateMembershipInfo = () => {
        setLoading(true)
        patchData(`user/${user._id}`, { ...userInfo }).then(({ result_message }) => {
            if (result_message.type == "success") {
                const profile = {
                    ...JSON.parse(localStorage.getItem('user')),
                    ...userInfo
                };
                localStorage.setItem('user', JSON.stringify(profile));
                message.success("Your information has been successfully updated.", 3)
                get()
                history.push('/membership-infos')
                setLoading(false)

            }
            else message.error("Your information could not be updated!!", 3)
            setLoading(false)
        })
    }

    let updatePassword = () => {
        if (userPassword.password == "" || userPassword.newPassword == "") {
            message.info("Lütfen tüm alanları doldurun!!")
        } else {
            setLoading(true)
            axios.post('http://localhost:3000/api/updatePassword', {
                ...userPassword
            }, {
                headers: { "Content-Type": "application/json", authorization: `${token}` }
            }).then(({ data: { result, result_message } }) => {
                if (result_message.type == "success") {
                    message.success("Şifreniz başarıyla güncellendi..")
                    setLoading(false)
                } else {
                    message.error(result_message.message)
                    setLoading(false)
                }
            });
        }
    }


    return (
        <>
            <div className="product_details mt-70 mb-70">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-lg-10">
                            <div className="membershipInfo_header_title">
                                <h3>My User Information</h3>
                            </div>

                            <section className="membershipInfo_tabs">
                                <Tabs defaultActiveKey="1">

                                    <TabPane tab="My membership information" key="1" className="mt-5">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-sm-12 col-lg-8">
                                                <div className="membershipInfo_main_title">
                                                    <h4>Information Profile</h4>
                                                </div>

                                                <p>
                                                    You can edit the information you need to keep your experience in Health Path at the best level.
                                                </p>

                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                                        <div className="mb-2">Name Surname</div>
                                                        <div><Input onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} size="large" type="text" placeholder="Name Surname" value={userInfo.name || ""} className="w-100" /></div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                                                        <div className="mb-2">Email</div>
                                                        <div><Input onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} size="large" type="email" placeholder="E-mail" value={userInfo.email || ""} className="w-100" /></div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                                                        <div className="mb-2">Date of birth</div>
                                                        <div>
                                                            <DatePicker onChange={birthdayString} size="large" className="w-100" value={moment(userInfo.birthdayString || '01/01/2015', dateFormatList[0])} format={dateFormatList} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                                                        <div className="mb-2">Gender</div>
                                                        <div>
                                                            <Switch onChange={gender} size="default" checked={genderChecked} checkedChildren="Female" unCheckedChildren="Male" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <Button onClick={() => updateMembershipInfo()} className="w-100" size="large">Update</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Password change" key="2" className="mt-5">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-sm-12 col-lg-8">
                                                <p>
                                                    Your password must contain at least one letter, number or special character. Also, your password must be at least 8 characters long.
                                                </p>

                                                <div className="col-sm-12 mb-3">
                                                    <div className="mb-2">
                                                        Current Password
                                                    </div>

                                                    <Input.Password
                                                        onChange={(e) => setUserPassword({ ...userPassword, password: e.target.value })}
                                                        size="large"
                                                        placeholder="Current Password"
                                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                    />
                                                </div>

                                                <div className="col-sm-12 mb-3">
                                                    <div className="mb-2">
                                                        New Password
                                                    </div>

                                                    <Input.Password
                                                        onChange={(e) => setUserPassword({ ...userPassword, newPassword: e.target.value })}
                                                        size="large"
                                                        placeholder="New Password"
                                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                    />
                                                </div>

                                                <div className="mb-3 d-flex align-items-center">
                                                    <span className="mr-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                        </svg>
                                                    </span>
                                                    <small>Güvenliğiniz için adınız, soyadınız ve doğum tarihinizi içermeyen bir şifre belirleyin.</small>
                                                </div>

                                                <div className="col-sm-12">
                                                    <Button onClick={() => updatePassword()} className="w-100" size="large">Update</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="Communication preferences" key="3" className="mt-5">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-sm-12 col-lg-8">
                                                <div className="membershipInfo_main_title">
                                                    <h4>My Delivery Addresses</h4>
                                                </div>

                                                <p>
                                                    You have 3 delivery addresses. From this page, you can create a new address, edit or delete your existing addresses.
                                                    Address changes you make on this page will not affect your previous orders. You can change the address of the order you have placed in the My Orders field.
                                                </p>
                                            </div>
                                        </div>
                                    </TabPane>

                                </Tabs>
                            </section>
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
};

export default MembershipInfo;
