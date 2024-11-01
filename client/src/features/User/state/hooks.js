import { useSelector} from "react-redux";

import { selectAttendee, selectFont, selectStatus } from "./selectors";

export const useAttendeeSelector = ()=>{
    return useSelector(selectAttendee)
}

export const useFontSelector = ()=>{
    return useSelector(selectFont)
}

export const useAttendeeStatus = ()=>{
    return useSelector(selectStatus)
}
