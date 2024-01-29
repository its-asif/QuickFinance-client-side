import { Navigate, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {AuthUser, loading}= useAuth();
    const location =  useLocation();
    if(loading){
        return <div className=" h-full w-full text-center flex justify-center items-center">
            <HashLoader className="  text-center flex justify-center items-center m-auto mt-28" color="#09CC7F" />
        </div>
    }
    if(AuthUser){
        return children;

    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;