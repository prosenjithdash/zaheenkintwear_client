import { FaHeart, FaEye, FaShareAlt, FaShoppingCart } from "react-icons/fa";

const ProductCard = () => {
    return (
        <div
            className="
                group
                bg-white
                rounded-xl
                shadow
                hover:shadow-lg
                transition
                overflow-hidden
                w-full
                sm:w-64
                md:w-72
            "
        >
            {/* Image section */}
            <div className="relative p-3">
                <div className="overflow-hidden rounded-lg">
                    <img
                        src="/src/assets/products/woman.jpg"
                        alt="Woman Apparel"
                        className="w-full h-56 object-cover"
                    />
                </div>

                {/* Hover Icons */}
                <div
                    className="
                        absolute
                        top-6
                        right-6
                        flex
                        flex-col
                        gap-3
                        opacity-0
                        group-hover:opacity-100
                        transition
                    "
                >
                    <button className="bg-white p-2 rounded-full shadow text-red-500">
                        <FaHeart size={14} />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow text-gray-700">
                        <FaEye size={14} />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow text-gray-700">
                        <FaShareAlt size={14} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Woman Apparel
                </h3>

                <p className="text-sm text-gray-800 mb-4">
                    ৳ 1,000.00 — ৳ 1,00,00.00
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button
                        className="
                            flex items-center justify-center gap-2
                            w-1/2
                            bg-teal-100
                            text-teal-700
                            text-sm
                            py-2
                            rounded-md
                        "
                    >
                        <FaShoppingCart size={14} />
                        Add To Cart
                    </button>

                    <button
                        className="
                            w-1/2
                            bg-teal-500
                            text-white
                            text-sm
                            py-2
                            rounded-md
                        "
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;






// import { FaHeart, FaEye, FaShareAlt, FaShoppingCart } from "react-icons/fa";

// const ProductCard = ({ product }) => {
//     return (
//         <div className="group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
//             {/* Image */}
//             <div className="relative p-3">
//                 <div className="overflow-hidden rounded-lg">
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-56 object-cover"
//                     />
//                 </div>

//                 {/* Hover Icons */}
//                 <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
//                     <button className="bg-white p-2 rounded-full shadow text-red-500">
//                         <FaHeart size={14} />
//                     </button>
//                     <button className="bg-white p-2 rounded-full shadow">
//                         <FaEye size={14} />
//                     </button>
//                     <button className="bg-white p-2 rounded-full shadow">
//                         <FaShareAlt size={14} />
//                     </button>
//                 </div>
//             </div>

//             {/* Info */}
//             <div className="px-4 pb-4">
//                 <h3 className="text-sm font-semibold mb-2">
//                     {product.name}
//                 </h3>

//                 <p className="text-sm mb-4">
//                     ৳ {product.minPrice} — ৳ {product.maxPrice}
//                 </p>

//                 <div className="flex gap-3">
//                     <button className="w-1/2 bg-teal-100 text-teal-700 py-2 rounded-md text-sm flex items-center justify-center gap-2">
//                         <FaShoppingCart size={14} />
//                         Add To Cart
//                     </button>
//                     <button className="w-1/2 bg-teal-500 text-white py-2 rounded-md text-sm">
//                         Buy Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;
