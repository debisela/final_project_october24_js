import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFont } from "./state/adminSlice";
import { useFontSelection} from "./state/hooks";
import { tagStyle } from "./tagStyle";
 
const Formatting = ({selectedFields})=>{
    const dispatch = useDispatch()
    const fontType = useFontSelection()


    useEffect(() => {
        console.log("Current fontType:", fontType);
    }, [fontType]);
    
    
    // const fontType = useFontSelection()
    // console.log(fontType);
    
    

    // useEffect(() => {
    //     dispatch(fetchFont());
    // }, [dispatch]);
  
    

    const handleFontChange = (e)=>{
        const {value} = e.target;
        console.log('font selected', value);
        
        dispatch(selectFont(value));
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

return(
    <>
    
            <h2>Tag Preview</h2>
            <h2>Font Selection</h2>
    <select value={fontType} onChange={handleFontChange}>
                <option value="" disabled>Please choose a font type</option>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
      <div
    style={{ fontFamily: fontType, ...tagStyle.tagContainer}}
        >
      
         {/* Show title, first name, last name individually */}
         <div
          style={{...tagStyle.name}}>
          {selectedFields.includes("title") && (
            <span>{formatFieldName("title")} </span>
          )}
          {selectedFields.includes("first_name") && (
            <span>{formatFieldName("first_name")} </span>
          )}
          {selectedFields.includes("last_name") && (
            <span>{formatFieldName("last_name")}</span>
          )}
        </div>
        
        {/* Display remaining fields */}
        {selectedFields.filter(field => !['title', 'first_name', 'last_name'].includes(field)).map((item, index) => (
          <div key={index} style={{...tagStyle.field}}>{formatFieldName(item)}</div>
        ))}
      </div>
            </>
)
}





export default Formatting

{/* <h2>Preview</h2>
<div style={{fontFamily:fontType}}>
        {selectedFields.map((item, index)=>(
            <div key={index}>{formatFieldName(item)}</div>
        ))}
</div> */}

// {formatFieldName('title')} {formatFieldName('first_name')} {formatFieldName('last_name')}

// border: "2px solid #333", // Border to visualize the tag
//         padding: "10px",
//         marginTop: "10px",
//         width: "3in", // Set width to 3 inches
//         height: "4in", // Set height to 4 inches
//         borderRadius: "8px",
//         textAlign: "center",
//         boxSizing: "border-box", // Ensure padding is included within width/height
//        }}

// fontSize: "36px", // Font size for attendee name
//             fontWeight: "bold",
//             marginBottom: "0.5rem",