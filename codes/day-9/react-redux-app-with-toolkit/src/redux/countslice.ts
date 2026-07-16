import { createSlice, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit"
import type { CountStateType } from "./types"

const initialCountState: CountStateType = {
    count: 0
}

const countSlice = createSlice({
    name: 'countslice',
    initialState: initialCountState,
    reducers: {
        increase: (state: WritableDraft<CountStateType>, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        decrease: (state: WritableDraft<CountStateType>, action: PayloadAction<number>) => {
            state.count -= action.payload
        }
    }
})

export const countReducer = countSlice.reducer
export const {
    increase: increaseActionCreator,
    decrease: decreaseActionCreator
} = countSlice.actions
/*
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
    */