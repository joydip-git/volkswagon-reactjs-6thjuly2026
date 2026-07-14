import axios, { type AxiosResponse } from "axios";
import { PRODUCT_API_BASE_URL } from "../config/constants";
import type { ApiResponse } from "../models/apiresponse";
import type { Product } from "../models/product";

export async function getProducts()
    : Promise<AxiosResponse<ApiResponse<Product[]>>> {
    return axios.get<ApiResponse<Product[]>>(PRODUCT_API_BASE_URL)
}