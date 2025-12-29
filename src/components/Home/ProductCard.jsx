import {
    FaRegHeart,
    FaRegEye,
    FaShareAlt,
    FaShoppingCart
} from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            {/* Image */}
            <div className="relative p-3">
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover"
                    />
                </div>

                <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-white p-2 rounded-full shadow text-orange-600">
                        <FaRegHeart size={16} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow text-orange-600">
                        <FaRegEye size={16} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow text-orange-600">
                        <FaShareAlt size={16} />
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold mb-2">
                    {product.name}
                </h3>

                <p className="text-2xl font-semibold mb-4">
                    ৳ {product.price.min} — ৳ {product.price.max}
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={() => addToCart(product)}
                        className="w-1/2 bg-teal-100 text-teal-700 py-2 rounded-md text-sm flex items-center justify-center gap-2"
                    >
                        <FaShoppingCart size={14} />
                        Add To Cart
                    </button>

                    <button className="w-1/2 bg-teal-500 text-white py-2 rounded-md text-sm">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
