import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchFields, fetchSelectedFields, selectField, toggleFieldSelection } from "./state/adminSlice";
import { useFieldsSelector, useFieldsSelection, useFieldsStatus } from "./state/hooks";
import Formatting from "./Formatting";
import './admin.css'

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

   // Function to format field names
   const formatFieldName = (fieldName) => {
    // Remove underscores and capitalize each word
    return fieldName
        .replace(/_/g, ' ') // Replace underscores with spaces
        .split(' ') // Split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words back together
};


if (status === 'loading') return <h2 className="status-message">Loading...</h2>;
if (status === 'failed') return <h2 className="status-message error-message">Can't get fields...</h2>;

return (
    <div className="admin-container">
        <h2 className="main-heading">Fields Selection</h2>
        <div className="fields-selection">
            {fields.map((item, index) => (
                <div key={index} className="field-item">
                    <input
                        type="checkbox"
                        value={item.column_name}
                        checked={selectedFields.includes(item.column_name)}
                        onChange={handleFieldChange}
                        className="checkbox-input"
                    />
                    <label className="field-label">{formatFieldName(item.column_name)}</label>
                </div>
            ))}
            <button onClick={handleSubmit} className="submit-button">Save my fields</button>
        </div>
        <Formatting selectedFields={selectedFields} />
    </div>
);
}

export default Admin