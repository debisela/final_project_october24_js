import { useSelector} from "react-redux";

import { selectAttendee, selectFont, selectColor, selectStatus } from "./selectors";

export const useAttendeeSelector = ()=>{
    return useSelector(selectAttendee)
}

export const useFontSelector = ()=>{
    return useSelector(selectFont)
}

export const useColorSelector = ()=>{
    return useSelector(selectColor)
}

export const useAttendeeStatus = ()=>{
    return useSelector(selectStatus)
}
