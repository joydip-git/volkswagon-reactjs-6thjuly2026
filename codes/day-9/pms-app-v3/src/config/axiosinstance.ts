import { create } from "axios";
import { PRODUCT_API_BASE_URL } from "./constants";

const axiosInstance = create({
    baseURL: PRODUCT_API_BASE_URL,
    timeout: 2000,
    timeoutErrorMessage: 'request timed out'
})

axiosInstance.interceptors.request.use(
    (req) => {
        req.headers.Authorization = "Bearer token"
        return req
    }
)

axiosInstance.interceptors.response.use(
    (res) => {
        console.log(res.data);
        return res
    }
)

export default axiosInstance