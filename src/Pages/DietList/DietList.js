import { message, Radio } from 'antd';
import React, { useState } from 'react'

const DietList = () => {

    let [massIndex, setMassIndex] = useState({
        gender: "K",
        size: null,
        weight: null
    })
    let [bodyIndex, setBodyIndex] = useState(null)
    let [bodyWeight, setBodyWeight] = useState(null)
    let [bodySurface, setBodySurface] = useState(null)
    let [notOilBody, setNotOilBody] = useState(null)

    function setGender(e) {
        setMassIndex({ ...massIndex, gender: e.target.value })
    }

    let massCalculator = () => {
        if (massIndex.size === null) {
            message.info("Please enter your height!")
        } else if (massIndex.weight === null) {
            message.info("Please enter your weight")
        } else {
            if (massIndex.gender == "K") {
                let size = (parseFloat(massIndex.size) / 100) * (parseFloat(massIndex.size) / 100);
                let index = parseFloat(massIndex.weight) / size.toFixed(2);

                let idealWeight = 45.5 + (2.3 * ((parseFloat(massIndex.size) / 2.54) - 60))
                let bodySurface = ((massIndex.size * massIndex.weight) / 3600) / 2
                let notOilBody = (0.65 * massIndex.size) - 50.74

                setBodyIndex(parseFloat(index.toFixed(1)))
                setBodyWeight(parseFloat(idealWeight.toFixed(1)))
                setBodySurface(parseFloat(bodySurface.toFixed(2)))
                setNotOilBody(Number(notOilBody).toFixed(0))
            } else {
                let size = (parseFloat(massIndex.size) / 100) * (parseFloat(massIndex.size) / 100);
                let index = parseFloat(massIndex.weight) / size.toFixed(2);

                let idealWeight = 50 + (2.3 * ((parseFloat(massIndex.size) / 2.54) - 60))
                let bodySurface = ((massIndex.size * massIndex.weight) / 3600) / 2
                let notOilBody = (0.73 * massIndex.size) - 59.42

                setBodyIndex(parseFloat(index.toFixed(1)))
                setBodyWeight(parseFloat(idealWeight.toFixed(1)))
                setBodySurface(parseFloat(bodySurface.toFixed(2)))
                setNotOilBody(Number(notOilBody).toFixed(0))
            }
        }
    }

    return (
        <>
            <div className="shop_area shop_reverse dietList__container mt-70 mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <fieldset>
                                <legend>
                                    Body Mass Index Calculator
                                </legend>

                                <label style={{ fontSize: 18, marginBottom: 15 }}>* Mandatory field.</label>
                                <ul className="narrowest">
                                    <li>
                                        <label className="title"><em>*</em>Gender:</label>
                                        <div className="d-flex flex-wrap flex-column" style={{ width: 200 }}>
                                            <label htmlFor="cinsiyet" className="mb-2">
                                                <input name="gender" defaultChecked onChange={setGender} value="K" type="radio" id="cinsiyet" /> Kadın
                                            </label>
                                            <label htmlFor="cinsiyet" className="mb-2">
                                                <input name="gender" onChange={setGender} value="E" type="radio" id="cinsiyet" /> Erkek
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <label className="title"><em>*</em> Your length:</label>
                                        <div className="d-flex flex-wrap flex-column" style={{ width: 200 }}>
                                            <label htmlFor="cinsiyet" className="mb-2">
                                                <input onChange={(e) => setMassIndex({ ...massIndex, size: parseFloat(e.target.value) })} type="number" id="cinsiyet" /> cm (Örn. 172)
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <label className="title"><em>*</em> Your weight:</label>
                                        <div className="d-flex flex-wrap flex-column">
                                            <label htmlFor="cinsiyet" className="mb-2">
                                                <input onChange={(e) => setMassIndex({ ...massIndex, weight: parseFloat(e.target.value) })} type="number" id="cinsiyet" /> kg (Örn. 69)
                                            </label>
                                        </div>
                                    </li>
                                </ul>

                                <button className="w-100 btn btn-primary" onClick={() => massCalculator()}>Calculate</button>

                                <div className={`mt-4 rounded p-4 mass-bg-result row text-center ${bodyIndex === null ? "d-none" : "d-flex"}`}>
                                    <div className="col-md-2 col-xs-6">
                                        <div className="vki-balon">
                                            <p>Height Weight Index (BMI)</p>
                                            <span className="vki-result-val">{bodyIndex} kg/m2</span>
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-xs-6">
                                        <div className="vki-balon">
                                            <p>Your Ideal Body Weight</p>
                                            <span className="iva-result-val">{bodyWeight} kg</span>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-xs-12">
                                        {
                                            bodyIndex <= 18.4 ? <span className="vki-result-title text-success">Underweight</span> : ""
                                        }
                                        {
                                            bodyIndex >= 18.5 && bodyIndex < 24.9 ? <span className="vki-result-title">Normal weight</span> : ""
                                        }
                                        {
                                            bodyIndex >= 25 && bodyIndex <= 29.9 ? <span className="vki-result-title text-warning">Above Ideal Weight</span> : ""
                                        }
                                        {
                                            bodyIndex >= 30 ? <span className="vki-result-title text-danger">Far Above Ideal Weight</span> : ""
                                        }
                                        <span className="bmi-result-text">
                                            {
                                                bodyIndex <= 18.4 ? "You are under your ideal weight, but we are here to help you rise! All you need is a little motivation and a regular and balanced diet. That's what we're here for! Follow us, we have tips for you; together we can do it!" : ""
                                            }
                                            {
                                                bodyIndex >= 18.5 && bodyIndex < 24.9 ? "You are great! You are at your ideal weight! Now it's up to you to protect it. Without neglecting the movement, continue to eat a regular and balanced diet and follow us!" : ""
                                            }
                                            {
                                                bodyIndex >= 25 && bodyIndex <= 29.9 ? "You are close to the target! There is a short road ahead. With a balanced diet and regular physical activity, you can hit the ideal out of 12!" : ""
                                            }
                                            {
                                                bodyIndex >= 30 ? "You left your ideal weight a little far away, but we have good news; Reaching him is not as difficult as you think. Everything starts with being determined and motivated, never give up and keep your motivation high, even you will not believe the speed of change when movement and balanced nutrition are a part of your life. It will be easier than you hope by keeping motivation high, paying attention to a balanced and regular diet, and increasing movement. Everything you need is waiting for you here to be read! Let's get some inspiration and take action first thing!" : ""
                                            }
                                        </span>
                                    </div>

                                    <div className="col-md-2 col-xs-6">
                                        <div className="vki-balon">
                                            <p>Your Body Surface Area</p>
                                            <span className="vya-result-val">{bodySurface} m2</span>
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-xs-6">
                                        <div className="vki-balon">
                                            <p>Your Lean Body Weight</p>
                                            <span className="yva-result-val">{notOilBody} kg</span>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                        <div className="col-sm-12 col-lg-6">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DietList
