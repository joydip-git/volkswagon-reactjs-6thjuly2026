import React, { useEffect, useState } from "react"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import type { Product } from "../../../models/product"
import { getProducts } from "../../../services/product-service"
import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../../../models/apiresponse"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [errorInfo, setErroInfo] = useState('')
    const [isfetchOver, setIsFetchOver] = useState(false)

    const fetchProducts = async () => {
        setIsFetchOver(false)
        try {
            const response: AxiosResponse<ApiResponse<Product[]>> = await getProducts()
            const apiResponse: ApiResponse<Product[]> = response.data
            if (apiResponse.data !== null) {
                setProducts(apiResponse.data)
                setErroInfo('')
                setIsFetchOver(true)
            } else {
                setProducts([])
                setErroInfo(apiResponse.message)
                setIsFetchOver(true)
            }
        } catch (error: any) {
            console.log(error.message);
            setProducts([])
            setErroInfo(error.message)
            setIsFetchOver(true)
        }
    }

    useEffect(
        () => {
            (async function () {
                await fetchProducts()
            })()
        },
        []
    )
    const productRows: React.JSX.Element[] =
        products.map(
            (p) => {
                return <ProductRow product={p} key={p.productId} />
            }
        )

    let design
    if (!isfetchOver)
        design = <span>Loading...</span>
    else if (errorInfo !== '')
        design = <span>{errorInfo}</span>
    else if (products.length === 0)
        design = <span>No records found</span>
    else
        design = (
            <div>
                <h2>List of Products</h2>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productRows
                        }
                    </tbody>
                </table>
            </div>
        )
    return design
}

export default ProductList