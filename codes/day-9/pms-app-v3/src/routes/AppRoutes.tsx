//import { Route, Routes, } from "react-router";
import { lazy } from "react"
import { useRoutes, type RouteObject } from "react-router"
const ProductList = lazy(() => import("../components/products/product-list/ProductList"))
const AddProduct = lazy(() => import("../components/products/add-product/AddProduct"))
const ViewProduct = lazy(() => import("../components/products/view-product/ViewProduct"))
const EditProduct = lazy(() => import("../components/products/edit-product/EditProduct"))
const Home = lazy(() => import("../components/common/home/Home"))
const PageNotFound = lazy(() => import("../components/common/page-not-found/PageNotFound"))


const AppRoutes = () => {
    const productRoutes: RouteObject = {
        path: 'products',
        children: [
            { path: '', element: <ProductList /> },
            { path: 'view/:id', element: <ViewProduct /> },
            { path: 'edit/:id', element: <EditProduct /> },
            { path: 'add', element: <AddProduct /> }
        ]
    }

    const appRoutes: RouteObject = {
        path: '',
        children: [
            { path: 'home', element: <Home /> },
            { path: '', element: <Home /> },
            { path: '*', element: <PageNotFound /> }
        ]
    }
    //useRoutes => Hook version of Routes that uses objects instead of components.

    const routes = useRoutes([productRoutes, appRoutes])
    return routes
    /*
    return (
        <Routes>
            <Route path='products'>
                <Route path='' element={<ProductList />} />
                <Route path='add' element={<AddProduct />} />
                <Route path='view/:id' element={<ViewProduct />} />
                <Route path='edit/:id' element={<EditProduct />} />
            </Route>

            <Route path="">
                <Route path='home' element={<Home />} />
                <Route path='' element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    )
    */
}

export default AppRoutes