
import { useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { TfiSupport } from "react-icons/tfi";
import { MdPayment } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import useAuth from "../Hooks/useAuth";
import { MdDashboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { AuthUser, LogOut } = useAuth();
    return (
        <div className="flex">
            <div
                className={`bg-black tracking-wider fixed z-[10] max-h-full p-5 pt-8  ${open ? "w-72 " : "w-20 "}     transform translate-x-0 md:translate-x-0 duration-300 relative`}>

                <BsFillArrowLeftSquareFill className={` text-black text-4xl bg-white absolute -right-7 border border-white rounded-lg top-9  cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />



                <div className="inline-flex ">
                    <img src="/favicon.png" className={` h-8 w-full cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`} />
                    <h1 className={`text-white origin-left lg:text-2xl font-medium mr-2 ml-2 duration-300 ${!open && "scale-0"}`}>
                        Quick<span className="text-[#399B53]">Finance</span>
                    </h1>

                </div>

                <div className={`inline-flex mt-3    ${open && " p-12 rotate-[720deg]"} duration-500 `} >

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
                                    isPending ? "pending" : isActive ? "bg-[#22805ae6] hover:bg-gray-900  hover:text-[#09CC7F] text-white " : " bg-gray-900 hover:text-[#09CC7F] hover:bg-gray-900  text-white "
                                }
                            >
                                <MdDashboard className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>My Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/payments"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#22805ae6] hover:bg-gray-900  hover:text-[#09CC7F] text-white " : " bg-gray-900 hover:text-[#09CC7F] hover:bg-gray-900  text-white "
                                }
                            >
                                <MdPayment className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>My Payments</span>
                            </NavLink>
                        </li>
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#22805ae6] hover:bg-gray-900  hover:text-[#09CC7F] text-white " : " bg-gray-900 hover:text-[#09CC7F] hover:bg-gray-900  text-white "
                                }
                            >
                                <PiUserCircleDuotone className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>My Profile</span>
                            </NavLink>
                        </li>
                        <li className="mt-2 lg:mt-0">
                            {" "}
                            <NavLink
                                to="/dashboard/support"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-[#22805ae6] hover:bg-gray-900  hover:text-[#09CC7F] text-white " : " bg-gray-900 hover:text-[#09CC7F] hover:bg-gray-900  text-white "
                                }
                            >
                                <TfiSupport className={`${open && "text-2xl"} text-md duration-300`} />   <span className={`${!open && "hidden"}`}>Support Center</span>
                            </NavLink>
                        </li>




                    </ul>




                </div>



                <div className="text-center ">
                  
                    <hr
                        className="my-4 h-[1px] border-t-0 bg-white opacity-100 " />
                    <button className="btn btn-sm hover:bg-gray-300  " onClick={LogOut}>
                        < CiLogout className={`${open && "text-4xl"} font-extrabold  text-[#09CC7F] text-xl duration-300 `} />   <span className={`${!open && "hidden"} font-bold`}>log Out</span>
                    </button>
                </div>
            </div>


            <div className="p-9 overflow-hidden">
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default Dashboard;