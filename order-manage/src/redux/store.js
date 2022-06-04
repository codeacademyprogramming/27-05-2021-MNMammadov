import { applyMiddleware, combineReducers, createStore } from 'redux';
import { productReducer } from '../modules/products/reducer';
import { orderReducer } from '../modules/orders/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    products: productReducer,
    orders: orderReducer
});

const middlewares = [
    thunk,
];

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
));