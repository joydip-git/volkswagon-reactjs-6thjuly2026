import { useNavigate } from "react-router"
import type { Product } from "../../../models/product"
import { successProductActionCreator } from "../../../redux/productslice"
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks"
import { updateProductById } from "../../../services/product-service"
import './EditProduct.css'

const EditProduct = () => {
  const { product, errorInfo, isFetchOver } = useTypedSelector(statemap => statemap.productState)
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const updateProductHandler = (p: Product) => {
    dispatch(successProductActionCreator(p))
  }

  const updateProductData = async () => {
    if (product) {
      if (window.confirm('update product?')) {
        try {

          const axiosReponse = await updateProductById(product)
          const apiResponse = axiosReponse.data
          if (apiResponse.data !== null) {
            window.alert('product updated successfully')
            navigate('/products')
          } else {
            window.alert('product could not be updated: ' + apiResponse.message)
          }
        } catch (error: any) {
          window.alert('product could not be updated: ' + error.message)
        }
      }
    }
  }


  if (!isFetchOver)
    return <span>Loading....</span>
  else if (errorInfo !== '')
    return <span>{errorInfo}</span>
  else if (product === undefined)
    return <span>No record found</span>
  else
    return (
      <form>
        <div>
          <label className="form-label mt-4" htmlFor="txtId">
            Id: &nbsp;
          </label>
          <input className="form-control" id="txtId" type="text"
            value={product.productId} readOnly />
        </div>
        <div>
          <label className="form-label mt-4" htmlFor="txtName">
            Name:&nbsp;
          </label>
          <input type="text" id="txtName" className="form-control"
            value={product.productName}
            onChange={
              (e) => {
                updateProductHandler({
                  ...product,
                  productName: (e.target as HTMLInputElement).value
                })
              }
            } />
        </div>
        <div>
          <label className="form-label mt-4" htmlFor="txtDesc">
            Desc:&nbsp;
          </label>
          <textarea value={product.description}
            id="txtDesc"
            className="form-control"
            onChange={
              (e) => {
                updateProductHandler({
                  ...product,
                  description: (e.target as HTMLTextAreaElement).value
                })
              }
            }
          >
          </textarea>
        </div>

        <div>
          <label className="form-label mt-4" htmlFor="txtCode">Code:&nbsp;</label>
          <input className="form-control" type="text"
            value={product.productCode}
            id="txtCode"
            onChange={
              (e) => {
                updateProductHandler({
                  ...product,
                  productCode: (e.target as HTMLInputElement).value
                })
              }
            } />
        </div>
        <div>
          <label className="form-label mt-4" htmlFor="txtReleaseDate">
            Released On:&nbsp;
          </label>
          <input className="form-control" type="date"
            id="txtReleaseDate"
            value={product.releaseDate}
            onChange={
              (e) => {
                updateProductHandler({
                  ...product,
                  releaseDate: (e.target as HTMLInputElement).value
                })
              }
            } />
        </div>
        <div>
          <label className="form-label mt-4" htmlFor="txtPrice">
            Price:&nbsp;
          </label>
          <input className="form-control" type="text"
            id="txtPrice"
            value={product.price}
            onChange={
              (e) => {
                updateProductHandler({
                  ...product,
                  price: parseFloat((e.target as HTMLInputElement).value)
                })
              }
            } />
        </div>
        <div>
          <label className="form-label mt-4" htmlFor="txtRating">
            Rating:&nbsp;
          </label>
          <input className="form-control" type="text"
            id="txtRating"
            value={product.starRating}
            onChange={
              (e) => {
                updateProductHandler({
                  ...product,
                  starRating: Number((e.target as HTMLInputElement).value)
                })
              }
            }
          />
        </div>
        <div>
          <label className="form-label mt-4" htmlFor="txtImageUrl">
            Image URL: &nbsp;
          </label>
          <input className="form-control" type="text"
            id="txtImageUrl"
            value={product.imageUrl}
            onChange={
              (e) => {
                updateProductHandler({
                  ...product,
                  imageUrl: (e.target as HTMLInputElement).value
                })
              }
            } />
        </div>
        <div className="button-center">
          <button type="button" className="btn btn-primary"
            onClick={updateProductData}>
            Edit
          </button>
        </div>
      </form >
    )
}

export default EditProduct