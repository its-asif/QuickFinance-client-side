import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBudgetData = () => {
    const axiosPublic = useAxiosPublic();
    const { data: budgetPlanningData = [], loading: loading, refetch } = useQuery({

        queryKey: ['budgetPlanningData'],
        queryFn: async () => {

            const res = await axiosPublic.get('/api/budget');
            return res.data;
        }
    })

    return { budgetPlanningData, loading, refetch }


};

export default useBudgetData;