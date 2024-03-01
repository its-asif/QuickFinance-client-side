/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
const SocialLogin = () => {
    const { FacebookSignUp, GoogleSignUp } = useAuth()
    const axiosPublic = useAxiosPublic()
    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                console.log(result.user)
                // toast.success(`Authenticating as ${result.user.email}`)
                // const SignedUser = {
                //     userName: result.user.displayName,
                //     userEmail: result.user.email,
                //     userFirebaseUid: result.user.uid,
                //     userCreationTime: result.user.metadata.creationTime,
                //     userLastSignInTime: result.user.metadata.lastSignInTime,
                //     UserVerified: result.user.emailVerified,
                //     userCity: "none",
                //     userZip: "none",
                //     userSkill: "none",
                //     userPhoto: result.user.photoURL,
                // }
                // console.log(SignedUser);
                // fetch('https://joblancernewserver.vercel.app/user', {
                //     method: `POST`,
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(SignedUser)
                // })
                //     .then(res => res.json())
                //     .then(data => console.log(data))
                // localStorage.setItem('ToastShow', JSON.stringify('false'))
                // axios.post('https://joblancernewserver.vercel.app/jwt', {
                //     email: result?.user.email,
                // }, { withCredentials: true })
                //     .then(res => console.log(res.data))
                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/dashboard')
            })
            .catch((error) => {
                const errorMessage = error.message;
                // toast.error(`${errorMessage}`)
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