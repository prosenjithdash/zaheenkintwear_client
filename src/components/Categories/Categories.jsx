import categoriesData from "./CategoriesData";
import CategoryBanner from "./CategoryBanner";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <div>
            <CategoryBanner/>
            <div className="py-14 px-4 relative -mt-[100px] ">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

                        {/* First row: 4 cards */}
                        {categoriesData.slice(0, 4).map((item, index) => (
                            <CategoryCard
                                key={index}
                                step={index + 1}
                                name={item.name}
                                icon={item.icon}
                                description={item.description}
                            />
                        ))}

                        {/* Empty column to push next row to center (XL only) */}
                        <div className="hidden xl:block"></div>

                        {/* Second row: centered 3 cards */}
                        {categoriesData.slice(4).map((item, index) => (
                            <div key={index + 4} className="xl:col-span-1">
                                <CategoryCard
                                    step={index + 5}
                                    name={item.name}
                                    icon={item.icon}
                                    description={item.description}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
       </div>
    );
};

export default Categories;
