import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { checkInAttendee } from "./state/userSlice";

const CheckIn = ({attendeeId, checkedIn}) =>{
    const dispatch = useDispatch()
    const [localCheckIn, setLocalCheckIn] = useState(checkedIn)
   
    console.log("checkedIn props passed", checkedIn);

    useEffect(()=>{
        setLocalCheckIn(checkedIn);
    },[checkedIn])
    

    const handleCheckIn = ()=>{
    dispatch(checkInAttendee(attendeeId))
    setLocalCheckIn(!localCheckIn)
    }

    

    // console.log("checked in status", checkedIn);
    

    return(
        <>
        <button onClick={handleCheckIn}>
            {localCheckIn?"Check-out":"check-in"}
        </button>
        </>
    )
}

export default CheckIn