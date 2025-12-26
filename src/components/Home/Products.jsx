import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold">Our Apparels</h2>
            <div className="grid grid-cols-4 gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Products;