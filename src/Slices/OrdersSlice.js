import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
//import axios from 'axios';
import { getProducts } from '../Services/tmdbApi';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await getProducts();
    return response.data;
});

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        entities: [],
        loading: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchOrders.pending]: (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        [fetchOrders.fulfilled]: (state, action) => {
            if (state.loading === 'pending') {
                state.entities = action.payload;
                state.loading = 'idle';
            }
        },
        [fetchOrders.rejected]: (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
            }
        },
    },
});

export default ordersSlice;