import { useState, useEffect } from "react";
import { useUserAuth } from "./UserAuthContext";


const Loader = ({children}) => {
    const { userDetails, userBlogs } = useUserAuth();
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        if(userDetails && userBlogs){
            setLoaded(true)
        }
    },[userBlogs])
    if(loaded){
        return children
    } else {
        return <div>Loading</div>
    }
}

export default Loader