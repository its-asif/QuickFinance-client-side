
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/Contextapi';
const Register = () => {
    const { loading,createUser, UpdateUser } = useContext(AuthContext)
    console.log(loading);
    //Handle Email password Sign In
    const handleSignUp = async (e) => {
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
                console.log(email, password, name, result.data.display_url);
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
                    <div className='bg-[#07123a]  rounded-2xl'>
                        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-10 ">
                            <div className="">
                                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign up</h2>

                                {/* link to Login page */}
                                <p className="mt-2 text-sm text-white">
                                    Already have an account? {" "}
                                    <Link
                                        to='/login'
                                        title=""
                                        className="font-semibold text-white transition-all duration-200 hover:underline"
                                    >
                                        Sign In
                                    </Link>
                                </p>


                                {/* Form */}
                                <form onSubmit={e => { e.preventDefault(), handleSignUp(e) }}
                                    action="#" method="POST" className="mt-8">
                                    <div className="space-y-5">


                                        <div className='flex flex-col md:flex-row gap-2'>
                                            {/* Name */}
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-100">
                                                    Name:
                                                    <MdPerson size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                                </label>
                                                <div className="mt-2 border rounded-md">
                                                    <input name='name'
                                                        className="ml-8 flex h-10 lg:w-[200px] w-[150px]  text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
                                                        type="text"
                                                        placeholder='Name'
                                                    >

                                                    </input>
                                                </div>
                                            </div>

                                            {/* Upload Image */}
                                            <div className="grid  gap-1.5">
                                                <label
                                                    className="text-base font-medium text-gray-100"
                                                >
                                                    Upload Image
                                                </label
                                                >
                                                <input name='image'
                                                    className="flex h-10 lg:w-[233px] rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:h-10 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
                                                    type="file"
                                                    id="picture"
                                                />
                                            </div>

                                        </div>

                                        <div className='flex flex-col lg:flex-row gap-2'>
                                            {/* Email */}
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray-100">
                                                    Email:
                                                    <MdOutlineMailOutline  size={30} className='absolute translate-x-1 translate-y-[13px]' />
                                                </label>
                                                <div className="mt-2 border rounded-md">
                                                    <input name='email'
                                                        className="ml-8 flex h-10 w-[200px]  text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
                                                        type="email"
                                                        placeholder='Email'
                                                    >

                                                    </input>
                                                </div>
                                            </div>
                                            {/* Password */}
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="" className="text-base font-medium text-gray-100">
                                                        Password:
                                                        <RiLockPasswordLine  size={30} className='absolute translate-x-1 translate-y-[13px]' />
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
                                                        className="ml-8 flex h-10 lg:w-[200px]  text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:border-none disabled:cursor-not-allowed disabled:opacity-50 "
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
                                                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#399b53]"
                                            >
                                                Register <ArrowRight className="ml-2" size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </form>


                                {/* Google & Facebook Button */}
                                <div className="mt-3 space-y-3">

                                    {/* Google */}
                                    <button
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

export default Register;