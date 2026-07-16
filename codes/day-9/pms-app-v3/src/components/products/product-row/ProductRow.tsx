import type { Product } from '../../../models/product'
import './ProductRow.css'
type ProductRowPropType = {
    product: Product
}
const ProductRow = (args: Readonly<ProductRowPropType>) => {
    return <tr>
        <td>
            <img src={args.product.imageUrl}
                alt="NA"
                title={args.product.productName}
                className="img-box"
            />
        </td>
        <td>{args.product.productName}</td>
        <td>{args.product.price}</td>
        <td>{args.product.starRating}</td>
        <td>
            <button type="button">Delete</button>
        </td>
    </tr>
}
export default ProductRow