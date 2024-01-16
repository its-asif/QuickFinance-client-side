import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1 className="text-xl font-semibold">Navbar</h1>
            <Outlet />
            <h1 className="text-xl font-semibold">Footer</h1>
        </div>
    );
};

export default Main;