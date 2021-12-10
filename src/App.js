import { useEffect, useState } from 'react';
import { GlobalSettingsContext } from "./Contexts/GlobalSettingsContext"
import { CompanySettingsContext } from "./Contexts/CompanySettingsContext"
// import './Assets/css/animate.css';
import './Assets/css/bootstrap.min.css'
// import './Assets/css/jquery-ui.min.css'
import './Assets/css/style.css'
import './Assets/css/plugins.css'
import Navbar from './Components/Layout/Navbar/Navbar';
import Footer from './Components/Layout/Footer/Footer';
import Home from './Pages/Home/Home';
import LoginRegister from './Pages/LoginRegister/LoginRegister';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import WishList from './Pages/WishList/WishList';
import Cart from './Pages/Cart/Cart';
import Vegetables from './Pages/Vegetables/Vegetables';

function App() {

  let [mobile, setMobile] = useState(false)
  let [name, setName] = useState("Muhsin Deniz")

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


  return (
    <>
      <GlobalSettingsContext.Provider value={{ mobile }}>
        <CompanySettingsContext.Provider value={{ name }}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginRegister} />
              <Route path="/contact" component={Contact} />
              <Route path="/product-detail/:id" component={ProductDetail} />
              <Route path="/wishList" component={WishList} />
              <Route path="/cart" component={Cart} />
              <Route path="/vegetables" component={Vegetables} />
            </Switch>
            <Footer />
          </Router> 
        </CompanySettingsContext.Provider>
      </GlobalSettingsContext.Provider>
    </>
  );
}

export default App;
