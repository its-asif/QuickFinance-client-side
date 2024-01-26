import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
    const {AuthUser} = useAuth()
    console.log(AuthUser);
    return (
        <div className="pt-40">
            <p>My Account</p>
            {/* profile */}
            <div>
                <p>{AuthUser?.email}</p>
                <p>{AuthUser?.displayName}</p>
                <img src={AuthUser?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Dashboard;