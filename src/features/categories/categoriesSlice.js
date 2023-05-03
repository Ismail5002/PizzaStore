import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Count: 0
}


export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        category: (state, { payload }) => {
            return state.Count = payload
        }
    }
})

export const { category } = categorySlice.actions


