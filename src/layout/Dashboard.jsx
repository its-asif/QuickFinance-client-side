
import { useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import useAuth from "../Hooks/useAuth";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { AuthUser } = useAuth();
    return (
        <div className="flex">
            <div
                className={`bg-black h-screen p-5 pt-8  ${open ? "w-72" : "w-20"} duration-300 relative`}>

                <BsFillArrowLeftSquareFill className={` text-black text-4xl bg-white absolute -right-7 border border-white rounded-lg top-9  cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />



                <div className="inline-flex ">
                    <img src="/favicon.png" className={` h-8 w-full cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`} />
                    <h1 className={`text-white origin-left text-2xl font-medium mr-2 ml-2 duration-300 ${!open && "scale-0"}`}>
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
                   
                   className={`menu p-2 shadow rounded-box text-center font-bold`}
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
                        <MdDashboard className={`${open && "text-2xl"} text-md`}/>   <span className={`${!open && "hidden"}`}>My Dashboard</span>
                       </NavLink>
                   </li>

               </ul>

              
               </div>


            </div>


            <div className="p-9">
                <h1
                    className="text-2xl text-center ml-10 front-semibold">
                    HOme page
                </h1>

            </div>

        </div>
    );
};

export default Dashboard;