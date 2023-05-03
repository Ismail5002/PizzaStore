import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from '../categories/categoriesSlice';


const reducers = combineReducers({
    category: categorySlice.reducer
})

export const store = configureStore({ reducer: reducers })


