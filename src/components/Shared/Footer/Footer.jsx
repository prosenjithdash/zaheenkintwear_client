import visa from "../../../assets/payment-logo/visa.png";
import mastercard from "../../../assets/payment-logo/mastercard.png";
import nogod from "../../../assets/payment-logo/nogod.png";
import bkash from "../../../assets/payment-logo/bkash.png";
import roket from "../../../assets/payment-logo/roket.png";
import upay from "../../../assets/payment-logo/upay.jpg";
import siorcash from "../../../assets/payment-logo/siorcash.jpg";
import taptap from "../../../assets/payment-logo/taptap.png";
import cell from "../../../assets/payment-logo/cell.png";
import duch from "../../../assets/payment-logo/duch.png";
import city from "../../../assets/payment-logo/citybank.png";
import islamibank from "../../../assets/payment-logo/islamibank.png";
import brack from "../../../assets/payment-logo/brack.png";
import ucb from "../../../assets/payment-logo/ucb.png";






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
                        <img src={visa} alt="Visa" className="h-8" />
                        <img src={mastercard} alt="Mastercard" className="h-8" />
                        <img src={nogod} alt="nogod" className="h-8" />
                        <img src={bkash} alt="Bkash" className="h-8" />
                        <img src={roket} alt="Rocket" className="h-8" />

                        <img src={upay} alt="Upay" className="h-8" />
                        <img src={siorcash} alt="Siorcash" className="h-8" />
                        <img src={taptap} alt="Tap" className="h-8" />
                        <img src={cell} alt="Cell" className="h-8" />
                        <img src={duch} alt="DuchBangla Bank" className="h-8" />
                        <img src={city} alt="City Bank" className="h-8" />
                        <img src={islamibank} alt="Islami Bank" className="h-8" />
                        <img src={brack} alt="Brack" className="h-8" />
                        <img src={ucb} alt="UCB" className="h-8" />
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
