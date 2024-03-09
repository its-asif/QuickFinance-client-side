import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://quick-finance-server-side.vercel.app'
    baseURL: 'https://quick-finance-server.vercel.app/',
    // baseURL: 'http://localhost:3000'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
