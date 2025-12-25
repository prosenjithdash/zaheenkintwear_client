import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            {/* Navbar part */}
            <div className="min-h-[calc(100vh-68px)] container mx-auto px-4">
                <Outlet/>
            </div>
            {/* Footer part */}
        </div>
    );
};

export default Main;