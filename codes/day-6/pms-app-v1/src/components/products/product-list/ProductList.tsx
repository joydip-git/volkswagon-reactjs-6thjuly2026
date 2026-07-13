import React, { useState } from "react"
import { productRecords } from "../../../data/productrecords"
import './ProductList.css'
import ProductRow from "../product-row/ProductRow"

const ProductList = () => {
    const [products, setProducts] = useState(productRecords)

    const productRows: React.JSX.Element[] =
        products.map(
            (p) => {
                return <ProductRow product={p} key={p.productId} />
                // const pRow = <ProductRow product={p} key={p.productId} />
                // console.log(pRow);
                // return pRow
            }
        )

    return (
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
}

export default ProductList