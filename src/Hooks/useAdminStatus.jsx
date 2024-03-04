import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdminStatus = () => {
    const { AuthUser ,loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data:isAdmin, isPending:isAdminLoading}= useQuery({
        queryKey: [AuthUser?.email,'admin'],
        enabled: !loading,
        queryFn: async () =>{
        const res = await axiosSecure.get(`/api/users/admin/${AuthUser?.email}`)
        return res?.data?.isAdmin
        }

    })
    return [isAdmin,isAdminLoading]
};

export default useAdminStatus;