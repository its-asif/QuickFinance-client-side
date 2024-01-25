import { Link, NavLink } from "react-router-dom";
import logo from '/logoTransparent.png'
import lgLogo from '/lgLogo.png'
import QuickFinanceLogo from '/QuickFinance.png'
const Navbar = () => {

    //TODO change after complete authProvider
    const user = {};
    const logOut = [];

    const navLinks = (
        <>
            <li className="mt-2 lg:mt-0">
                {" "}
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-black hover:bg-[#09CC7F] text-white " : " bg-[#399B53] hover:bg-[#09CC7F] text-white "
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
                        isPending ? "pending" : isActive ? "bg-black text-white hover:bg-[#09CC7F] " : "bg-[#399B53] hover:bg-[#09CC7F]  text-white "
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li className="mt-2 lg:mt-0">
                {" "}
                <NavLink
                    to="/service"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-black   text-white hover:bg-[#09CC7F] " : "bg-[#399B53] hover:bg-[#09CC7F] text-white "
                    }
                >
                    Service
                </NavLink>
            </li>
            <li className="my-2 lg:my-0">
                {" "}
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-black  text-white hover:bg-[#09CC7F] " : "bg-[#399B53] hover:bg-[#09CC7F]  text-white "
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
                        isPending ? "pending" : isActive ? "bg-black  text-white hover:bg-[#09CC7F] " : "bg-[#399B53] hover:bg-[#09CC7F]  text-white "
                    }
                >
                    Calculator
                </NavLink>
            </li>
            <li className="my-2 lg:my-0">
                {" "}
                <NavLink
                    to="/financialManagement"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-black  text-white hover:bg-[#09CC7F] " : "bg-[#399B53] hover:bg-[#09CC7F]  text-white "
                    }
                >
                    Financial Management
                </NavLink>
            </li>
        </>
    );
    return (

      
         <div className="navbar fixed z-10  h-[50px] lg:h-[70px] bg-[#FBF9F9]  ">
            <div className="navbar-start lg:ml-8">
                

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
                            user?.email ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL ? user.photoURL : ''} alt={user.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                    </li>
                                    <li>

                                        <button className="btn my-3 ">
                                            <Link to='/dashboard'>
                                                Dashboard
                                            </Link>
                                        </button>


                                    </li>
                                    <li>
                                        <button className="btn btn-sm  btn-ghost bg-red-500 text-white font-bold"
                                            onClick={logOut}
                                        >Logout</button>

                                    </li>
                                </ul>
                            </div>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-sm  btn-ghost hover:bg-[#FF0000] lg:px-8 bg-[#09CC7F] text-white font-bold">Login</button>
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
