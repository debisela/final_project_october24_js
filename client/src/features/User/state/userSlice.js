import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//URL to deployed server
const API_URL = 'https://test-final-project-vanilla-server.onrender.com'

const initialState = {
    attendees:[],
    status: "",
    fontType: "Arial",
    fontColor: "#000000",
}

//async thunk for search/fetch attendees
export const fetchAttendees = createAsyncThunk(
    'user/fetchAttendees',
    async(query, {rejectWithValue})=>{
        try {
            const response = await axios.get(`${API_URL}/api/user/attendees?query=${query}`);
            console.log(response.data); 
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }

)

//asyn thunk for check in attendee
export const checkInAttendee = createAsyncThunk(
    'user/checkInAttendee',
    async(attendeeId, {rejectWithValue})=>{
        try {
            console.log("id being passed", attendeeId);
            const response = await axios.post(`${API_URL}/api/user/attendees/checkin`, 
                {id: attendeeId},
            {headers: {
                'Content-Type': 'application/json'
            }});
            console.log("response data from check-in", attendeeId);
            
            return attendeeId;
            // return {id:attendeeId, checked_in:checked_in};
            
            
        } catch (error) {
            console.log("error checking in");
            
            return rejectWithValue(error.response.data)
        }
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{
        //reset attendees
        resetAttendees:(state)=>{
            state.attendees = [];
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchAttendees.pending, state=>{
            state.status = "loading";
        })
        .addCase(fetchAttendees.fulfilled, (state, action)=>{
            state.status = "success";
            state.attendees = action.payload.attendees;
            state.fontType = action.payload.fontType
            state.fontColor = action.payload.fontColor
        })
        .addCase(fetchAttendees.rejected, state=>{
            state.status = "failed"
        })
        .addCase(checkInAttendee.pending, state=>{
            state.status = "loading";
        })
        .addCase(checkInAttendee.fulfilled, (state,action)=>{
            state.status = "success";
            // const updatedAttendee = action.payload;
            const { id, checked_in } = action.payload; // Destructure to get id and checked_in
            // const index = state.attendees.findIndex(
            //   (attendee) => attendee.id === updatedAttendee.id
            // );
            // if (index !== -1) {
            //   state.attendees[index].checked_in = updatedAttendee.checked_in;
            // }
            const index = state.attendees.findIndex(attendee => attendee.id === id);
                if (index !== -1) {
                    state.attendees[index].checked_in = checked_in; // Update checked_in status directly
                }
        })
        .addCase(checkInAttendee.rejected, state=>{
            state.status = "failed"
        })
    }
})

export const attendees = (state)=> state.attendeeReducer.attendees;
export const fontType = (state)=> state.attendeeReducer.fontType;
export const fontColor = (state)=> state.attendeeReducer.fontColor;
export const status = (state)=> state.attendeeReducer.status
export const state = (state) => state.attendeeReducer;

export const {resetAttendees} = userSlice.actions
export default userSlice.reducer;
