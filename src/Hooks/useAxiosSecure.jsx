import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export const axiosSecure = axios.create({
    // baseURL: 'https://quick-finance-server-side.vercel.app',
       baseURL: 'https://quick-finance-server-side-zeta.vercel.app',
    // baseURL: 'http://localhost:3000',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { LogOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                LogOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;