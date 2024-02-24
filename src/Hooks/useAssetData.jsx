import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../AuthProvider/Contextapi";
import { useContext } from "react";
const useAssetData = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: assetData = [], loading, refetch } = useQuery({
        queryKey: ["assetData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/assets/${AuthUser?.email}`);
            return res.data;
        },
    });

    return { assetData, loading, refetch };
};

export default useAssetData;
