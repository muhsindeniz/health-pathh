import { useMemo, useEffect, useLayoutEffect, useState } from 'react';
import { GlobalSettingsContext } from "./Contexts/GlobalSettingsContext"
import { CompanySettingsContext } from "./Contexts/CompanySettingsContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './Assets/css/bootstrap.min.css'
import './Assets/css/style.css'
import './Assets/css/plugins.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'antd/dist/antd.css';

import Navbar from './Components/Layout/Navbar/Navbar';
import Footer from './Components/Layout/Footer/Footer';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import WishList from './Pages/WishList/WishList';
import Cart from './Pages/Cart/Cart';
import Vegetables from './Pages/Vegetables/Vegetables';
import Fruits from './Pages/Fruits/Fruits';
import NaturalTeas from './Pages/NaturalTeas/NaturalTeas';
import Plants from './Pages/Plants/Plants';
import DietList from './Pages/DietList/DietList';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MembershipInfo from './Pages/MembershipInfo/MembershipInfo';
import MemberNavbar from './Components/Layout/Navbar/MemberNavbar';
import Delivery from './Pages/Delivery/Delivery';
import axios from 'axios';
import MyOrders from './Pages/MyOrders/MyOrders';
import Cookies from 'js-cookie';

function App() {

  let [mobile, setMobile] = useState(false)
  let [token, setToken] = useState(Cookies.get('token'))
  let [user, setUser] = useState(Cookies.get('user'))
  let [basket, setBasket] = useState([])
  let [discountCartInfo, setDiscountCartInfo] = useState(0)
  let [discountCart, setDiscountCart] = useState(0)
  let [lastPrice, setLastPrice] = useState(0)
  let [discount, setDiscount] = useState(null)

  useEffect(() => {
    if (user) {
      if (user._id) {
        axios.get(`http://localhost:3000/api/basket/${user._id}`)
          .then(resp => {
            setBasket(resp.data.products)
          })
          .catch(err => {
            console.error(err)
          })
      } else {
        let userInfo = JSON.parse(user)
        setUser(userInfo)
        axios.get(`http://localhost:3000/api/basket/${userInfo._id}`)
          .then(resp => {
            setBasket(resp.data.products)
          })
          .catch(err => {
            console.error(err)
          })
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])

  useEffect(() => {
    let sum = basket.length > 0 ? basket.map(datum => datum.price * datum.quntity).reduce((a, b) => parseFloat(a) + parseFloat(b), 0) : 0
    setDiscountCart(sum)
    setDiscountCartInfo(sum)
  }, [basket, discount, discountCart])

  useEffect(() => {
    let getSize = () => {
      let size = { width: window.innerWidth, height: window.innerHeight }
      setMobile(size.width < 768 ? true : false)
    }
    getSize()
    window.addEventListener("resize", getSize)
    return () => {
      window.removeEventListener('resize', getSize)
      window.removeEventListener('load', getSize)
    }
  }, [])




  if (token) {
    return (
      <>
        <GlobalSettingsContext.Provider value={{ mobile, token, setToken, basket, setBasket, discountCartInfo, setDiscountCartInfo, discountCart, setDiscountCart, lastPrice, setLastPrice, discount, setDiscount }}>
          <CompanySettingsContext.Provider value={{ user, setUser }}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Navbar />
                  <Home />
                  <Footer />
                </Route>
                <Route exact path="/login">
                  <Navbar />
                  <Login />
                  <Footer />
                </Route>
                <Route exact path="/register">
                  <Navbar />
                  <Register />
                  <Footer />
                </Route>
                <Route exact path="/contact">
                  <Navbar />
                  <Contact />
                  <Footer />
                </Route>
                <Route exact path="/product-detail/:id">
                  <Navbar />
                  <ProductDetail />
                  <Footer />
                </Route>
                <Route exact path="/wishList">
                  <Navbar />
                  <WishList />
                  <Footer />
                </Route>
                <Route exact path="/cart">
                  <MemberNavbar />
                  <Cart />
                  <Footer />
                </Route>
                <Route exact path="/delivery">
                  <Navbar />
                  <Delivery />
                  <Footer />
                </Route>
                <Route exact path="/vegetables">
                  <Navbar />
                  <Vegetables />
                  <Footer />
                </Route>
                <Route exact path="/fruits">
                  <Navbar />
                  <Fruits />
                  <Footer />
                </Route>
                <Route exact path="/natural-teas">
                  <Navbar />
                  <NaturalTeas />
                  <Footer />
                </Route>
                <Route exact path="/useful-plants">
                  <Navbar />
                  <Plants />
                  <Footer />
                </Route>
                <Route exact path="/diet-list">
                  <Navbar />
                  <DietList />
                  <Footer />
                </Route>
                <Route exact path="/membership-infos">
                  <MemberNavbar />
                  <MembershipInfo />
                  <Footer />
                </Route>
                <Route exact path="/my-orders">
                  <Navbar />
                  <MyOrders />
                  <Footer />
                </Route>
              </Switch>
            </Router>
          </CompanySettingsContext.Provider>
        </GlobalSettingsContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <GlobalSettingsContext.Provider value={{ mobile, basket, token, setToken, setBasket, discountCartInfo, setDiscountCartInfo, discountCart, setDiscountCart }}>
          <CompanySettingsContext.Provider value={{ user, setUser }}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Navbar />
                  <Home />
                  <Footer />
                </Route>
                <Route exact path="/login">
                  <Navbar />
                  <Login />
                  <Footer />
                </Route>
                <Route exact path="/register">
                  <Navbar />
                  <Register />
                  <Footer />
                </Route>
                <Route exact path="/contact">
                  <Navbar />
                  <Contact />
                  <Footer />
                </Route>
                <Route exact path="/product-detail/:id">
                  <Navbar />
                  <ProductDetail />
                  <Footer />
                </Route>
                <Route exact path="/wishList">
                  <Navbar />
                  <WishList />
                  <Footer />
                </Route>
                <Route exact path="/cart">
                  <MemberNavbar />
                  <Login />
                  <Footer />
                </Route>
                <Route exact path="/vegetables">
                  <Navbar />
                  <Vegetables />
                  <Footer />
                </Route>
                <Route exact path="/fruits">
                  <Navbar />
                  <Fruits />
                  <Footer />
                </Route>
                <Route exact path="/natural-teas">
                  <Navbar />
                  <NaturalTeas />
                  <Footer />
                </Route>
                <Route exact path="/useful-plants">
                  <Navbar />
                  <Plants />
                  <Footer />
                </Route>
                <Route exact path="/diet-list">
                  <Navbar />
                  <DietList />
                  <Footer />
                </Route>
                <Route exact path="/membership-infos">
                  <MemberNavbar />
                  <Login />
                  <Footer />
                </Route>
              </Switch>
            </Router>
          </CompanySettingsContext.Provider>
        </GlobalSettingsContext.Provider>
      </>
    );
  }


}

export default App;
