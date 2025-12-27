const CategoryCard = ({ step, name, icon, description }) => {
    return (
        <div
            className="
        relative cursor-pointer
        bg-white
        rounded-xl
        shadow-md
        px-6 py-7
        transition-all duration-300
        hover:bg-[#07B4B0]
        hover:text-white
        w-full h-full
      "
        >
            {/* step circle */}
            <div
                className="
          absolute -top-4 left-1/2 -translate-x-1/2
          w-9 h-9 rounded-full
          bg-white
          shadow-md
          flex items-center justify-center
          font-semibold
          transition-all duration-300
          group-hover:bg-orange-500
          
        "
            >
                {step}
            </div>

            {/* icon */}
            <div className="mb-3">
                <img
                    src={icon}
                    alt={name}
                    className="w-10 h-10 object-contain"
                />
            </div>

            {/* title */}
            <h3 className="text-xl font-bold mb-1">
                {name}
            </h3>

            {/* description */}
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default CategoryCard;
