import { useEffect, useLayoutEffect, useState } from 'react';
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

function App() {

  let [mobile, setMobile] = useState(false)
  let [token, setToken] = useState(localStorage.getItem("token"))
  let [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

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
        <GlobalSettingsContext.Provider value={{ mobile, token, setToken }}>
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
              </Switch>
            </Router>
          </CompanySettingsContext.Provider>
        </GlobalSettingsContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <GlobalSettingsContext.Provider value={{ mobile, token, setToken }}>
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
                  <MembershipInfo />
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
