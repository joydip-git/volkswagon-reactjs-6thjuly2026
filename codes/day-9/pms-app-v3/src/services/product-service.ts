import { type AxiosResponse } from "axios";
//import axios from 'axios'
//import { PRODUCT_API_BASE_URL } from "../config/constants";
import type { ApiResponse } from "../models/apiresponse";
import type { Product } from "../models/product";
import axiosInstance from "../config/axiosinstance";

export async function getProducts()
    : Promise<AxiosResponse<ApiResponse<Product[]>>> {
    // return axios.get<ApiResponse<Product[]>>(PRODUCT_API_BASE_URL)
    return axiosInstance.get<ApiResponse<Product[]>>('')
}

export async function getProductById(id: number)
    : Promise<AxiosResponse<ApiResponse<Product>>> {
    //return axios.get<ApiResponse<Product>>(`${PRODUCT_API_BASE_URL}/${id}`)
    return axiosInstance.get<ApiResponse<Product>>(`${id}`)
}

export async function updateProductById(product: Product)
    : Promise<AxiosResponse<ApiResponse<Product[]>>> {
    // return axios.put<ApiResponse<Product[]>>(`${PRODUCT_API_BASE_URL}/${product.productId}`, product)
    return axiosInstance.put<ApiResponse<Product[]>>(`${product.productId}`, product)
}

export async function addProduct(product: Product)
    : Promise<AxiosResponse<ApiResponse<Product[]>>> {
    // return axios.post<ApiResponse<Product[]>>(PRODUCT_API_BASE_URL, product)
    return axiosInstance.post<ApiResponse<Product[]>>('', product)
}

export async function deleteProductById(id: number)
    : Promise<AxiosResponse<ApiResponse<Product[]>>> {
    // return axios.delete<ApiResponse<Product[]>>(`${PRODUCT_API_BASE_URL}/${id}`)
    return axiosInstance.delete<ApiResponse<Product[]>>(`${id}`)
}