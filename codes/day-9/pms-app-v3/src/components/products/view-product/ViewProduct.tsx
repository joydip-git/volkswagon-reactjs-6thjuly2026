import { useNavigate, useParams } from "react-router"
import { useTypedDispatch, useTypedSelector } from "../../../redux/typedhooks"
import { useEffect } from "react"
import { getProductById } from "../../../services/product-service"
import { failureProductActionCreator, resetProductActionCreator, successProductActionCreator } from "../../../redux/productslice"

const ViewProduct = () => {

  const navigate = useNavigate()
  const params = useParams()
  const id = Number(params["id"])

  const { product, errorInfo, isFetchOver } = useTypedSelector(statemap => statemap.productState)
  const dispatch = useTypedDispatch()

  const fetchProduct = async () => {

    dispatch(resetProductActionCreator())

    try {
      const response = await getProductById(id)
      const apiRespone = response.data
      if (apiRespone.data !== null) {
        dispatch(successProductActionCreator(apiRespone.data))
      } else {
        dispatch(failureProductActionCreator(apiRespone.message))
      }
    } catch (error: any) {
      dispatch(failureProductActionCreator(error.message))
    }
  }

  useEffect(
    () => {
      (async function () {
        await fetchProduct()
      })()
    }, [id]
  )

  if (!isFetchOver)
    return <span>Loading....</span>
  else if (errorInfo !== '')
    return <span>{errorInfo}</span>
  else if (product === undefined)
    return <span>No record found</span>
  else
    return (
      <div>
        <span>Details of: &nbsp;{product.productName}</span>
        <br />
        <table>
          <tr>
            <td>Id:&nbsp;</td>
            <td>{product.productId}</td>
          </tr>
          <tr>
            <td>Name:&nbsp;</td>
            <td>{product.productName}</td>
          </tr>
          <tr>
            <td>Desc:&nbsp;</td>
            <td>{product.description}</td>
          </tr>
          <tr>
            <td>Code:&nbsp;</td>
            <td>{product.productCode}</td>
          </tr>
          <tr>
            <td>Released On:&nbsp;</td>
            <td>{product.releaseDate}</td>
          </tr>
          <tr>
            <td>Price:&nbsp;</td>
            <td>{product.price}</td>
          </tr>
          <tr>
            <td>Rating:&nbsp;</td>
            <td>{product.starRating}</td>
          </tr>
          <tr>
            <td>Image:&nbsp;</td>
            <td>
              <img src={product.imageUrl} className="img img-responsive img-style" alt="NA" />
            </td>
          </tr>
        </table>
        <br />
        <button type="button" className="btn btn-primary" onClick={() => navigate(`/products`)}>
          Done
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-primary" onClick={() => navigate(`/products/edit/${id}`)}>Edit</button>
      </div>
    )
}

export default ViewProduct