import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFont } from "./state/adminSlice";
import { useFontSelection} from "./state/hooks";
 
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
    <h2>Font Selection</h2>
    <select value={fontType} onChange={handleFontChange}>
                <option value="" disabled>Please choose a font type</option>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
            <h2>Preview</h2>
            <div style={{fontFamily:fontType}}>
                    {selectedFields.map((item, index)=>(
                        <div key={index}>{formatFieldName(item)}</div>
                    ))}
            </div>
            </>
)
}



export default Formatting