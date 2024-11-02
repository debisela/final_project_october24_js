import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAttendees, resetAttendees } from "./state/userSlice";
import { useAttendeeSelector, useAttendeeStatus } from "./state/hooks";
import CheckIn from "./CheckIn";
import Print from "./Print";
import './user.css'
import { formatFieldName } from "../Admin/tagStyle";

const User = ()=>{
    const [query, setQuery] = useState("")
    const [searched, setSearched] = useState(false); // Track if a search has been made
    const [errorMessage, setErrorMessage] = useState("");
    const attendees = useAttendeeSelector()
    const status = useAttendeeStatus()
  const dispatch = useDispatch()

  const handleSearch = async()=>{
     // Reset error message
     setErrorMessage("");
    //if query empty, reset attendees
    if (query.trim()===""){
      dispatch(resetAttendees());
      setErrorMessage("Please enter a name.");
      setSearched(false); // Reset search status
      return
    }
    await dispatch(fetchAttendees(query)).unwrap();
    setSearched(true); // Mark as searched after fetching attendees

  }

  if (status === 'loading') return <h2 className="status-message">Loading...</h2>
  if (status === 'failed') return <h2 className="status-message error-message">Can't get attendee...</h2>
  return (
    <div className="user-container">
        <h2 className="main-heading">Attendees</h2>
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {attendees.length > 0 ? (
            attendees.map((attendee) => (
                <div className="attendee-card" key={attendee.id}>
                     {/* Display ID first if it exists */}
    {attendee.id && (
        <p className="attendee-info">
            {`ID: ${attendee.id}`}
        </p>
    )}

    {/* Display first and last name on the same line if they exist */}
    {attendee.first_name && (
        <p className="attendee-info">
            {`First Name: ${attendee.first_name}`}
        </p>
    )}
     {attendee.last_name && (
        <p className="attendee-info">
            {`Last Name: ${attendee.last_name}`}
        </p>
    )}

    {/* Display remaining fields below */}
                    {Object.entries(attendee)
                    .filter(([key]) => !['id', 'first_name', 'last_name'].includes(key))
                    .map(([key, value]) => (<p key={key} className="attendee-info">{`${formatFieldName(key)}: ${value}`}</p>))
                        }
            
                    <CheckIn attendeeId={attendee.id} checkedIn={attendee.checked_in} />
                    <Print attendee={attendee} />
                </div>
            ))
        ) : (
           searched && <p className="no-attendees">No attendees found.</p>
        )}
    </div>
);
}

export default User


