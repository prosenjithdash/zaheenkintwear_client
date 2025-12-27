import bannerImg from "../../assets/categoryBanner/bannerImage.png";
import contentBg from "../../assets/categoryBanner/contentBg.png";

const CategoryBanner = () => {
    return (
        <section className="bg-[#07B4B01A] ">
            <div className="
                max-w-9xl mx-auto
                px-4
                py-[80px] sm:py-[110px] lg:py-[150px]
                
            ">

                {/* Main Flex Container */}
                <div className="
                    flex flex-col-reverse lg:flex-row
                    items-center
                    gap-8 sm:gap-10
                 
                ">

                    {/* LEFT CONTENT */}
                    <div
                        className="
                            w-full
                            sm:w-[95%]
                            lg:w-[1250px]
                            px-6 sm:px-10 lg:px-[80px]
                            py-6 sm:py-8 lg:py-[40px]
                            h-auto sm:h-auto lg:h-[500px]
                            rounded-2xl
                            bg-cover bg-center
                        "
                        style={{ backgroundImage: `url(${contentBg})` }}
                    >
                        {/* Process Button */}
                        <button className="
                            px-5 py-2 mb-5
                            rounded-full
                            bg-white
                            text-[#07B4B0]
                            font-semibold
                            text-sm
                            shadow
                        ">
                            Process
                        </button>

                        {/* Title */}
                        <h1 className="
                            text-2xl
                            sm:text-3xl
                            lg:text-5xl
                            font-bold
                            text-gray-900
                            leading-tight
                            mb-4
                        ">
                            Do You Want Custom Project With Textilery? Contact Us Now
                        </h1>

                        {/* Description */}
                        <p className="
                            text-sm
                            sm:text-base
                            lg:text-lg
                            text-gray-700
                            mb-6
                        ">
                            At Zaheen Knitwear Ltd. We pride ourselves on being your reliable
                            partner for apparel production. Our commitment to ethical
                            manufacturing ensures that every garment is crafted with care
                            and integrity.
                        </p>

                        {/* Learn More Button */}
                        <button className="
                            px-6 py-3
                            rounded-lg
                            bg-[#07B4B0]
                            text-white
                            font-semibold
                            hover:bg-[#069a97]
                            transition
                        ">
                            Learn More
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="
                        w-full
                        sm:w-full
                        lg:w-[65%]
                        flex
                        justify-center
                        items-center
                        min-h-[260px]
                        sm:min-h-[420px]
                        lg:min-h-[620px]
                    ">
                        <img
                            src={bannerImg}
                            alt="Category Banner"
                            className="
                                w-full
                                max-w-[260px]
                                sm:max-w-[450px]
                                lg:max-w-[720px]
                                h-auto
                                lg:h-[620px]
                                object-contain
                            "
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CategoryBanner;
