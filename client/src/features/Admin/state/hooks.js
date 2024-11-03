import { useSelector } from "react-redux";
import { selectFields, fieldsSelection, fontSelection, colorSelection, selectStatus } from "./selectors.js";

export const useFieldsSelector = ()=>{
    return useSelector(selectFields)
}

export const useFieldsSelection = ()=>{
    return useSelector(fieldsSelection)
}

export const useFontSelection = ()=>{
    return useSelector(fontSelection)
}

export const useColorSelection = ()=>{
    return useSelector(colorSelection)
}

export const useFieldsStatus = ()=>{
    return useSelector(selectStatus)
}