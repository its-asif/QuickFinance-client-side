import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBudgetData = (userEmail) => {
    const axiosSecure = useAxiosSecure();
    const { data: budgetPlanningData = [], loading, refetch } = useQuery({
        queryKey: ["budgetPlanningData", userEmail],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/budget/${userEmail}`);
            return res.data;
        },
    });

    return { budgetPlanningData, loading, refetch };
};

export default useBudgetData;
