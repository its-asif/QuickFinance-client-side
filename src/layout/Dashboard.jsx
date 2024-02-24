import { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaHome, FaUsers } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { TfiSupport } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlinePublish, MdPayment, MdPublish } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { SiGoogletagmanager } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import useAuth from "../Hooks/useAuth";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import useAdminStatus from "../Hooks/useAdminStatus";
import { BiBookContent } from "react-icons/bi";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { AuthUser, LogOut } = useAuth();
    
    const Location = useLocation()
    // console.log(Location);
    const isAdmin = useAdminStatus();


    return (
        <div className="flex ">
            <div
                className={`bg-black tracking-wider fixed z-[10] h-screen  p-5 pt-8  ${open ? "w-72  " : "w-20 "}     transform translate-x-0 md:translate-x-0 duration-300 relative`}>

                <BsFillArrowLeftSquareFill className={` text-black text-4xl  bg-white absolute -right-7 border border-white rounded-lg top-9  cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />



                <div className="inline-flex ">
                    <img src="/favicon.png" className={` h-8 w-full cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`} />
                    <h1 className={`text-white origin-left lg:text-2xl font-medium mr-2 ml-2 duration-300 ${!open && "scale-0"}`}>
                        Quick<span className="text-[#399b53]">Finance</span>
                    </h1>

                </div>

                <div className={`inline-flex mt-3    ${open && " p-12 rotate-[360ndeg]"} duration-500 `} >

                    <img src={AuthUser?.photoURL} className={`rounded-lg w-full  flex justify-center items-center border border-white 
                 ${!open && "w-[80px] rounded-sm "} duration-500`} alt="" />



                </div>
                <div className={`font-sans font-bold  -mt-10 text-center block text-white ${!open && "hidden"} duration-500`} >
                    <h1>
                        {AuthUser?.displayName}
                    </h1>

                </div>
                <div className="text-center flex justify-center items-center mt-8">
                    <ul

                        className={`menu p-2 shadow space-y-2 rounded-box text-center font-bold text-sm md:text-md`}
                        style={{ textAlign: "center" }}
                    >

                        {/* My Account */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/myAccount"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <MdDashboard className={`${open && "text-2xl"} text-md`} />
                                <span className={`${!open && "hidden"}`}>My Account</span>
                            </NavLink>
                        </li>

                        {/* General Users Routes*/}
                        {!isAdmin && <>

                        {/* My assets */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/myAsset"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <TfiSupport className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>My Asset</span>
                            </NavLink>
                        </li>


                        {/* Finance Management */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/financialManagement"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <GiTakeMyMoney className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>Personal Finance</span>
                            </NavLink>
                        </li>


                        {/* Budget Planning */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/budgetPlanning"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300 text-white" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <GiMoneyStack className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>Budget Planing</span>
                            </NavLink>
                        </li>

                        {/* Goal Progress */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/goalProgress"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <GoGoal className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>Goal Progress</span>
                            </NavLink>
                        </li>


                        {/* Debt Management */}
                        {/* <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/manageDebt"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <SiGoogletagmanager className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>Manage Debt</span>
                            </NavLink>
                        </li> */}

                        {/* MY Blog Section */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/myBlogs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <BiBookContent className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>My Blogs</span>
                            </NavLink>
                        </li>

                        {/* Create Blog Section */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/publishBlogs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <MdOutlinePublish className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>Publish Blog</span>
                            </NavLink>
                        </li>

                        {/* My Payments */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/payments"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <MdPayment className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>My Payments</span>
                            </NavLink>
                        </li>
                        </>}




                        {/* Admin Routes */}
                        {isAdmin && <>

                        {/* All Users */}
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/allUsers"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "activeDashboard hover:scale-110 opacity-100 duration-300" : " pendingDashboard hover:scale-110 opacity-95 duration-300"
                                }
                            >
                                <FaUsers className={`${open && "text-2xl"} text-md`} />   <span className={`${!open && "hidden"}`}>All Users</span>
                            </NavLink>
                        </li>

                        </>}

                    </ul>




                </div>



                <div className="">

                    <hr
                        className="my-4 h-[1px] border-t-0 bg-white opacity-100 " />

                    <div className={`flex ${open ? "flex-row" : "flex-col"} items-center justify-center gap-2`}>
                        <Link to='/'>
                            <button className="bg-white btn btn-sm" >
                                < FaHome className={`${open && "text-4xl"} font-extrabold  primaryColor text-xl duration-300 `} />
                            </button>
                        </Link>
                        <button className="bg-white flex items-center gap-1 btn btn-sm" onClick={LogOut}>
                            < CiLogout className={`${open && "text-4xl"} font-extrabold  primaryColor text-xl duration-300 `} />
                            <span className={`${!open && "hidden"} font-bold primaryColor`}>log Out</span>
                        </button>
                    </div>
                </div>
            </div>


            <div className="w-full h-screen overflow-y-scroll ">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;