import React, { useEffect, useState } from "react";
import ProductTemplate from '../components/productTemplate/ProductTemplate';

export default function AllProducts() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const URL = "https://fakestoreapi.com/products/";
                const response = await fetch(URL);
                const jsonData = await response.json();
                setItems(jsonData);
            } catch (error) {
                console.log("Error in fetching products:", error);
            }
        };

        
        fetchProducts();
    }, []);

    return (
        <div>
            {items.map(item => (
                <ProductTemplate
                    rating={item.rating.rate}
                    productId={item.id}
                    image={item.image}
                    title={item.title}
                    // description={item.description}
                    price={item.price}
                    category={item.category}
                />
            ))}
        </div>
    );
}
