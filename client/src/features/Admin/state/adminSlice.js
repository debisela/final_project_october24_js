import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//URL to deployed server
const API_URL = 'https://test-final-project-vanilla-server.onrender.com'

const initialState = {
    fields: [],
    selectedFields:[],
    fontType: 'Georgia',
    // fontSize: '16px',
    // fontColor: '#000000', //default black
    status: "",
}

//async thunk for fetch fields in table
export const fetchFields = createAsyncThunk(
    'admin/fetchFields',
    async()=>{
        try {
            const response = await axios.get(`${API_URL}/api/admin/fields`);
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
            
            const response = await axios.post(`${API_URL}/api/admin/tag/fields`, 
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
            const response = await axios.get(`${API_URL}/api/admin/tag/fields`);
            console.log(response.data);
            
            return response.data.map(item=>item.column_name); 
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
            
            const response = await axios.post(`${API_URL}/api/admin/tag/font`, 
            {fontType},
            {headers: {
                'Content-Type': 'application/json'
            }});
            console.log("response data", response);
            
            return fontType;
            
            
        } catch (error) {
            console.log("error checking in");
            
            return rejectWithValue(error.response.data)
        }
    }
)

// Async thunk for fetching font
// export const fetchFont = createAsyncThunk(
//     'admin/fetchFont',
//     async () => {
//         try {
//             const response = await axios.get(`${API_URL}/api/admin/tag/font`);
//             console.log(response.data);
//             console.log('fonttype fetched', response.data.font_type);
            
//             return response.data.font_type
//         } catch (error) {
//             console.log(error);
//         }
//     }
// );

export const adminSlice = createSlice({
    name: "admin",
    initialState: initialState,
    reducers:{
        toggleFieldSelection: (state, action) => {
            const field = action.payload;
            if (state.selectedFields.includes(field)) {
              // if field already selected, remove it
              state.selectedFields = state.selectedFields.filter((selected) => selected !== field);
            } else {
              // if not yet selected, add
              state.selectedFields.push(field);
            }
          },
    },
    extraReducers(builder){
        builder
        .addCase(fetchFields.pending, state=>{
            state.status = "loading";
        })
        .addCase(fetchFields.fulfilled, (state, action)=>{
            state.status = "success";
            state.fields = action.payload
        })
        .addCase(fetchFields.rejected, state=>{
            state.status = "failed"
        })
        .addCase(fetchSelectedFields.pending, state=>{
            state.status = "loading";
        })
        .addCase(fetchSelectedFields.fulfilled, (state, action)=>{
            state.status = "success";
            state.selectedFields = action.payload
        })
        .addCase(fetchSelectedFields.rejected, state=>{
            state.status = "failed"
        })
        .addCase(selectField.pending, state=>{
            state.status = "loading";
        })
        .addCase(selectField.fulfilled, (state,action)=>{
      
            state.status = "success";
        })
        .addCase(selectField.rejected, state=>{
            state.status = "failed"
        })
        .addCase(selectFont.pending, state=>{
            state.status = "loading";
        })
        .addCase(selectFont.fulfilled, (state,action)=>{
            state.status = "success";
            state.fontType = action.payload
        })
        .addCase(selectFont.rejected, state=>{
            state.status = "failed"
        })
        // .addCase(fetchFont.pending, state=>{
        //     state.status = "loading";
        // })
        // .addCase(fetchFont.fulfilled, (state, action)=>{
        //     state.status = "success";
        //     state.fontType = action.payload
        // })
        // .addCase(fetchFont.rejected, state=>{
        //     state.status = "failed"
        // })
    }
})

export const fields = (state)=>state.fieldsReducer.fields;
export const selectedFields = (state)=> state.fieldsReducer.selectedFields;
export const fontType = (state)=> state.fieldsReducer.fontType;
// export const fonts = (state)=> state.fieldsReducer.fonts

export const status = (state)=> state.fieldsReducer.status
export const state = (state) => state.fieldsReducer;

export const {toggleFieldSelection} = adminSlice.actions
export default adminSlice.reducer;
