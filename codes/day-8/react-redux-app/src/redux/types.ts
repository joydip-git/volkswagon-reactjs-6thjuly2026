export type DataAction<T> = {
    type: string,
    data?: T
}

export type NameStateType = {
    name: string
}

export type CountStateType = {
    count: number
}

// export type StateType = NameStateType & CountStateType