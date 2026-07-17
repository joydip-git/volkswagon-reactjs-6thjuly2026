// import { createSlice, type ActionCreatorWithPayload, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit";
import { createSlice, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit";
import type { ProductsStateType } from "./types";
import type { Product } from "../models/product";

const initialProductsState: ProductsStateType = {
    products: [],
    errorInfo: '',
    isFetchOver: false
}
// const productsReducer = (state = initialProductsState, action: PayloadAction<string|Product[]|undefined>) => {
//     switch (action.type) {
//         case "reset":
//             return {
//                 ...state,
//                 products: [],
//                 isFetchOver: false,
//                 errorInfo:''
//             }

//         case "success":
//             return {
//                 ...state,
//                 products: action.payload as Product[],
//                 isFetchOver: true,
//                 errorInfo: ''
//             }

//         case "failed":
//             return {
//                 ...state,
//                 products: [],
//                 isFetchOver: true,
//                 errorInfo: action.payload as string
//             }

//         default:
//             return state
//     }
// }
const productsSlice = createSlice({
    name: 'productsslice',
    initialState: initialProductsState,
    reducers: {
        reset: (state: WritableDraft<ProductsStateType>) => {
            state.products = []
            state.errorInfo = ''
            state.isFetchOver = false
        },
        success: (state: WritableDraft<ProductsStateType>, action: PayloadAction<Product[]>) => {
            state.products = action.payload
            state.errorInfo = ''
            state.isFetchOver = true
        },
        failure: (state: WritableDraft<ProductsStateType>, action: PayloadAction<string>) => {
            state.products = []
            state.errorInfo = action.payload
            state.isFetchOver = true
        }
    }
})

export const productsReducer = productsSlice.reducer;
export const {
    reset: resetActionCreator,
    success: successActionCreator,
    failure: failureActionCreator
} = productsSlice.actions

// const actionTypes = {
//     success: "productsslice/success",
//     failure: "productsslice/failure",
//     reset: "productsslice/reset",
// }
// const success: ActionCreatorWithPayload<Product[], "productsslice/success"> = (data: Product[]) => {
//     return {
//         type: actionTypes.success,
//         payload: data
//     }
// }