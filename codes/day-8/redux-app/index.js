const { legacy_createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increase":
            return {
                ...state,
                count: state.count + 1
            }

        case "decrease":
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return {
                ...state
            }
    }
}

const loggerMiddleware = createLogger()
const middlewarePipeline = applyMiddleware(loggerMiddleware)

const store = legacy_createStore(countReducer, middlewarePipeline)

console.log(store.getState());

store.dispatch({ type: "increase" })
//console.log(store.getState());

store.dispatch({ type: "decrease" })
//console.log(store.getState());

store.dispatch({ type: "increase" })
//console.log(store.getState());

store.dispatch({ type: "decrease" })
//console.log(store.getState());