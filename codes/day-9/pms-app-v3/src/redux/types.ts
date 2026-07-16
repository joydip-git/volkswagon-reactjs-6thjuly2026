import type { Product } from "../models/product"

export type ProductsStatType = {
    products: Product[],
    errorInfo: string,
    isFetchOver: boolean
}