import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useAdminStatus = () => {
    const { AuthUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (AuthUser) {
            axiosPublic.get(`api/users/${AuthUser?.email}`)
            .then((res) => {
                setIsAdmin(res.data.isAdmin);
            });
        }
    }, []);

    return isAdmin;
};

export default useAdminStatus;