import categoriesData from "./CategoriesData";
import CategoryCard from "./CategoryCard";


const Categories = () => {
    return (
        <div className="py-14 px-4 ">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

                    {/* first 4 cards */}
                    {categoriesData.slice(0, 4).map((item, index) => (
                        <CategoryCard
                            key={index}
                            step={index + 1}
                            name={item.name}
                            icon={item.icon}
                            description={item.description}
                        />
                    ))}

                    {/* spacer to center next 3 cards */}
                   

                    {/* last 3 cards */}
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
    );
};

export default Categories;
