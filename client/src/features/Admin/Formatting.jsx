import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectFont, selectColor } from "./state/adminSlice";
import { useFontSelection, useColorSelection } from "./state/hooks";
import Tag from "./Tag";
import { SketchPicker} from 'react-color'


const Formatting = ({ selectedFields }) => {
    const dispatch = useDispatch();
    const fontType = useFontSelection();
    const fontColor = useColorSelection()

    useEffect(() => {
        console.log("Current fontType:", fontType);
    }, [fontType]);

    const handleFontChange = (e) => {
        const { value } = e.target;
        console.log("font selected", value);
        dispatch(selectFont(value));
    };

    const handleColorChange = (color) => {
      console.log("Color selected:", color.hex);
      dispatch(selectColor(color.hex));
  };

    return (
      <>
      <h2 className="heading">Tag Styling & Preview</h2>
      <div className="formatting-container">
      <div className="side-by-side-container">
        <div className="selection-container">
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
          <div>
            <div className="color-selection">Color Selection</div>
            <SketchPicker color={fontColor} onChange={handleColorChange}/>
          </div>
          </div>
          
          <div className="tag-preview">
              <Tag attendee={{}} selectedFields={selectedFields} fontType={fontType} fontColor={fontColor} />
          </div>
      </div>
  </div>
  </>
    );
};

export default Formatting;

