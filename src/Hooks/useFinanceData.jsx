import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useFinanceData = () => {
    const axiosSecure = useAxiosSecure();

    const { data: financialManagementData = [], loading: loading, refetch } = useQuery({

        queryKey: ['financialManagementData'],
        queryFn: async () => {

            const res = await axiosSecure.get('/api/transactions/');
            return res.data;
        }
    })

    return { financialManagementData, loading, refetch }
};

export default useFinanceData;