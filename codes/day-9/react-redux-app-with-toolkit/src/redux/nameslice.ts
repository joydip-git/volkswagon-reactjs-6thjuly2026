import { createSlice, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit"
import type { NameStateType } from "./types"

const initialNameState: NameStateType = {
    name: ''
}

const nameSlice = createSlice({
    name: 'nameslice',
    initialState: initialNameState,
    reducers: {
        change: (state: WritableDraft<NameStateType>, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        reset: (state: WritableDraft<NameStateType>) => {
            state.name = ''
        }
    }
})
export const nameReducer = nameSlice.reducer
export const {
    change: changeActionCreator,
    reset: resetActionCreator
} = nameSlice.actions
/*
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
    */