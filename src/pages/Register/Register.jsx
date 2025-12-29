import { MdEmail, MdPerson } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Register = () => {

    const { createUser, updateUserProfile, loading, setLoading, signInWithGoogle } = useAuth()
    const navigate = useNavigate();

    const handleRegister = async (e) => {


        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log('Name:', name, 'Photo:', photo, 'Email: ', email, 'Password: ', password)

        try {
            setLoading(true)

            // 1️⃣ create user
            const result = await createUser(email, password)

            // 2️⃣ update profile
            await updateUserProfile(name, photo)

            // 3️⃣ toast success
            toast.success('Registration Successful.')

            // 4️⃣ reset form & navigate
            e.target.reset()
            navigate('/')
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        } finally {
            setLoading(false) // ✅ ensure loading ends
        }

    }
    // handle Google Signin
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle(); // must return result
            if (result?.user) {
                toast.success("Login Successful");
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-teal-300 to-white flex flex-col">

            {/* Top Navbar */}
            <div className="w-full max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
                <h1 className="text-white font-bold text-2xl">LOGO</h1>

                <div className="hidden sm:flex gap-3">
                    <NavLink to="/login">
                        <button className="px-5 py-2 border border-white rounded-full text-white text-sm">
                            Login
                        </button>
                    </NavLink>

                    <NavLink to="/register">
                        <button className="px-5 py-2 border border-white rounded-full text-white text-sm">
                            Sign Up
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* Main container */}
            <div className="flex-1 flex items-start justify-center pt-8 sm:pt-12">

                <div className="w-full max-w-lg px-4 text-center">

                    {/* Only difference from login text */}
                    <h2 className="text-white font-extrabold text-3xl sm:text-4xl">
                        Create an Account
                    </h2>

                    <p className="text-white/90 mt-1 mb-6">
                        Please provide your information to register
                    </p>

                    {/* FORM */}
                    <form className="space-y-3" onSubmit={handleRegister}>

                        {/* Name */}
                        <div className="bg-white rounded-xl px-3 py-3 flex items-center gap-2 border">
                            <MdPerson className="text-gray-600 text-xl" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="w-full outline-none text-sm"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-xl px-3 py-3 flex items-center gap-2 border">
                            <MdEmail className="text-gray-600 text-xl" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full outline-none text-sm"
                                required
                            />
                        </div>

                        

                        {/* Photo */}
                        <div className="bg-white rounded-xl px-3 py-3 flex items-center gap-2 border">
                            <MdEmail className="text-gray-600 text-xl" />
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-full outline-none text-sm"
                                required
                            />
                        </div>


                        {/* Password */}
                        <div className="bg-white rounded-xl px-3 py-3 flex items-center gap-2 border">
                            <RiLockPasswordLine className="text-gray-600 text-xl" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full outline-none text-sm"
                                required
                            />

                            <AiOutlineEye className="text-gray-600 text-xl cursor-pointer" />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white py-3 rounded-xl text-lg"
                        >
                            Register
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

                        <button onClick={handleGoogleSignIn} className="w-28 h-12 bg-white rounded-xl border flex items-center justify-center">
                            <FcGoogle size={26} />
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
