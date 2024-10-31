import React from "react";
import { useDispatch } from "react-redux";
import { checkInAttendee } from "./state/userSlice";

const CheckIn = ({attendeeId}) =>{
    const dispatch = useDispatch()

    const handleCheckIn = ()=>{
    dispatch(checkInAttendee(attendeeId))
    }

    return(
        <>
        <button onClick={handleCheckIn}>Check-in</button>
        </>
    )
}

export default CheckIn