import { useState } from "react"
import { addProduct } from "../../../services/product-service"
import { useNavigate } from "react-router"

type InputType<T> = {
  name: string,
  value: T
}
type FormStateType = {
  productId: InputType<number>,
  productName: InputType<string>,
  productCode: InputType<string>,
  description: InputType<string>,
  releaseDate: InputType<string>,
  price: InputType<number>,
  starRating: InputType<number>,
  imageUrl: InputType<string>,
}
const AddProduct = () => {

  const navigate = useNavigate()

  const [productFormState, setProductFormState] = useState<FormStateType>({
    productId: { name: 'productId', value: 0 },
    productName: { name: 'productName', value: '' },
    productCode: { name: 'productCode', value: '' },
    description: { name: 'description', value: '' },
    releaseDate: { name: 'releaseDate', value: '' },
    starRating: { name: 'starRating', value: 0 },
    imageUrl: { name: 'imageUrl', value: '' },
    price: { name: 'price', value: 0 }
  })

  const updateProductFormState = (propName: string, value: any) => {
    setProductFormState(
      (currentFormState) => {
        return {
          ...currentFormState,
          [propName]: {
            name: propName,
            value: value
          }
        }
      }
    )
  }

  const addProductData = async () => {
    if (productFormState) {
      if (window.confirm('add product?')) {
        const { productId: id, productName: name, productCode: code, description, price, starRating: rating, releaseDate, imageUrl } = productFormState
        try {
          const axiosResponse = await addProduct({
            productId: id.value,
            productName: name.value,
            productCode: code.value,
            releaseDate: releaseDate.value,
            description: description.value,
            price: price.value,
            starRating: rating.value,
            imageUrl: imageUrl.value
          })
          if (axiosResponse.data.data !== null) {
            window.alert('product added successfully')
            navigate('/products')
          } else {
            window.alert(`could not add product. error: ${axiosResponse.data.message}`)
          }
        } catch (error: any) {
          window.alert(`could not add product. error: ${error.message}`)
        }
      }
    }
  }
  return (
    <form>
      <div>
        <label className="form-label mt-4" htmlFor="txtId">
          Id: &nbsp;
        </label>
        <input className="form-control" id="txtId" type="text"
          name={productFormState.productId.name}
          value={productFormState.productId.value}
          onChange={
            (e) => updateProductFormState(e.target.name, Number(e.target.value))

          } />
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="txtName">
          Name:&nbsp;
        </label>
        <input type="text" id="txtName" className="form-control"
          name={productFormState.productName.name}
          value={productFormState.productName.value}
          onChange={
            (e) => updateProductFormState(e.target.name, (e.target.value))
          } />
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="txtDesc">
          Desc:&nbsp;
        </label>
        <textarea
          id="txtDesc"
          className="form-control"
          name={productFormState.description.name}
          value={productFormState.description.value}
          onChange={
            (e) => updateProductFormState(e.target.name, (e.target.value))
          }
        >
        </textarea>
      </div>

      <div>
        <label className="form-label mt-4" htmlFor="txtCode">Code:&nbsp;</label>
        <input className="form-control" type="text" id="txtCode"
          name={productFormState.productCode.name}
          value={productFormState.productCode.value}
          onChange={
            (e) => updateProductFormState(e.target.name, e.target.value)
          } />
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="txtReleaseDate">
          Released On:&nbsp;
        </label>
        <input className="form-control" type="date"
          id="txtReleaseDate"
          name={productFormState.releaseDate.name}
          value={productFormState.releaseDate.value}
          onChange={
            (e) => updateProductFormState(e.target.name, e.target.value)
          } />
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="txtPrice">
          Price:&nbsp;
        </label>
        <input className="form-control" type="text"
          id="txtPrice"
          name={productFormState.price.name}
          value={productFormState.price.value}
          onChange={
            (e) => updateProductFormState(e.target.name, Number(e.target.value))
          } />
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="txtRating">
          Rating:&nbsp;
        </label>
        <input className="form-control" type="text"
          id="txtRating"
          name={productFormState.starRating.name}
          value={productFormState.starRating.value}
          onChange={
            (e) => updateProductFormState(e.target.name, Number(e.target.value))
          }
        />
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="txtImageUrl">
          Image URL: &nbsp;
        </label>
        <input className="form-control" type="text"
          id="txtImageUrl"
          name={productFormState.imageUrl.name}
          value={productFormState.imageUrl.value}
          onChange={
            (e) => updateProductFormState(e.target.name, e.target.value)
          } />
      </div>
      <div className="button-center">
        <button type="button" className="btn btn-primary"
          onClick={addProductData}>
          Add
        </button>
      </div>
    </form >
  )
}

export default AddProduct