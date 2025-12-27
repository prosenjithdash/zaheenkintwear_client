import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            {/* Navbar part */}
            <Navbar className='container'/>
            <div className="min-h-[calc(100vh-68px)] ">
                <Outlet/>
            </div>
            {/* Footer part */}
            <Footer/>
        </div>
    );
};

export default Main;