import { Link, NavLink } from "react-router-dom";
import logo from '/logoTransparent.png'
import lgLogo from '/lgLogo.png'
import QuickFinanceLogo from '/QuickFinance.png'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/Contextapi";
import { IoLogOutOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
const Navbar = () => {

    //TODO change after complete authProvider
    const { AuthUser, LogOut } = useContext(AuthContext)
    console.log(AuthUser);
    const navLinks = (
        <>
            <li className="mt-2 lg:mt-0">
                {" "}
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeNav hover:scale-110 opacity-100 duration-300" : " pendingNav hover:scale-110 opacity-95 duration-300"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="mt-2 lg:mt-0">
                {" "}
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeNav hover:scale-110 opacity-100 duration-300" : " pendingNav hover:scale-110 opacity-95 duration-300"
                    }
                >
                    About Us
                </NavLink>
            </li>

            <li className="my-2 lg:my-0">
                {" "}
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeNav hover:scale-110 opacity-100 duration-300" : " pendingNav hover:scale-110 opacity-95 duration-300"
                    }
                >
                    Contact Us
                </NavLink>
            </li>
            <li className="my-2 lg:my-0">
                {" "}
                <NavLink
                    to="/zakatAndtax"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeNav hover:scale-110  opacity-100 duration-300" : " pendingNav hover:scale-110 opacity-95 duration-300"
                    }
                >
                    Calculator
                </NavLink>
            </li>
        </>
    );
    return (


        <div className="navbar fixed z-10  h-[50px] lg:h-[70px] navBg">
            {/* logo  */}
            <div className="navbar-start lg:ml-8">

                {/* logo */}
                <div className="hidden lg:flex justify-between  -mt-[50px] " >
                    <Link to='/'>

                        <div className="flex justify-center items-center gap-2 ">
                            <img
                                className="w-[150px]  lg:pt-3 object-cover  flex items-center justify-center"
                                src={lgLogo}
                                alt=""
                            />
                            <img className="mt-[55px] -ml-[45px] lg:w-1/2" src={QuickFinanceLogo} alt="" />
                        </div>

                    </Link>

                </div>
                {/* logo */}
                <div >
                    <Link to='/'>
                        <img

                            className=" w-[120px] lg:hidden   mt-5 lg:pt-3 object-cover  flex items-center justify-center"
                            src={logo}
                            alt=""
                        />
                    </Link>
                </div>

            </div>
            {/* navlink  */}
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-md menu-horizontal px-1 font-bold gap-8 text-lg lg:ml-10    text-white">
                    {navLinks}
                </ul>
            </div>
            {/* avatar part  */}

            <div className="navbar-end md:mr-8">
                <div className="flex px-2">
                    <div>
                        {
                            AuthUser?.email ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={AuthUser?.photoURL ? AuthUser.photoURL : ''} alt={AuthUser?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="btn btn-sm  btn-ghost">{AuthUser?.displayName}</button>

                                    </li>
                                    <li>

                                        <button className="btn my-3 ">
                                            <Link to='/dashboard'>
                                                Dashboard
                                            </Link>
                                        </button>


                                    </li>
                                    <li>
                                        <button className="sharedBtn"
                                            onClick={() => { LogOut() }}
                                        >
                                            Logout <IoLogOutOutline size={15} className="pl-2" />
                                        </button>

                                    </li>
                                </ul>
                            </div>
                                :
                                <Link to='/login'>
                                    <button className="authBtn">
                                        <span className="mr-1">Login</span> <RiLoginBoxLine  size={15}  />
                                    </button>
                                </Link>
                        }
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-sm ml-2 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[35px]  w-[28px]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content my-5 z-[1] dark:bg-[#E0E0E0] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
                            style={{ textAlign: "right" }}
                        >
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Navbar;
