import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    fields: [],
    selectedFields:[],
    fontType: 'Arial',
    fontSize: '16px',
    fontColor: '#000000', //default black
    status: "",
}

//async thunk for fetch fields in table
export const fetchFields = createAsyncThunk(
    'admin/fetchFields',
    async()=>{
        try {
            const response = await axios.get(`http://localhost:3300/api/admin/fields`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

//async thunk for saving selecting fields
export const selectField = createAsyncThunk(
    'admin/selectField',
    async(selectedFields, {rejectWithValue})=>{
        try {
            console.log('selectedFields passed', selectedFields);
            
            const response = await axios.post('http://localhost:3300/api/admin/tag/fields', 
            {selectedFields},
            {headers: {
                'Content-Type': 'application/json'
            }});
            console.log("response data", response.data);
            
            return response.data;    
        } catch (error) {
            console.log("error checking in");
            
            return rejectWithValue(error.response.data)
        }
    }
)

// Async thunk for fetching selected fields
export const fetchSelectedFields = createAsyncThunk(
    'admin/fetchSelectedFields',
    async () => {
        try {
            const response = await axios.get(`http://localhost:3300/api/admin/tag/fields`);
            console.log(response.data);
            
            return response.data; 
        } catch (error) {
            console.log(error);
        }
    }
);

//async thunk for selecting font
export const selectFont = createAsyncThunk(
    'admin/selectFont',
    async(fontType, {rejectWithValue})=>{
        try {
            console.log('fonttype selected', fontType);
            
            const response = await axios.post('http://localhost:3300/api/admin/tag/font', 
            {fontType},
            {headers: {
                'Content-Type': 'application/json'
            }});
            console.log("response data", response.data);
            
            return response.data;
            
            
        } catch (error) {
            console.log("error checking in");
            
            return rejectWithValue(error.response.data)
        }
    }
)

export const adminSlice = createSlice({
    name: "admin",
    initialState: initialState,
    reducers:{
        toggleFieldSelection: (state, action) => {
            const field = action.payload;
            if (state.selectedFields.includes(field)) {
              // Deselect the field
              state.selectedFields = state.selectedFields.filter((selected) => selected !== field);
            } else {
              // Select the field
              state.selectedFields.push(field);
            }
          },
    },





})