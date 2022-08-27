import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const ProtectedRoute = ({children}) => {
    let navigate = useNavigate();
    

    const { user } = useUserAuth();

    if(!user) {
        navigate("/");
    }else{
    return children
    }
}

export default ProtectedRoute;