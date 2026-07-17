import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsslice";
import { createLogger } from "redux-logger";
import { productReducer } from "./productslice";

const logger = createLogger()
const AppStore = configureStore({
    reducer: {
        productsState: productsReducer,
        productState: productReducer
    },
    middleware: (piplineFn) => {
        return piplineFn().concat(logger)
    }
})

export type StoreStateType = ReturnType<typeof AppStore.getState>
export type StoreDispatchType = typeof AppStore.dispatch

export default AppStore