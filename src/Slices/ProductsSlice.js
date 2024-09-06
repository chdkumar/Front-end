import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
//import axios from 'axios';
import { getProducts } from '../Services/tmdbApi';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await getProducts();
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        entities: [],
        loading: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        [fetchProducts.fulfilled]: (state, action) => {
            if (state.loading === 'pending') {
                state.entities = action.payload;
                state.loading = 'idle';
            }
        },
        [fetchProducts.rejected]: (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
            }
        },
    },
});

export default productsSlice;