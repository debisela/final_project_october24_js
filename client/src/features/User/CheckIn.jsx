import React from "react";
import { useDispatch } from "react-redux";
import { checkInAttendee } from "./state/userSlice";

const CheckIn = ({attendeeId, checkedIn}) =>{
    const dispatch = useDispatch()
    console.log(checkedIn);
    

    const handleCheckIn = ()=>{
    dispatch(checkInAttendee(attendeeId))
    }

    console.log("checked in status", checkedIn);
    

    return(
        <>
        <button onClick={handleCheckIn}>
            {checkedIn?"Check-out":"check-in"}
        </button>
        </>
    )
}

export default CheckIn