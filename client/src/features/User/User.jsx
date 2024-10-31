import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAttendees, resetAttendees } from "./state/userSlice";
import { useAttendeeSelector, useAttendeeStatus } from "./state/hooks";

const User = ()=>{
    const [query, setQuery] = useState("")
    const attendees = useAttendeeSelector()
    const status = useAttendeeStatus()
  const dispatch = useDispatch()

  const handleSearch = async()=>{
    //if query empty, reset attendees
    if (query.trim()===""){
      dispatch(resetAttendees())
      return
    }
    await dispatch(fetchAttendees(query)).unwrap();

  }

  // Function to format field names
  const formatFieldName = (fieldName) => {
    // Remove underscores and capitalize each word
    return fieldName
        .replace(/_/g, ' ') // Replace underscores with spaces
        .split(' ') // Split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words back together
};


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
        {attendees.length > 0 ? (
          attendees.map((attendee) => (
            <div className="attendee-card" key={attendee.id}>
                {Object.entries(attendee).map(([key, value]) => {
                  if (key !== 'id' && key !== 'checked_in' && key !== 'check_in_time') {
                    return <p key={key}>{`${formatFieldName(key)}: ${value}`}</p>;
                  }
                  return null;
                })}
            </div>
          ))
        ) : (
          <p>No attendees found.</p>
        )}
        </>
    )
}

export default User

