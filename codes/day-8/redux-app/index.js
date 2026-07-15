const { legacy_createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')

//initial states
const initialCountState = {
    count: 0
}

const initialNameState = {
    name: ''
}

//action types
const countActionTypes = {
    INCREASE: "INCREASE",
    DECREASE: "DECREASE",
}

const nameActionTypes = {
    CHANGE: "CHANGE",
    RESET: "RESET",
}

//action creators
const increaseActionCreator = (value) => {
    return {
        type: countActionTypes.INCREASE,
        data: value
    }
}
const decreaseActionCreator = (value) => {
    return {
        type: countActionTypes.DECREASE,
        data: value
    }
}
const changeActionCreator = (value) => {
    return {
        type: nameActionTypes.CHANGE,
        data: value
    }
}
const resetActionCreator = () => {
    return {
        type: nameActionTypes.RESET
    }
}

//reducers
const countReducer = (state = initialCountState, action) => {
    switch (action.type) {
        case countActionTypes.INCREASE:
            return {
                ...state,
                //count: state.count + 1
                count: state.count + action.data
            }

        case countActionTypes.DECREASE:
            return {
                ...state,
                //count: state.count - 1
                count: state.count - action.data
            }

        default:
            return {
                ...state
            }
    }
}

const nameReducer = (state = initialNameState, action) => {
    switch (action.type) {
        case nameActionTypes.CHANGE:
            return {
                ...state,
                name: action.data
            }
        case nameActionTypes.RESET:
            return {
                ...state,
                name: ''
            }

        default:
            return {
                ...state
            }
    }
}
const loggerMiddleware = createLogger()
const middlewarePipeline = applyMiddleware(loggerMiddleware)

//combine the reducers to create a reducer map (indirectly a state map)
const reducerMap = combineReducers({
    countState: countReducer,
    nameState: nameReducer
})

//create store
const store = legacy_createStore(reducerMap, middlewarePipeline)


//component code
console.log(store.getState());

//store.dispatch({ type: countActionTypes.INCREASE, data: 3 })
store.dispatch(increaseActionCreator(3))
//console.log(store.getState());

//store.dispatch({ type: countActionTypes.DECREASE, data: 1 })
store.dispatch(decreaseActionCreator(1))
//console.log(store.getState());

// store.dispatch({ type: countActionTypes.INCREASE, data: 2 })
//console.log(store.getState());

// store.dispatch({ type: countActionTypes.DECREASE, data: 4 })
//console.log(store.getState());

// store.dispatch({ type: nameActionTypes.CHANGE, data: 'joydip' })
store.dispatch(changeActionCreator('joydip'))
// store.dispatch({ type: nameActionTypes.CHANGE, data: 'joydip mondal' })
store.dispatch(changeActionCreator('anil kumar'))
// store.dispatch({ type: nameActionTypes.RESET })
store.dispatch(resetActionCreator())