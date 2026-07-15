import { countActionTypes, nameActionTypes } from "./action-types"
import type { DataAction } from "./types"

export const increaseActionCreator = (value?: number): DataAction<number> => {
    return {
        type: countActionTypes.INCREASE,
        data: value
    }
}
export const decreaseActionCreator = (value?: number): DataAction<number> => {
    return {
        type: countActionTypes.DECREASE,
        data: value
    }
}
export const changeActionCreator = (value: string): DataAction<string> => {
    return {
        type: nameActionTypes.CHANGE,
        data: value
    }
}
export const resetActionCreator = (): DataAction<undefined> => {
    return {
        type: nameActionTypes.RESET
    }
}