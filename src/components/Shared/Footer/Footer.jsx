import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#F7F7F7]  mt-16">
            {/* Top Footer */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row justify-between gap-10">

                    {/* Left part of footer */}
                    <div>
                        <img src="https://ibb.co.com/7dFJ7jD1" alt="Company Logo" className="h-10 mb-4" />

                        <div className="flex gap-3 text-sm text-gray-600 mb-3">
                            <FaMapMarkerAlt className="mt-1 text-gray-500" />
                            <p>
                                29 SE 2nd Ave, Miami Florida 33131, United States
                            </p>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                            <FaEnvelope className="text-gray-500" />
                            <span>info@zaheen.com</span>
                        </div>

                        <div className="flex items-center gap-3 font-semibold text-gray-800">
                            <FaPhoneAlt />
                            <span>(+92) 3942 7879</span>
                        </div>
                    </div>

                    {/* Right part of footer */}
                    <div className="flex flex-col sm:flex-row gap-10">
                        {/* Pages */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">
                                PAGES
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>About Us</li>
                                <li>Our Services</li>
                                <li>Our Products</li>
                            </ul>
                        </div>

                        {/* Information */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">
                                INFORMATION
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>My Account</li>
                                <li>Corporate Enquires</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Payment Channels */}
                <div className="mt-10">
                    <h3 className="font-semibold text-gray-900 mb-4">
                        PAYMENT CHANNELS
                    </h3>

                    <div className="flex flex-wrap gap-10">
                        <img src="https://ibb.co.com/LdwM7Ccc" alt="Visa" className="h-8" />
                        <img src="https://ibb.co.com/SDTLpsgr" alt="Mastercard" className="h-8" />
                        <img src="https://ibb.co.com/yn4cnm5d" alt="nogod" className="h-8" />
                        <img src="https://ibb.co.com/p655Q460" alt="Bkash" className="h-8" />
                        <img src="https://ibb.co.com/tpG6j918" alt="Rocket" className="h-8" />

                        <img src="https://ibb.co.com/jv2nLY7J" alt="Upay" className="h-8" />
                        <img src="https://ibb.co.com/0yGwzPCm" alt="Siorcash" className="h-8" />
                        <img src="https://ibb.co.com/LVbHTj9" alt="Tap" className="h-8" />
                        <img src="https://ibb.co.com/spPzMFvJ" alt="Cell" className="h-8" />
                        <img src="https://ibb.co.com/FL3bgTb3" alt="DuchBangla Bank" className="h-8" />
                        <img src="https://ibb.co.com/BHS0GvTC" alt="City Bank" className="h-8" />
                        <img src="https://ibb.co.com/rRVbvQws" alt="Islami Bank" className="h-8" />
                        <img src="https://ibb.co.com/QvvqxfgH" alt="Brack" className="h-8" />
                        <img src="https://ibb.co.com/Q77x81fP" alt="UCB" className="h-8" />
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                    <p>
                        ©{" "}
                        <span className="text-orange-500 font-semibold">
                            360D Soul Limited
                        </span>{" "}
                        2025. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                    </div>

                    <div className="flex gap-4">
                        <span>Terms & Condition</span>
                        <span>Privacy & Policy</span>
                        <span>Refund Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
