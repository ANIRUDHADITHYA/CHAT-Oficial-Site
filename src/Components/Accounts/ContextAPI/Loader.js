import { useState, useEffect } from "react";
import { useUserAuth } from "./UserAuthContext";


const Loader = ({children}) => {
    const { userDetails } = useUserAuth();
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        if(userDetails){
            setLoaded(true)
        }

    },[userDetails])
    if(loaded){
        return children
    } else {
        return <div>Loading</div>
    }
}

export default Loader