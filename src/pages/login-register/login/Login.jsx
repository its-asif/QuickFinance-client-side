/* eslint-disable no-unused-vars */
import { ArrowRight } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../../shared/Social_Login/SocialLogin';


const Login = () => {
    const { SignInUser, GoogleSignUp } = useAuth()
    const axiosPublic = useAxiosPublic()
    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()
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
                toast.success(`Authenticating as ${result.user.email}`)
                form.reset()
                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error(`${errorMessage}`)
            });
    }

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <div className="hero min-h-screen ">
                <div className="hero-content flex  justify-evenly flex-row  w-full">


                    {/* Left Side */}

                    <img data-aos="flip-down" src='LoginPage.png' className="lg:max-w-sm w-[350px] hidden md:flex" />



                    {/* Right side  bg-[#07123a]*/}
                    <div className=' bg-white shadow-xl rounded-2xl '>
                        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-10 ">
                            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Login</h2>

                                {/* Form */}
                                <form onSubmit={e => { e.preventDefault(), handleSignIn(e) }}
                                    action="#" method="POST" className="mt-4">
                                    <div className="space-y-5">

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-black">
                                                Email:
                                                <MdOutlineMailOutline size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                            </label>
                                            <div className="mt-2 border border-black rounded-md">
                                                <input name='email'
                                                    className="ml-8  flex h-10 lg:w-[350px]  text-black border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
                                                    type="email"
                                                    placeholder='Email'
                                                >

                                                </input>
                                            </div>
                                        </div>
                                        <div>

                                            {/* Password */}
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="" className="text-base font-medium text-black">
                                                    Password:
                                                    <RiLockPasswordLine size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                                </label>

                                                {/* Forgot Password */}
                                                <a
                                                    href="#"
                                                    title=""
                                                    className="text-sm font-semibold text-blue-600 hover:underline"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>



                                            <div className="mt-2 border border-black rounded-md">
                                                <input name='password'
                                                    className="ml-8 flex h-10 lg:w-[350px]  text-black border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
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
                                                className="fullWidthSharedBtn "
                                            >
                                                Login <ArrowRight className="ml-2" size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* Google & Facebook Button */}
                                <SocialLogin />

                                {/* link to register page */}
                                <p className="mt-6 text-center text-sm text-black">
                                    Don&apos;t have an account?{' '}
                                    <Link
                                        to='/register'
                                        title=""
                                        className="font-semibold text-black transition-all duration-200 hover:underline"
                                    >
                                        Create a free account
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;
