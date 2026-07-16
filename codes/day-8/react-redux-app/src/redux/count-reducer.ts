import { countActionTypes } from "./action-types"
import type { CountStateType, DataAction } from "./types"

const initialCountState: CountStateType = {
    count: 0
}
// const increaseCountReducer = (state = initialCountState, action: DataAction<number>) => {
//     return {
//         ...state,
//         count: state.count + (action.data ? action.data : 1)
//     }
// }
// const decreaseCountReducer = (state = initialCountState, action: DataAction<number>) => {
//     return {
//         ...state,
//         count: state.count - (action.data ? action.data : 1)
//     }
// }
export const countReducer = (state = initialCountState, action: DataAction<number>) => {
    switch (action.type) {
        case countActionTypes.INCREASE:
            return {
                ...state,
                count: state.count + (action.data ? action.data : 1)
            }

        case countActionTypes.DECREASE:
            return {
                ...state,
                count: state.count - (action.data ? action.data : 1)
            }

        default:
            return {
                ...state
            }
    }
}