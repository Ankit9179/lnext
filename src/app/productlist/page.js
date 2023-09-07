"use client";
import { useEffect, useState } from "react";
export default function productlist() {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
    }, []);
    return (
        <div>
            <h1 className="text-center font-bold">productlist</h1>
            {products.map((item) => {
                return (
                    <>

                        <h1>
                            Product Name : {item.title}
                        </h1>
                        <img src={item.thumbnail} alt="img" />
                    </>
                );
            })}
        </div>
    );
}
