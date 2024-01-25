import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://mm-serrver.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;