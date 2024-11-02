// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectFont } from "./state/adminSlice";
// import { useFontSelection} from "./state/hooks";
// import { tagStyle } from "./tagStyle";
// import Tag from "./Tag";
 
// const Formatting = ({selectedFields})=>{
//     const dispatch = useDispatch()
//     const fontType = useFontSelection()


//     useEffect(() => {
//         console.log("Current fontType:", fontType);
//     }, [fontType]);
    
    
//     // const fontType = useFontSelection()
//     // console.log(fontType);
    
    

//     // useEffect(() => {
//     //     dispatch(fetchFont());
//     // }, [dispatch]);
  
    

//     const handleFontChange = (e)=>{
//         const {value} = e.target;
//         console.log('font selected', value);
        
//         dispatch(selectFont(value));
//       };

// return(
//     <>
    
//             <h2>Tag Preview</h2>
//             <p>Below is a preview of how the tag will look like</p>
//             <div><span>Font Selection</span>
//     <select value={fontType} onChange={handleFontChange}>
//                 <option value="" disabled>Please choose a font type</option>
//                 <option value="Arial">Arial</option>
//                 <option value="Courier New">Courier New</option>
//                 <option value="Georgia">Georgia</option>
//                 <option value="Times New Roman">Times New Roman</option>
//             </select>
//             </div>
//       <Tag attendee={{}} selectedFields={selectedFields} fontType={fontType}/>
//             </>
// )
// }

// export default Formatting
// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { selectFont } from "./state/adminSlice";
// import { useFontSelection } from "./state/hooks";
// import Tag from "./Tag";


// const Formatting = ({ selectedFields }) => {
//     const dispatch = useDispatch();
//     const fontType = useFontSelection();

//     useEffect(() => {
//         console.log("Current fontType:", fontType);
//     }, [fontType]);

//     const handleFontChange = (e) => {
//         const { value } = e.target;
//         console.log("font selected", value);
//         dispatch(selectFont(value));
//     };

//     return (
//         <div className="formatting-container">
//             <h2 className="heading">Tag Preview</h2>
//             <p className="description">Below is a preview of how the tag will look like</p>
//             <div className="font-selection">
//                 <label htmlFor="font-select">Font Selection</label>
//                 <select
//                     id="font-select"
//                     value={fontType}
//                     onChange={handleFontChange}
//                     className="font-select"
//                 >
//                     <option value="" disabled>
//                         Please choose a font type
//                     </option>
//                     <option value="Arial">Arial</option>
//                     <option value="Courier New">Courier New</option>
//                     <option value="Georgia">Georgia</option>
//                     <option value="Times New Roman">Times New Roman</option>
//                 </select>
//             </div>
//             <div className="tag-preview">
//                 <Tag attendee={{}} selectedFields={selectedFields} fontType={fontType} />
//             </div>
//         </div>
//     );
// };

// export default Formatting;



import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectFont } from "./state/adminSlice";
import { useFontSelection } from "./state/hooks";
import Tag from "./Tag";

const Formatting = ({ selectedFields }) => {
    const dispatch = useDispatch();
    const fontType = useFontSelection();

    useEffect(() => {
        console.log("Current fontType:", fontType);
    }, [fontType]);

    const handleFontChange = (e) => {
        const { value } = e.target;
        console.log("font selected", value);
        dispatch(selectFont(value));
    };

    return (
      <div className="formatting-container">
      <h2 className="heading">Tag Preview</h2>
      <p className="description">Below is a preview of how the tag will look like</p>

      <div className="side-by-side-container">
          <div className="font-selection">
              <label htmlFor="font-select">Font Selection</label>
              <select
                  id="font-select"
                  value={fontType}
                  onChange={handleFontChange}
                  className="font-select"
              >
                  <option value="" disabled>
                      Please choose a font type
                  </option>
                  <option value="Arial">Arial</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Times New Roman">Times New Roman</option>
              </select>
          </div>
          
          <div className="tag-preview">
              <Tag attendee={{}} selectedFields={selectedFields} fontType={fontType} />
          </div>
      </div>
  </div>
    );
};

export default Formatting;

