const ProductCard = () => {
    return (
        <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Product Image */}
            <div className="w-full h-56 overflow-hidden">
                <img
                    src="/src/assets/products/woman.jpg"
                    alt="Woman Apparel"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Woman Apparel
                </h3>

                <p className="text-sm text-gray-800 mb-4">
                    ৳ 1,000.00 — ৳ 1,00,00.00
                </p>

                {/* Action Buttons */}
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
                            hover:bg-teal-200
                            transition
                        "
                    >
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
                            hover:bg-teal-600
                            transition
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
