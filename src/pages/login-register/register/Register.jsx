/* eslint-disable no-unused-vars */

import { ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import axios from 'axios';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from '../../shared/Social_Login/SocialLogin';
const Register = () => {
    const { GoogleSignUp, createUser, UpdateUser } = useAuth()
    // console.log(loading);
    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    //Handle Email password Sign In
    const handleSignUp = async (e) => {
        const form = e.target
        const email = e.target.email.value;
        const password = e.target.password.value
        const name = e.target.name.value
        // const image = e.target.image.value;
        const image = e.target.image.files[0];
        try {
            const formData = new FormData();
            formData.append('image', image);
            // image sending to imagbb
            const res = await axios.post("https://api.imgbb.com/1/upload?key=084c828cb07b191daf9262ae088bdd35", formData)
            // if status is ok
            if (res.status === 200) {
                const result = res.data
                const HostedImage = result.data.display_url
                console.log(email, password, name,);
                createUser(email, password)
                    .then(result => {
                        console.log(result.user);
                        UpdateUser(name, HostedImage)
                            .then(() => {
                                console.log(result.user);
                                const User = {
                                    name: result.user.displayName,
                                    email: result.user.email,
                                    emailVerified: result.user.emailVerified,
                                    creationTime: result.user.metadata.creationTime,
                                    lastSignInTime: result.user.metadata.lastSignInTime,
                                    profileImage: result.user.photoURL,
                                    role: 'user'
                                }
                                console.log(User)
                                toast.success(`Authenticating as ${result.user.email}`)
                                form.reset()
                                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                                // axiosPublic.post('/users', User)
                                //     .then(res => {
                                //         if (res.data.insertedId) {
                                //             // localStorage.setItem('ToastShowed', JSON.stringify('false'))
                                //             // toast.success(`Authenticating as ${result.user.email}`)
                                //             // location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                                //         }
                                //     })

                            })
                            .catch((error) => {
                                const errorMessage = error.message;
                                console.log(errorMessage);
                                toast.error(`${errorMessage}`)
                            });

                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        console.log(errorMessage);
                        toast.error(`${errorMessage}`)
                    });
            }

        }
        catch (error) {
            console.error('Error during signup:', error.message);
            console.log(error.code);
        }

    }
    return (
        <div data-aos="fade-up" data-aos-duration="3000"
            data-aos-anchor-placement="top-center">
            <div className="hero min-h-screen">
                <div className="hero-content flex justify-evenly flex-row  w-full">


                    {/* Left Side */}

                    <img data-aos="flip-up" data-aos-duration="2000" src='RegisterPage.png' className="lg:max-w-sm w-[350px] hidden md:flex" />



                    {/* Right side */}
                    <div className='bg-white  rounded-2xl'>
                        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-10 ">
                            <div className="">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>

                                {/* Form */}
                                <form onSubmit={e => { e.preventDefault(), handleSignUp(e) }}
                                    action="#" method="POST" className="mt-8">
                                    <div className="space-y-5">


                                        <div className='flex flex-col md:flex-row gap-2'>
                                            {/* Name */}
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-black">
                                                    Name:
                                                    <MdPerson size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                                </label>
                                                <div className="mt-2 border border-black rounded-md">
                                                    <input name='name'
                                                        className="ml-8 flex h-10 lg:w-[200px] w-[150px]  text-black border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
                                                        type="text"
                                                        placeholder='Name'
                                                    >

                                                    </input>
                                                </div>
                                            </div>

                                            {/* Upload Image */}
                                            <div className="grid group gap-1.5">
                                                <label
                                                    className="text-base font-medium text-black"
                                                >
                                                    Upload Image
                                                </label
                                                >
                                                <input name='image'
                                                    className="flex group-hover:cursor-pointer file:group-hover:cursor-pointer h-10 lg:w-[233px] rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:h-10 file:border-0 file:bg-gradient-to-t file:from-green-500 file:to-teal-500 file:text-black file:text-sm file:font-medium"
                                                    type="file"
                                                    id="picture"
                                                />
                                            </div>

                                        </div>

                                        <div className='flex flex-col lg:flex-row gap-2'>
                                            {/* Email */}
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-black">
                                                    Email:
                                                    <MdOutlineMailOutline size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                                </label>
                                                <div className="mt-2 border border-black rounded-md">
                                                    <input name='email'
                                                        className="ml-8 flex h-10 w-[200px]  text-black border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
                                                        type="email"
                                                        placeholder='Email'
                                                    >

                                                    </input>
                                                </div>
                                            </div>
                                            {/* Password */}
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="" className="text-base font-medium text-black">
                                                        Password:
                                                        <RiLockPasswordLine size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                                    </label>
                                                </div>
                                                <div className="mt-2 border border-black rounded-md">
                                                    <input name='password'
                                                        className="ml-8 flex h-10 lg:w-[200px]  text-black border-black bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
                                                        type="password"
                                                        placeholder='Password'
                                                    >

                                                    </input>
                                                </div>
                                            </div>

                                        </div>





                                        {/* Register Button */}
                                        <div>
                                            <button
                                                type="submit"
                                                className="fullWidthSharedBtn "
                                            >
                                                Register <ArrowRight className="ml-2" size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </form>


                                {/* Google & Facebook Button */}
                                <SocialLogin />

                                {/* link to Login page */}
                                <p className="mt-6 text-center text-sm text-black">
                                    Already have an account? {" "}
                                    <Link
                                        to='/login'
                                        title=""
                                        className="font-semibold text-black transition-all duration-200 hover:underline"
                                    >
                                        Sign In
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

export default Register;