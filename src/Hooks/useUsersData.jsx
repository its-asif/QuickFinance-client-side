import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUsersData = () => {
    const axiosPublic = useAxiosPublic();

    const { data: totalUser = [], loading: loading, refetch } = useQuery({

        queryKey: [''],
        queryFn: async () => {

            const res = await axiosPublic.get('/api/users');
            return res.data;
        }
    })

    return { totalUser, loading, refetch }
};

export default useUsersData;
