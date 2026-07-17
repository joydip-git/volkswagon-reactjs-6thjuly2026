import { createSlice, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit";
import type { ProductStateType } from "./types";
import type { Product } from "../models/product";

const initialProductState: ProductStateType = {
    product: undefined,
    errorInfo: '',
    isFetchOver: false
}
const productSlice = createSlice({
    name: 'productslice',
    initialState: initialProductState,
    reducers: {
        reset: (state: WritableDraft<ProductStateType>) => {
            state.product = undefined
            state.errorInfo = ''
            state.isFetchOver = false
        },
        success: (state: WritableDraft<ProductStateType>, action: PayloadAction<Product>) => {
            state.product = action.payload
            state.errorInfo = ''
            state.isFetchOver = true
        },
        failure: (state: WritableDraft<ProductStateType>, action: PayloadAction<string>) => {
            state.product = undefined
            state.errorInfo = action.payload
            state.isFetchOver = true
        }
    }
})

export const productReducer = productSlice.reducer;

export const {
    reset: resetProductActionCreator,
    success: successProductActionCreator,
    failure: failureProductActionCreator
} = productSlice.actions