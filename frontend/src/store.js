// create reducer,initialState and use store as a middleware  //

import {createStore,compose,applyMiddleware, combineReducers} from 'redux';
// import data from './data';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { inc_dec } from './reducers/inc_dec';
import { userSigninReducer } from './reducers/userReducers';
import { productListReducer,productDetailsReducer } from './reducers/productReducers';

const initialState = {
    cart:{
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    }

};
/*const reducer = (state,action) =>{
    return{ products: data.products };
};*/

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart : cartReducer,
  incDec : inc_dec,
  userSignIn : userSigninReducer

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;