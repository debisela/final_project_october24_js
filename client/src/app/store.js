import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  fieldsReducer from '../features/Admin/state/adminSlice.js'

const reducer = combineReducers({
    fieldsReducer,
})

const store = configureStore({
    reducer:reducer
})

export default store;