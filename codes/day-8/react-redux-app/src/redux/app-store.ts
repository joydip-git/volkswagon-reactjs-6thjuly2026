import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { createLogger } from "redux-logger";
import { countReducer } from "./count-reducer";
import { nameReducer } from "./name-reducer";

const loggerMiddleware = createLogger()
const middlewarePipeline = applyMiddleware(loggerMiddleware)

//combine the reducers to create a reducer map (indirectly a state map)
const reducerMap = combineReducers({
    countState: countReducer,
    nameState: nameReducer
})

//create store
const AppStore = legacy_createStore(reducerMap, middlewarePipeline)

export type StoreStateType = ReturnType<typeof AppStore.getState>
export type StoreDispatchType = typeof AppStore.dispatch

export default AppStore