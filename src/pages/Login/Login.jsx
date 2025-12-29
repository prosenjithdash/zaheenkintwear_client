import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-teal-300 to-white flex flex-col">

            {/* Top Navbar */}
            <div className="w-full max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
                <h1 className="text-white font-bold text-2xl">LOGO</h1>

                <div className="hidden sm:flex gap-3">
                    <button className="px-5 py-2 border border-white rounded-full text-white text-sm">
                        Login
                    </button>
                    <button className="px-5 py-2 border border-white rounded-full text-white text-sm">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Main container */}
            <div className="flex-1 flex items-start justify-center pt-8 sm:pt-12">

                <div className="w-full max-w-lg px-4 text-center">

                    <h2 className="text-white font-extrabold text-3xl sm:text-4xl">
                        Welcome Back!
                    </h2>

                    <p className="text-white/90 mt-1 mb-6">
                        We missed you, Please provide your credential
                    </p>

                    {/* FORM */}
                    <form className="space-y-3">

                        {/* Email */}
                        <div className="bg-white rounded-xl px-3 py-3 flex items-center gap-2 border">
                            <MdEmail className="text-gray-600 text-xl" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full outline-none text-sm"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="bg-white rounded-xl px-3 py-3 flex items-center gap-2 border">
                            <RiLockPasswordLine className="text-gray-600 text-xl" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full outline-none text-sm"
                                required
                            />
                            <AiOutlineEye className="text-gray-600 text-xl cursor-pointer" />
                        </div>

                        <p className="text-right text-sm text-gray-700 cursor-pointer">
                            Forget Password?
                        </p>

                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white py-3 rounded-xl text-lg"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                        <span className="flex-1 h-px bg-gray-300"></span>
                        <span className="text-gray-600 text-sm">or</span>
                        <span className="flex-1 h-px bg-gray-300"></span>
                    </div>

                    {/* Social Login */}
                    <div className="flex justify-center gap-4 flex-wrap">

                        <button className="w-28 h-12 bg-white rounded-xl border flex items-center justify-center">
                            <FaFacebookF size={22} className="text-blue-600" />
                        </button>

                        <button className="w-28 h-12 bg-white rounded-xl border flex items-center justify-center">
                            <FaApple size={24} />
                        </button>

                        <button className="w-28 h-12 bg-white rounded-xl border flex items-center justify-center">
                            <FcGoogle size={26} />
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
