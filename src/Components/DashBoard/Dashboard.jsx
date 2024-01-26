import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
    const { AuthUser } = useAuth()
    console.log(AuthUser);
    return (
        <div className="pt-20 mb-4 max-w-screen-xl  mx-auto">
            {/* profile */}
            <div className="border w-fit p-4 rounded-md shadow-xl">
                <div className="flex">
                    <img className="w-20 h-20 object-cover rounded-full" src={AuthUser?.photoURL} alt="" />
                    <div>
                        <p>{AuthUser?.displayName}</p>
                        <p>{AuthUser?.email}</p>
                    </div>
                </div>
                <p>{AuthUser?.uid}</p>
                <p>email verified: {AuthUser?.emailVerified ? 'true' : "false"}</p>
                <p>{AuthUser?.metadata.lastSignInTime}</p>
            </div>
        </div>
    );
};

export default Dashboard;