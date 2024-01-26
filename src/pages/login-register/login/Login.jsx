import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const Login = () => {
    const { SignInUser , GoogleSignUp} = useAuth()
    const axiosPublic = useAxiosPublic()
    //Handle Email password Sign In
    const handleSignIn = (e) => {
        const form = e.target
        const email = e.target.email.value;
        const password = e.target.password.value
        // console.log(email, password);
        SignInUser(email, password)
            .then(result => {
                const User = {
                    name: result.user.displayName,
                    email: result.user.email,
                    emailVerified: result.user.emailVerified,
                    creationTime: result.user.metadata.creationTime,
                    lastSignInTime: result.user.metadata.lastSignInTime,
                    profileImage: result.user.photoURL,
                    role: 'user'
                }
                console.log(User);
                // axiosPublic.patch(`/users/${result.user.email}`, User)
                //     .then(res => {
                //         console.log(res.data);
                //         if (res.data.insertedId || res.data.modifiedCount > 0) {
                //             toast.success(`Authenticating as ${result.user.email}`)
                //             localStorage.setItem('ToastShowed', JSON.stringify('false'))
                //             location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                //         }
                //     })
                form.reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // toast.error(`${errorMessage}`)
            });
    }
    const handleGoogle = () => {
        GoogleSignUp()
            .then(result => {
                console.log(result.user)
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
                // location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <div className="hero min-h-screen">
                <div className="hero-content flex  justify-evenly flex-row  w-full">


                    {/* Left Side */}

                    <img data-aos="flip-down" src='LoginPage.png' className="lg:max-w-sm w-[350px] hidden md:flex" />



                    {/* Right side */}
                    <div className='bg-[#07123a]  rounded-2xl'>
                        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-10 ">
                            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Login</h2>

                                {/* link to register page */}
                                <p className="mt-2 text-sm text-white">
                                    Don&apos;t have an account?{' '}
                                    <Link
                                        to='/register'
                                        title=""
                                        className="font-semibold text-white transition-all duration-200 hover:underline"
                                    >
                                        Create a free account
                                    </Link>
                                </p>


                                {/* Form */}
                                <form onSubmit={e => { e.preventDefault(), handleSignIn(e) }}
                                    action="#" method="POST" className="mt-8">
                                    <div className="space-y-5">

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-100">
                                                Email:
                                                <MdOutlineMailOutline size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                            </label>
                                            <div className="mt-2 border rounded-md">
                                                <input name='email'
                                                    className="ml-8  flex h-10 lg:w-[350px]  text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
                                                    type="email"
                                                    placeholder='Email'
                                                >

                                                </input>
                                            </div>
                                        </div>
                                        <div>

                                            {/* Password */}
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="" className="text-base font-medium text-gray-100">
                                                    Password:
                                                    <RiLockPasswordLine size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                                </label>

                                                {/* Forgot Password */}
                                                <a
                                                    href="#"
                                                    title=""
                                                    className="text-sm font-semibold text-gray-300 hover:underline"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>



                                            <div className="mt-2 border rounded-md">
                                                <input name='password'
                                                    className="ml-8 flex h-10 lg:w-[350px]  text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
                                                    type="password"
                                                    placeholder='Password'
                                                >

                                                </input>
                                            </div>
                                        </div>
                                        {/* button */}
                                        <div>
                                            <button
                                                type="submit"
                                                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#399b53]"
                                            >
                                                Login <ArrowRight className="ml-2" size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </form>


                                {/* Google & Facebook Button */}
                                <div className="mt-3 space-y-3">

                                    {/* Google */}
                                    <button onClick={handleGoogle}
                                        type="button"
                                        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 hover:text-black focus:bg-gray-100 focus:text-white focus:outline-none"
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
                                        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 hover:text-black focus:bg-gray-100 focus:text-white focus:outline-none"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
