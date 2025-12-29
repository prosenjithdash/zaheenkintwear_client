import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.log("Error fetching products:", error);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 ">
            <h2 className="text-4xl font-bold mb-8">
                Our Apparels
            </h2>

            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                gap-5
            ">
                {products.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
    
};

export default Products;