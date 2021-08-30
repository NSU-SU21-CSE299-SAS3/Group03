import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Shipping from './components/cart/Shipping';
import ProductDetails from './components/product/ProductDetails';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Cart from './components/cart/Cart'
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

import Login from './components/user/Login'
import ProtectedRoute from './components/route/ProtectedRoute'

import { loadUser } from './actions/userActions'
import store from './store'



function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
    <div className="App">
    <Header/>
    <div className="container container-fluid">
    <Route path = "/" component={Home} exact/>
    <Route path = "/search/:keyword" component={Home} />
    <Route path = "/product/:id" component={ProductDetails} exact/>

    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <ProtectedRoute path="/me" component={Profile} exact/>
    <ProtectedRoute path="/me/update" component={UpdateProfile} exact/>

    <Route path = "/cart" component={Cart} exact/>
    <ProtectedRoute path = "/shipping" component={Shipping} />
    <ProtectedRoute path = "/order/confirm" component={ConfirmOrder} />

    </div>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
