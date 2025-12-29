// CategoryCard.jsx
const CategoryCard = ({ step, name, icon, description }) => {
    return (
        <div
            className="
                group
                relative cursor-pointer
                bg-white
                rounded-xl
                shadow-md
                px-7 py-14
                transition-all duration-300
                hover:bg-[#07B4B0]
                hover:text-white
            "
        >
            {/* step badge */}
            <div
                className="
                    absolute -top-4 left-1/2 -translate-x-1/2
                    w-9 h-9 rounded-full
                    bg-white
                    shadow-md
                    flex items-center justify-center
                    font-semibold
                    transition-all duration-300

                    /* active state when hovered */
                    group-hover:bg-[#FF5B2E]
                    group-hover:text-white
                "
            >
                {step}
            </div>

            {/* icon */}
            <div className="mb-3">
                <img
                    src={icon}
                    alt={name}
                    className="
                    w-14 h-14       
                    object-contain
                    transition-all duration-300
                    group-hover:brightness-200
                    group-hover:invert
                    group-hover:scale-110  
                "
                            />
            </div>

            {/* title */}
            <h3 className="text-xl font-bold mb-1">
                {name}
            </h3>

            {/* description */}
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                {description}
            </p>
        </div>
    );
};

export default CategoryCard;
