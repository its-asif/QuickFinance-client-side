import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFinanceData = () => {
    const axiosPublic = useAxiosPublic();

    const { data: financialManagementData = [], loading: loading, refetch } = useQuery({

        queryKey: ['financialManagementData'],
        queryFn: async () => {  

            const res = await axiosPublic.get('/api/transactions/');
            return res.data;
        }
    })
    return {financialManagementData, loading, refetch}
};

export default useFinanceData;