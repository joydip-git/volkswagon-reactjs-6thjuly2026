import React, { useEffect } from "react"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"
import type { Product } from "../../../models/product"
import { getProducts } from "../../../services/product-service"
import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../../../models/apiresponse"
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks"
import { failureActionCreator, resetActionCreator, successActionCreator } from "../../../redux/productsslice"

const ProductList = () => {

    const { products, errorInfo, isFetchOver } = useTypedSelector(statemap => statemap.productsState)
    const dispatch = useTypedDispatch()

    const fetchProducts = async () => {
        // before fresh fetch, reset the states
        // dispatch({type:'productsslice/reset'})
        const resetAction = resetActionCreator()
        dispatch(resetAction)

        try {
            const response: AxiosResponse<ApiResponse<Product[]>> = await getProducts()
            const apiResponse: ApiResponse<Product[]> = response.data
            if (apiResponse.data !== null) {
                // success update: (payload: Product[])
                // dispatch({type:'productsslice/success', payload:apiResponse.data})
                const successAction = successActionCreator(apiResponse.data)
                dispatch(successAction)
            } else {
                //failure update: (payload: string)
                //dispatch({type:'productsslice/failure', payload:apiResponse.message})
                const failureAction = failureActionCreator(apiResponse.message)
                dispatch(failureAction)
            }
        } catch (error: any) {
            console.log(error.message);
            //failure update: (payload: string)
            //dispatch({type:'productsslice/failure', payload:error.message})
            const failureAction = failureActionCreator(error.message)
            dispatch(failureAction)
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
    if (!isFetchOver)
        design = <span>Loading...</span>
    else if (errorInfo !== '')
        design = <span>{errorInfo}</span>
    else if (products.length === 0)
        design = <span>No records found</span>
    else
        design = (
            <>
                <h2 className="text-muted">List of Products</h2>
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-primary">
                        {
                            productRows
                        }
                    </tbody>
                </table>
            </>
        )
    return design
}

export default ProductList