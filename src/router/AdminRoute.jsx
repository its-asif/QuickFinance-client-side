import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdminStatus from "../Hooks/useAdminStatus";
import { HashLoader } from "react-spinners";

const AdminRoute = ({ children }) => {
    const { AuthUser, loading, LogOut } = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdminStatus();
    console.log("Admin route admin status checking", isAdmin);
   
    if (loading || isAdminLoading) {
        return (
            <div className="h-full w-full text-center flex justify-center items-center">
                <HashLoader className="text-center flex justify-center items-center m-auto mt-28" color="#09CC7F" />
            </div>
        );
    }

    if (AuthUser &&(isAdmin == true)) {
        return children;
    } else {
        LogOut();
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default AdminRoute;
