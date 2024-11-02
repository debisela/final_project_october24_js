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
      <>
      <h2 className="heading">Tag Styling & Preview</h2>
      <div className="formatting-container">
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
  </>
    );
};

export default Formatting;

