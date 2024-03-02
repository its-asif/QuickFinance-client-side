/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const SocialLogin = () => {
    const { FacebookSignUp, GoogleSignUp } = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result?.user?.email,
                    name: result?.user?.displayName
                  }
                  axiosSecure.post("/api/users",userInfo)
                  .then(res=>{
                    if(res?.data){
                        console.log(res.data);
                        toast.success('Successfully login by Google!',{duration:3000}); 
                    }
                  })
                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/dashboard')
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.success(`Error!! Reason: ${errorMessage}`,{duration:3000}); 
            });
    }
    // const handleFacebookLogIn = () => {
    //     FacebookSignUp()
    //         .then((result) => {
    //             // The signed-in user info.
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             console.log(errorMessage);
    //         });
    // }
    return (
        <div>
            <div className="divider">OR</div>
            {/* Google & Facebook Button */}
            <div className="mt-3 space-y-3">

                {/* Google */}
                <button onClick={handleGoogle}
                    type="button"
                    className="relative flex items-center gap-1 w-full  justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                    <FcGoogle size={25} />
                    <span>Sign in with Google</span>
                </button>

                {/* Facebook */}
                {/* <button onClick={handleFacebookLogIn}
                    type="button"
                    className="relative flex  gap-1  w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                    <FaFacebook size={25} className="text-blue-600" />
                    <span className="mr-2 inline-block">
                        Sign in with Facebook
                    </span>
                </button> */}
            </div>
        </div>
    );
};

export default SocialLogin;