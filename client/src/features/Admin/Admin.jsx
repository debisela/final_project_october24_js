import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchFields, fetchSelectedFields, selectField, toggleFieldSelection } from "./state/adminSlice";
import { useFieldsSelector, useFieldsSelection, useFieldsStatus } from "./state/hooks";

const Admin = ()=>{
    const fields = useFieldsSelector()
    const selectedFields = useFieldsSelection()
    const status = useFieldsStatus()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchFields())
        dispatch(fetchSelectedFields())
    }, [dispatch])
    console.log('selected fields', selectedFields);
    

    // Dispatch an action to toggle field selection
  const handleFieldChange = (e) => {
    const {value} = e.target;
    dispatch(toggleFieldSelection(value)); // Toggle field selection in the Redux store
  };

    // Handle form submission (saving selected fields)
  const handleSubmit = () => {
    console.log("Selected fields to save:", selectedFields);
    dispatch(selectField(selectedFields)); // Dispatch action to save selected fields
  };


    if (status === 'loading') return <h2>Loading...</h2>
    if (status === 'failed') return <h2>Can't get fields...</h2>
    return(
        <>
        <h2>Fields Selection</h2>
        <div>
            {fields.map((item, index)=>(
                <div key={index}>
                    <input
                    type="checkbox"
                    value={item.column_name}
                    checked={selectedFields.includes(item.column_name)}
                    onChange={handleFieldChange}
                    />
                    <label>{item.column_name}</label>
                </div>
            ))}
           <button onClick={handleSubmit}>Save my fields</button>
        </div>
        </>
    )
}

export default Admin