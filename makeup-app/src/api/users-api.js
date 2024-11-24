import axios from "axios";

import { BASE_URL, FAILED_TO_GET_USERS, FAILED_TO_GET_USER, FAILED_TO_CREATE_USER, FAILED_TO_UPDATE_USER, FAILED_TO_DELETE_USER } from "../models/constants";

console.log("BASE_URL", BASE_URL);

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(FAILED_TO_GET_USERS);
  }
}

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(FAILED_TO_GET_USER);
  }
}

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, user);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(FAILED_TO_CREATE_USER);
  }
}

export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(FAILED_TO_UPDATE_USER);
  }
}

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(FAILED_TO_DELETE_USER);
  }
}