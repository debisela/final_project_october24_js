import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  fieldsReducer from '../features/Admin/state/adminSlice.js'
import attendeeReducer from '../features/User/state/userSlice.js'

const reducer = combineReducers({
    fieldsReducer,
    attendeeReducer
})

const store = configureStore({
    reducer:reducer
})

export default store;