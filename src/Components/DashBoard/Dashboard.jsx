import useAuth from "../../Hooks/useAuth";
import { MdVerified } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
const Dashboard = () => {
    const { AuthUser } = useAuth()
    console.log(AuthUser);
    return (
        <div className="pt-20 mb-4 lg:max-w-screen-xl  mx-auto">

            <div className=" w-fit p-4 rounded-md shadow-xl">
                {/* profile */}
                <div className="flex items-center gap-2">
                    <div>
                        <img className="md:w-24 w-14 h-14 md:h-24 object-cover rounded-full border-[3.5px] border-green-700" src={AuthUser?.photoURL} alt="" />
                        <MdVerifiedUser size={20} className="text-green-700 absolute -translate-y-[60px] md:-translate-y-24 z-20"/>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-1">
                            <span className="font-semibold text-green-700">Username:</span>
                            {AuthUser?.displayName}  {AuthUser?.emailVerified ? <MdVerified className="text-green-700" /> : ""}
                        </p>
                        <p><span className="font-semibold text-green-700">Email</span>: {AuthUser?.email}</p>
                        <p className="hidden md:flex gap-2"><span className="font-semibold text-green-700">UId:</span> {AuthUser?.uid}</p>
                        <p className="hidden md:flex gap-2"><span className="font-semibold text-green-700">Last Sign In At:</span> {AuthUser?.metadata.lastSignInTime}</p>
                    </div>
                </div>
                {/* expencess and income*/}
                <div className="p-2">
                    <p className="text-md font-semibold"><span className=" pr-3 text-green-700">My Total Income:</span> 20000 Tk</p>
                    <p className="text-md font-semibold"><span className="  text-green-700">My Total Expenses:</span> 3000 Tk</p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;