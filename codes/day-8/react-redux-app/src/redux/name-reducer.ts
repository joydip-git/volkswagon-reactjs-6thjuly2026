import { nameActionTypes } from "./action-types"
import type { DataAction, NameStateType } from "./types"

const initialNameState: NameStateType = {
    name: ''
}

export const nameReducer = (state = initialNameState, action: DataAction<string>) => {
    switch (action.type) {
        case nameActionTypes.CHANGE:
            return {
                ...state,
                name: action.data ? action.data : 'NA'
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