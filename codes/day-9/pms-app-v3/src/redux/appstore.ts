//import { combineReducers} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsslice";
import { createLogger } from "redux-logger";

// const reducerMap = combineReducers({
//     productsState: productsReducer
// })

const logger = createLogger()
const AppStore = configureStore({
    reducer: {
        productsState: productsReducer
    },
    middleware: (piplineFn) => {
        return piplineFn().concat(logger)
    }
})

export type StoreStateType = ReturnType<typeof AppStore.getState>
export type StoreDispatchType = typeof AppStore.dispatch

export default AppStore