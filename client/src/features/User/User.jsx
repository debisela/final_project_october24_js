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
        {attendees.length > 0 ? (
            attendees.map((attendee) => (
                <div className="attendee-card" key={attendee.id}>
                    {Object.entries(attendee).map(([key, value]) => {
                        if (key !== 'id' && key !== 'checked_in' && key !== 'check_in_time') {
                            return <p key={key} className="attendee-info">{`${formatFieldName(key)}: ${value}`}</p>;
                        }
                        return null;
                    })}
                    <CheckIn attendeeId={attendee.id} checkedIn={attendee.checked_in} />
                    <Print attendee={attendee} />
                </div>
            ))
        ) : (
            <p className="no-attendees">No attendees found.</p>
        )}
    </div>
);
}

export default User


