import axios from 'axios';
import {Customer_BASE_URL, Orders_BASE_URL, Products_BASE_URL } from '../tmdbconfig.js';

export const getCustomers = async () => {
    const response = await axios.get(Customer_BASE_URL);
    return response.data;
};

export const getOrders = async () => {
    const response = await axios.get(Orders_BASE_URL);
    return response.data;
};

export const getProducts = async () => {
    const response = await axios.get(Products_BASE_URL);
    return response.data;
};

