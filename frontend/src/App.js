import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import IncDec from './screens/IncDec';


function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
    
    <div className="grid-container">

      <header className="row">
        <div>
          <Link className="brand" to="/" >Amazona</Link>
        </div>
        <div>
          <Link to="cart.html" >Cart
            {
                cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                )
            }
          </Link>
          <Link to="signin.html" >Sign In</Link>
        </div>
      </header>
      
      <main>
            <Route path="/cart/:id?"  component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route to="/inc" component={IncDec} exact></Route>
      </main>

        <footer className="row center">
            All Right Reserved
        </footer>
	  </div>
      </BrowserRouter>

  
  );
}

export default App;
