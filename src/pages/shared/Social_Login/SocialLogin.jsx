/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { SignInUser, GoogleSignUp } = useAuth()
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
                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                // toast.error(`${errorMessage}`)
            });
    }
    return (
        <div>
            {/* Google & Facebook Button */}
            <div className="mt-3 space-y-3">

                {/* Google */}
                <button onClick={handleGoogle}
                    type="button"
                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                    <span className="mr-2 inline-block">
                        <svg
                            className="h-6 w-6 text-rose-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                    </span>
                    Sign in with Google
                </button>


                {/* Facebook */}
                <button
                    type="button"
                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                    <span className="mr-2 inline-block">
                        <svg
                            className="h-6 w-6 text-[#2563EB]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                    </span>
                    Sign in with Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;