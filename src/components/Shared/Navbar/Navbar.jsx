import { useState, useContext } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaShoppingCart,
    FaUser,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import Login from "../../../pages/Login/Login";
import Register from "../../../pages/Register/Register";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
    /* ================= STATES ================= */
    const [menuOpen, setMenuOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [user, setUser] = useState(null);

    // ✅ cart count comes from context (logic only)
    const { cartCount } = useContext(CartContext);

    return (
        <>
            {/* ================= TOP BAR ================= */}
            <div className="bg-teal-600 text-white text-sm">
                <div
                    className="
            max-w-7xl mx-auto px-4 py-2
            flex flex-col gap-2
            sm:flex-row sm:items-center sm:justify-between
          "
                >
                    {/* Left info */}
                    <div
                        className="
              flex flex-col gap-1 text-center
              sm:flex-row sm:gap-6 sm:text-left
            "
                    >
                        <span className="flex justify-center sm:justify-start gap-2">
                            📍 Kashimpur, Gazipur Sadar / Gazipur
                        </span>
                        <span className="flex justify-center sm:justify-start gap-2">
                            📞 +880 01713-027875
                        </span>
                    </div>

                    {/* Social icons */}
                    <div className="flex justify-center sm:justify-end gap-4 ">
                        <FaFacebookF className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaYoutube className="cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAVBAR ================= */}
            <div className="bg-white shadow relative z-40">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/zk-logo.png" alt="logo" className="h-10" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex gap-8 font-medium">
                        <a href="/" className="text-orange-500">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/services">Our Services</a>
                        <a href="/products">Our Products</a>
                        <a href="/blogs">Blogs</a>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-6">

                        {/* Cart (UI UNCHANGED) */}
                        <div className="relative cursor-pointer">
                            <FaShoppingCart size={22} />
                            <span
                                className="
                  absolute -top-2 -right-2
                  bg-orange-500 text-white
                  text-xs w-5 h-5
                  flex items-center justify-center
                  rounded-full
                "
                            >
                                {cartCount}
                            </span>
                        </div>

                        {/* Account */}
                        {!user ? (
                            <button
                                onClick={() => setAuthModalOpen(true)}
                                className="flex items-center gap-2"
                            >
                                <FaUser />
                                <span className="hidden sm:block">Your Account</span>
                            </button>
                        ) : (
                            <img
                                src={user.image}
                                alt="user"
                                className="w-9 h-9 rounded-full cursor-pointer"
                                onClick={() => setAuthModalOpen(true)}
                            />
                        )}

                        {/* Contact Button */}
                        <a
                            href="/contact"
                            className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded"
                        >
                            Contact Us
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>

                {/* ================= MOBILE MENU ================= */}
                {menuOpen && (
                    <div className="lg:hidden border-t bg-white">
                        <nav className="flex flex-col gap-4 p-4">
                            <a href="/">Home</a>
                            <a href="/about">About Us</a>
                            <a href="/services">Our Services</a>
                            <a href="/products">Our Products</a>
                            <a href="/blogs">Blogs</a>
                            <a
                                href="/contact"
                                className="bg-orange-500 text-white py-2 rounded text-center"
                            >
                                Contact Us
                            </a>
                        </nav>
                    </div>
                )}
            </div>

            {/* ================= AUTH MODAL ================= */}
            {authModalOpen && (
                <div
                    className="
            fixed inset-0 z-50
            bg-black/60 backdrop-blur-sm
            flex items-center justify-center px-4
          "
                >
                    <div
                        className="
              relative w-[95%] max-w-5xl
              max-h-[85vh]
              bg-white rounded-3xl
              shadow-2xl overflow-hidden
            "
                    >
                        <button
                            onClick={() => setAuthModalOpen(false)}
                            className="absolute top-4 right-6 text-2xl text-white z-50"
                        >
                            ✕
                        </button>

                        {!user ? (
                            <Login
                                onLoginSuccess={(loggedUser) => {
                                    setUser(loggedUser);
                                    setAuthModalOpen(false);
                                }}
                            />
                        ) : (
                            <div className="p-10 text-center space-y-4">
                                <img
                                    src={user.image}
                                    alt="user"
                                    className="w-20 h-20 rounded-full mx-auto"
                                />
                                <h2 className="text-xl font-semibold">{user.name}</h2>
                                <button
                                    onClick={() => {
                                        setUser(null);
                                        setAuthModalOpen(false);
                                    }}
                                    className="bg-red-500 text-white px-6 py-2 rounded"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
