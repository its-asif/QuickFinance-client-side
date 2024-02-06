import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBudgetData = (userEmail) => {
    const axiosPublic = useAxiosPublic();
    const { data: budgetPlanningData = [], loading, refetch } = useQuery({
        queryKey: ["budgetPlanningData", userEmail],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/budget/${userEmail}`);
            return res.data;
        },
    });

    return { budgetPlanningData, loading, refetch };
};

export default useBudgetData;
