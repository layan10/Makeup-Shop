import axios from "axios";

import { BASE_URL, FAILED_TO_GET_PRODUCTS, FAILED_TO_GET_PRODUCT, FAILED_TO_CREATE_PRODUCT, FAILED_TO_UPDATE_PRODUCT, FAILED_TO_DELETE_PRODUCT } from "../models/constants";

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(FAILED_TO_GET_PRODUCTS);
    }
}   

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(FAILED_TO_GET_PRODUCT);
    }
}

export const createProduct = async (product) => {
    try {
        const response = await axios.post(`${BASE_URL}/products`, product);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(FAILED_TO_CREATE_PRODUCT);
    }
}

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${BASE_URL}/products/${id}`, product);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(FAILED_TO_UPDATE_PRODUCT);
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(FAILED_TO_DELETE_PRODUCT);
    }
}

