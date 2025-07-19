// for api

import axios from "axios";

const Base_url = 'https://fakestoreapi.com'

export const getAllProroducts = async()=> {

    const response = await axios.get(`${Base_url}/products`)

    return response.data;
}


export const getProductId = async(id)=> {

    const response = await axios.get(`${Base_url}/products/${id}`)

    return response.data;
}


export const getProductImage = async(id)=> {

    const response = await axios.get(`${Base_url}/products/${id}/image`)

    return response.data;
}


