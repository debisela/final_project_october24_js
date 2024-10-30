import { useSelector } from "react-redux";
import { selectFields, fieldsSelection, fontSelection, selectStatus } from "./selectors.js";

export const useFieldsSelector = ()=>{
    return useSelector(selectFields)
}

export const useFieldsSelection = ()=>{
    return useSelector(fieldsSelection)
}

export const useFontSelection = ()=>{
    return useSelector(fontSelection)
}

// export const useSelectedFontSelector = ()=>{
//     return useSelector(selectedFontSelection)
// }

export const useFieldsStatus = ()=>{
    return useSelector(selectStatus)
}