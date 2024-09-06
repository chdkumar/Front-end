import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { getCustomers } from '../Services/tmdbApi';


export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
    const response = await getCustomers();
    return response.data;
});

const customersSlice = createSlice({
    name: 'customers',
    initialState: {
        entities: [],
        loading: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchCustomers.pending]: (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        [fetchCustomers.fulfilled]: (state, action) => {
            if (state.loading === 'pending') {
                state.entities = action.payload;
                state.loading = 'idle';
            }
        },
        [fetchCustomers.rejected]: (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
            }
        },
    },
});
export default customersSlice;