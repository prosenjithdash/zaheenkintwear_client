import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("https://example.com/api/products")
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //         })
    //         .catch(error => {
    //             console.log("Error fetching products:", error);
    //         });
    // }, []);

    // return (
    //     <div className="container mx-auto px-4 py-12">
    //         <h2 className="text-4xl font-bold mb-8">
    //             Our Apparels
    //         </h2>

    //         <div className="
    //             grid 
    //             grid-cols-1 
    //             sm:grid-cols-2 
    //             md:grid-cols-3 
    //             lg:grid-cols-4 
    //             gap-5
    //         ">
    //             {products.map(product => (
    //                 <ProductCard
    //                     key={product._id}
    //                     product={product}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );
    return (
        <div className=" container mx-auto px-4">
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