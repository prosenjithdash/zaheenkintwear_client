import { useContext, useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import Login from "../../../pages/Login/Login";

const Navbar = () => {
    const { cartCount } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <>
            <div className="bg-white shadow relative z-40">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                    <img src="/src/assets/zk-logo.png" alt="logo" className="h-10" />

                    <nav className="hidden lg:flex gap-8 font-medium">
                        <a href="/" className="text-orange-500">Home</a>
                        <a href="/products">Our Products</a>
                    </nav>

                    <div className="flex items-center gap-6">
                        <div className="relative cursor-pointer">
                            <FaShoppingCart size={22} />
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        </div>

                        <button onClick={() => setAuthModalOpen(true)} className="flex items-center gap-2">
                            <FaUser />
                            <span className="hidden sm:block">Your Account</span>
                        </button>

                        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {authModalOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <Login />
                </div>
            )}
        </>
    );
};

export default Navbar;
