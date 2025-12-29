// Categories.jsx
import categoriesData from "./CategoriesData";
import CategoryBanner from "./CategoryBanner";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <div>
            <CategoryBanner />

            <div className="py-14 px-4 relative -mt-[120px]">
                <div className="max-w-7xl mx-auto">

                    {/* grid wrapper */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            md:grid-cols-3
                            xl:grid-cols-4
                            gap-8
                        "
                    >
                        {/* Row - 1: exactly 4 cards */}
                        {categoriesData.slice(0, 4).map((item, index) => (
                            <CategoryCard
                                key={index}
                                step={index + 1}
                                name={item.name}
                                icon={item.icon}
                                description={item.description}
                            />
                        ))}

                        {/* Row - 2: exactly 3 cards and centered */}

                        {/* push second row to middle of 4-column layout */}
                        <div className="hidden xl:block "></div>
                        

                        {categoriesData.slice(4).map((item, index) => (
                            <CategoryCard
                                key={index + 4}
                                step={index + 5}
                                name={item.name}
                                icon={item.icon}
                                description={item.description}
                            />
                        ))}
                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
