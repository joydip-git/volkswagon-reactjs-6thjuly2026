import { Link } from 'react-router'
import type { Product } from '../../../models/product'
import './ProductRow.css'
type ProductRowPropType = {
    product: Product
}
const ProductRow = (args: Readonly<ProductRowPropType>) => {
    return <tr>
        <td>
            <Link to={`/products/view/${args.product.productId}`}>
                <img src={args.product.imageUrl}
                    alt="NA"
                    title={args.product.productName}
                    className="img-box"
                />
            </Link>
        </td>
        <td>{args.product.productName}</td>
        <td>{args.product.price}</td>
        <td>{args.product.starRating}</td>
        <td>
            <button type="button" className='btn btn-danger btn-border'>Delete</button>
        </td>
    </tr>
}
export default ProductRow