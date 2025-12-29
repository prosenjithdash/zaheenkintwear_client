import img1 from "../../assets/bandIcons/1.jpg";
import img2 from "../../assets/bandIcons/2.jpg";
import img3 from "../../assets/bandIcons/3.jpg";
import img4 from "../../assets/bandIcons/4.jpg";

import heroVideo from "../../assets/bannervideo/banner-video.mp4";

const Banner = () => {
    return (
        <section >
            <div className="relative w-full overflow-hidden">

                {/* Background Video */}
                <video
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[95vh] object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="absolute inset-0 px-4 sm:px-8 lg:px-24 flex flex-col lg:flex-row items-center justify-between">

                    {/* LEFT TEXT */}
                    <div className="text-gray-300 mt-10 lg:mt-0 lg:w-[1000px] space-y-6 sm:space-y-7 lg:space-y-8">

                        <p className="text-base sm:text-lg opacity-90">
                            Elevate Your Brand With
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                            High-Quality Garments. <br />
                            Ethically Made.
                        </h1>

                        <p className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed">
                            At Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner
                            for apparel production. Our commitment to ethical manufacturing ensures
                            that every garment is crafted with care and integrity.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-2 flex-wrap">
                            <button className="bg-orange-600 hover:bg-orange-700 px-7 py-3 rounded text-white text-sm sm:text-base font-medium">
                                Contact Us
                            </button>

                            <button className="border border-white px-7 py-3 rounded hover:bg-white hover:text-black transition text-sm sm:text-base font-medium">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* RIGHT PLAY BUTTON */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 flex items-center justify-center backdrop-blur cursor-pointer hover:bg-white/30 transition">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 22V2l18 10-18 10z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
            {/* BAND INFO */}
            <div className="w-full bg-white">
                <div className="py-6 px-4 sm:px-8 lg:px-24 flex flex-col sm:flex-row items-start sm:items-center  gap-8">

                    {/* location */}
                    <div className="flex items-start sm:items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center">
                            <span className="text-teal-600 text-lg">📍</span>
                        </div>
                        <div>
                            <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-teal-500">
                                Location
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-tight">
                                Kashimpur, Gazipur Sadar / Gazipur
                            </p>
                        </div>
                    </div>

                    {/* email */}
                    <div className="flex items-start sm:items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 text-lg">✉️</span>
                        </div>
                        <div>
                            <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-teal-500">
                                Email
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-tight break-all">
                                compliance@danysknitwear.com
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* BRAND LOGOS (static, responsive) */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between gap-6 sm:gap-10 px-4">

                    <img src={img1} className="h-8 sm:h-10 lg:h-8 object-contain" alt="" />
                    <img src={img2} className="h-8 sm:h-10 lg:h-8 object-contain" alt="" />
                    <img src={img3} className="h-8 sm:h-10 lg:h-8 object-contain" alt="" />
                    <img src={img4} className="h-8 sm:h-10 lg:h-8 object-contain" alt="" />
                    <img src={img1} className="h-8 sm:h-10 lg:h-8 object-contain" alt="" />
                    <img src={img2} className="h-8 sm:h-10 lg:h-8 object-contain" alt="" />

                </div>
            </div>



          
        </section>
     
    );
};

export default Banner;
