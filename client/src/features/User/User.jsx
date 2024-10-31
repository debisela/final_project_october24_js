import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAttendees } from "./state/userSlice";
import { useAttendeeSelector, useAttendeeStatus } from "./state/hooks";

const User = ()=>{
    const [query, setQuery] = useState("")
    const attendees = useAttendeeSelector()
    const status = useAttendeeStatus()
  const dispatch = useDispatch()

  const handleSearch = async()=>{
    if (query.trim()===""){
      dispatch(resetAttendees())
      return
    }
    await dispatch(fetchAttendees(query)).unwrap();

  }



  if (status === 'loading') return <h2 className="status-message">Loading...</h2>
  if (status === 'failed') return <h2 className="status-message error-message">Can't get attendee...</h2>
    return(
        <>
        <h2>Attendees</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter last name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        </>
    )
}

export default User