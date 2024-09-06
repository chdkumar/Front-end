import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './path-to-ordersSlice'; 
import customersReducer from './path-to-customersSlice';
import productsReducer from './path-to-productsSlice';

const store = configureStore({
    reducer: {
        orders: ordersReducer,
        customers: customersReducer,
        products: productsReducer
    },
});

export default store;