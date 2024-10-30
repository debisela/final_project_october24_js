import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchFields } from "./state/adminSlice";
import { useFieldsSelector, useFieldsStatus } from "./state/hooks";

const Admin = ()=>{
    const fields = useFieldsSelector()
    const status = useFieldsStatus()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchFields())
    }, [dispatch])


    if (status === 'loading') return <h2>Loading...</h2>
    if (status === 'failed') return <h2>Can't get fields...</h2>
    return(
        <>
        <h2>Fields Selection</h2>
        <div>
            {fields.map((item, index)=>(
                <div key={index}>
                    <input
                    
                    
                    
                    
                    />
                </div>
            ))}
        </div>
        </>
    )
}

export default Admin