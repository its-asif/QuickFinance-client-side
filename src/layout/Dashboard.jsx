
import { useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
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
import { Link, NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { AuthUser, LogOut } = useAuth();
    return (
        <div className="flex">
            <div
                className={`bg-black tracking-wider fixed z-[10] min-h-screen  p-5 pt-8  ${open ? "w-72 " : "w-20 "}     transform translate-x-0 md:translate-x-0 duration-300 relative`}>

                <BsFillArrowLeftSquareFill className={` text-black text-4xl bg-white absolute -right-7 border border-white rounded-lg top-9  cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />



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


                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#399b53] hover:bg-gray-900  hover:text-[#399b53] text-white " : " bg-gray-900 hover:text-[#399b53] hover:bg-gray-900  text-white "
                                }
                            >
                                <MdDashboard className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>My Account</span>
                            </NavLink>
                        </li>

                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/myAsset"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#399b53] hover:bg-gray-900  hover:text-[#399b53] text-white " : " bg-gray-900 hover:text-[#399b53] hover:bg-gray-900  text-white "
                                }
                            >
                                <TfiSupport className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>My Asset</span>
                            </NavLink>
                        </li>
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/financialManagement"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#399b53] hover:bg-gray-900  hover:text-[#399b53] text-white " : " bg-gray-900 hover:text-[#399b53] hover:bg-gray-900  text-white "
                                }
                            >
                                <GiTakeMyMoney className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>Personal Finance</span>
                            </NavLink>
                        </li>



                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/budgetPlanning"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#399b53] hover:bg-gray-900  hover:text-[#399b53] text-white " : " bg-gray-900 hover:text-[#399b53] hover:bg-gray-900  text-white "
                                }
                            >
                                <GiMoneyStack className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>Budget Planing</span>
                            </NavLink>
                        </li>

                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/goalProgress"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#399b53] hover:bg-gray-900  hover:text-[#399b53] text-white " : " bg-gray-900 hover:text-[#399b53] hover:bg-gray-900  text-white "
                                }
                            >
                                <GoGoal className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>Goal Progress</span>
                            </NavLink>
                        </li>
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/manageDebt"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#399b53] hover:bg-gray-900  hover:text-[#399b53] text-white " : " bg-gray-900 hover:text-[#399b53] hover:bg-gray-900  text-white "
                                }
                            >
                                <SiGoogletagmanager className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>Manage Debt</span>
                            </NavLink>
                        </li>

                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/payments"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#399b53] hover:bg-gray-900  hover:text-[#399b53] text-white " : " bg-gray-900 hover:text-[#399b53] hover:bg-gray-900  text-white "
                                }
                            >
                                <MdPayment className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>My Payments</span>
                            </NavLink>
                        </li>


                    </ul>




                </div>



                <div className="text-center ">

                    <hr
                        className="my-4 h-[1px] border-t-0 bg-white opacity-100 " />



                    {/* <li className="mt-2 lg:mt-0">
                        {" "}
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-[#22805ae6] hover:bg-gray-900  hover:text-[#09CC7F] text-white " : " bg-gray-900 hover:text-[#09CC7F] hover:bg-gray-900  text-white "
                            }
                        >
                            <FaHome className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>Home</span>
                        </NavLink>
                    </li> */}


                   <div className="mb-3">
                   <Link to='/'>
                        <button className="btn btn-sm   hover:bg-gray-300  " >
                            < FaHome className={`${open && "text-4xl"} font-extrabold  text-[#399b53] text-xl duration-300 `} />   <span className={`${!open && "hidden"} px-[0.5px] font-bold`}> Home </span>
                        </button>
                    </Link>
                   </div>
                    <button className="btn btn-sm hover:bg-gray-300  " onClick={LogOut}>
                        < CiLogout className={`${open && "text-4xl"} font-extrabold  text-[#399b53] text-xl duration-300 `} />   <span className={`${!open && "hidden"} font-bold`}>log Out</span>
                    </button>


                </div>
            </div>


            <div className="overflow-hidden w-full">
                <Outlet/>

            </div>

        </div>
    );
};

export default Dashboard;