import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Contextapi";


const useAuth = () => {
    const authUtils = useContext(AuthContext)
    return authUtils;
};

export default useAuth;