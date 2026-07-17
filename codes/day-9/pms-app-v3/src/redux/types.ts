import type { Product } from "../models/product"

export type ProductsStateType = {
    products: Product[],
    errorInfo: string,
    isFetchOver: boolean
}

export type ProductStateType = {
    product: Product|undefined,
    errorInfo: string,
    isFetchOver: boolean
}