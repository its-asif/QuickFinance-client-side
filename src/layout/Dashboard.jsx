import { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaHome, FaUsers } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { TfiSupport } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import useAuth from "../Hooks/useAuth";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import useAdminStatus from "../Hooks/useAdminStatus";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { AuthUser, LogOut } = useAuth();

    const Location = useLocation()
    // console.log(Location);
    const isAdmin = useAdminStatus();


    return (
        <div className="flex ">

            {/* start sidebar for medium and large devices  */}
            <div
                className={`bg-black tracking-wider min-h-screen hidden md:block fixed z-[10]   md:p-4 lg:p-5 pt-8   ${open ? " md:w-52 lg:w-72    duration-1500  " : "w-20 duration-2000 "}   relative  transform translate-x-0 md:translate-x-0 duration-1500 `}>

                <BsFillArrowLeftSquareFill className={` text-black text-4xl  bg-white absolute -right-7 border border-white rounded-lg top-9  cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />



                <div className="inline-flex  ">
                    <img src="/favicon.png" className={` h-8 w-full cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`} />
                    <h1 className={`text-white origin-left md:text-md  lg:text-2xl font-medium mr-2 ml-2 duration-300 ${!open && "scale-0"}`}>
                        Quick<span className="text-[#399b53]">Finance</span>
                    </h1>

                </div>

                <div className={`inline-flex mt-3    ${open && " md:p-8 lg:p-12 "} duration-700 `} >

                    <img src={AuthUser?.photoURL} className={`rounded-lg w-full  flex justify-center items-center border border-white 
                 ${!open && "w-[80px] rounded-sm "} duration-700 `} alt="" />



                </div>
                <div className={`font-sans font-bold text-center lg:pr-6 md:pr-4  lg:-mt-10 md:mt-2  block text-white ${!open && "hidden"}  duration-700 `} >
                    <h1 className="md:text-sm  lg:text-2xl text-center ml-0">
                        {AuthUser?.displayName}
                    </h1>

                </div>
                <div className="text-center flex justify-center items-center duration-500 mt-8">
                    <ul

                        className={`menu p-2 shadow space-y-2 rounded-box text-center duration-500 font-bold text-sm md:text-md`}
                        style={{ textAlign: "center" }}
                    >

                        {/* My Account */}
                        <li className="mt-2  duration-1000 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/myAccount"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <MdDashboard className={`${open && "text-2xl"} ${!open && "text-3xl"} `} />
                                <span className={`${!open && "hidden"}`}>My Account</span>
                            </NavLink>
                        </li>

                        {/* General Users Routes*/}
                        {!isAdmin && <>

                            {/* My assets */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/myAsset"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <TfiSupport className={`${open && "text-2xl"} ${!open && "text-3xl"} `} />   <span className={`${!open && "hidden"}`}>My Asset</span>
                                </NavLink>
                            </li>


                            {/* Finance Management */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/financialManagement"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <GiTakeMyMoney className={`${open && "text-2xl"} ${!open && "text-3xl"} `} />   <span className={`${!open && "hidden"}`}>Personal Finance</span>
                                </NavLink>
                            </li>


                            {/* Budget Planning */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/budgetPlanning"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300 text-white" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <GiMoneyStack className={`${open && "text-2xl"} ${!open && "text-3xl"} `} />   <span className={`${!open && "hidden"}`}>Budget Planing</span>
                                </NavLink>
                            </li>

                            {/* Goal Progress */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/goalProgress"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <GoGoal className={`${open && "text-2xl"} ${!open && "text-3xl"} `} />   <span className={`${!open && "hidden"}`}>Goal Progress</span>
                                </NavLink>
                            </li>


                            {/* Debt Management */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/manageDebt"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <SiGoogletagmanager className={`${open && "text-2xl"} ${!open && "text-3xl"} `} />   <span className={`${!open && "hidden"}`}>Manage Debt</span>
                                </NavLink>
                            </li>

                            {/* My Payments */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/payments"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <MdPayment className={`${open && "text-2xl"} ${!open && "text-3xl"} `} />   <span className={`${!open && "hidden"}`}>My Payments</span>
                                </NavLink>
                            </li>
                        </>}




                        {/* Admin Routes */}
                        {isAdmin && <>

                            {/* All Users */}
                            <li className="mt-2  duration-500 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/allUsers"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-500 " : " pendingDashboard hover:scale-110 opacity-95 duration-500 "
                                    }
                                >
                                    <FaUsers className={`${open && "text-2xl"} ${!open && "text-3xl"} `} />   <span className={`${!open && "hidden"}`}>All Users</span>
                                </NavLink>
                            </li>

                        </>}

                    </ul>




                </div>



                <div className=" duration-500">

                    <hr
                        className="my-4 h-[1px] border-t-0 duration-500  bg-white opacity-100 " />

                    <div className={`flex ${open ? "flex-row" : "flex-col"} items-center duration-500  justify-center gap-2`}>
                        <Link to='/'>
                            <button className="bg-white btn btn-sm" >
                                < FaHome className={`${open && "text-4xl"} font-extrabold  primaryColor text-xl duration-500  `} />
                            </button>
                        </Link>
                        <button className="bg-white flex items-center gap-1 btn btn-sm" onClick={LogOut}>
                            < CiLogout className={`${open && "text-4xl"} font-extrabold  primaryColor text-xl duration-500  `} />
                            <span className={`${!open && "hidden"} font-bold primaryColor`}>log Out</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* end sidebar for medium and large devices  */}


            {/* start sidebar for mobile  devices  */}


            <div
                className={`bg-black tracking-wider ease-in-out md:hidden block min-h-screen fixed  z-[10]
                ${open ? "w-20   p-5 pt-8   duration-1500  " : "w-0 duration-2000 "}  
                    transform translate-x-0 md:translate-x-0 duration-1500 `}>

                <BsFillArrowLeftSquareFill className={` text-black text-4xl font-bold  ${open && "absolute"}  bg-white  -right-6 border border-white rounded-lg top-16  cursor-pointer ${!open && "rotate-180 fixed z-[10]"}`} onClick={() => setOpen(!open)} />



                <div className="inline-flex ">
                    <img src="/favicon.png" className={` h-8 w-full cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`} />
                   

                </div>

                <div className={`inline-flex mt-3    ${open && "   duration-500"} duration-700 `} >

                    <img src={AuthUser?.photoURL} className={`rounded-lg w-full  flex justify-center items-center border border-white 
                 ${!open && "hidden "} duration-700 `} alt="" />



                </div>
             
                <div className="text-center flex justify-center items-center duration-500 mt-8">
                    <ul

                        className={`menu p-2 shadow space-y-2 rounded-box text-center duration-500 font-bold text-sm md:text-md ${!open && "hidden "}`}
                        style={{ textAlign: "center" }}
                    >

                        {/* My Account */}
                        <li className="mt-2  duration-1000 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/myAccount"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <MdDashboard className={`${open && "text-2xl"} text-md`} />
                                
                            </NavLink>
                        </li>

                        {/* General Users Routes*/}
                        {!isAdmin && <>

                            {/* My assets */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/myAsset"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <TfiSupport className={`${open && "text-2xl"} text-md`} />  
                                </NavLink>
                            </li>


                            {/* Finance Management */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/financialManagement"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <GiTakeMyMoney className={`${open && "text-2xl"} text-md`} />   
                                </NavLink>
                            </li>


                            {/* Budget Planning */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/budgetPlanning"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300 text-white" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <GiMoneyStack className={`${open && "text-2xl"} text-md`} />   
                                </NavLink>
                            </li>

                            {/* Goal Progress */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/goalProgress"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <GoGoal className={`${open && "text-2xl"} text-md`} />   
                                </NavLink>
                            </li>


                            {/* Debt Management */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/manageDebt"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <SiGoogletagmanager className={`${open && "text-2xl"} text-md`} />   
                                </NavLink>
                            </li>

                            {/* My Payments */}
                            <li className="mt-2  duration-1000 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/payments"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                    }
                                >
                                    <MdPayment className={`${open && "text-2xl"} text-md`} />  
                                </NavLink>
                            </li>
                        </>}




                        {/* Admin Routes */}
                        {isAdmin && <>

                            {/* All Users */}
                            <li className="mt-2  duration-500 lg:mt-0">
                                {" "}
                                <NavLink
                                    to="/dashboard/allUsers"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-500 " : " pendingDashboard hover:scale-110 opacity-95 duration-500 "
                                    }
                                >
                                    <FaUsers className={`${open && "text-2xl"} text-md`} />  
                                </NavLink>
                            </li>

                        </>}

                    </ul>




                </div>



                <div className=" duration-500">

                    <hr
                        className="my-4 h-[1px] border-t-0 duration-500  bg-white opacity-100 " />

                    <div className={`flex ${open ? "flex-col" : "flex-col"} ${!open && "hidden "} items-center duration-500  justify-center gap-2`}>
                        <Link to='/'>
                            <button className="bg-white btn btn-sm" >
                                < FaHome className={`${open && "text-4xl"} font-extrabold  primaryColor text-xl duration-500  `} />
                            </button>
                        </Link>
                        <button className="bg-white flex items-center gap-1 btn btn-sm" onClick={LogOut}>
                            < CiLogout className={`${open && "text-4xl"} font-extrabold  primaryColor text-xl duration-500  `} />
                           
                        </button>
                    </div>
                </div>
            </div>
            {/* end sidebar for mobile  devices  */}






            <div className=" w-full h-full absolute md:sticky mt-4  px-4  md:px-0 ">
                <Outlet  />
            </div>

        </div>
    );
};

export default Dashboard;