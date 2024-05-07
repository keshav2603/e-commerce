import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return  (
        <>
        <main>
            <div className="w-full bg-[url('./Rectangle-2.png')] border-none ">
                .
                <div className="h-44 w-4/5 font-abc text-6xl font-black ml-20 mt-16">
                    <h1>FIND CLOTHES</h1>
                    <h1>THAT MATCHES</h1>
                    <h1>YOUR STYLE</h1>
                </div>
                <div className="w-2/5 ml-20">
                    <p className="text-gray-400">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                </div>
                <div>
                    <Link to="/products">  
                        <button className="bg-black text-white w-52 h-12 ml-20 rounded-3xl mt-10">shop Now</button>
                    </Link>
                </div>
                <div className="flex mt-12 ml-20 mb-28 h-20 w-2/5"> 
                    <div className="flex-grow">
                        <p className=" text-4xl font-bold">200+</p>
                        <p className="text-gray-400">International Brands</p>
                    </div>
                    <div className="flex-grow">
                        <p className=" text-4xl font-bold">2,000+</p>
                        <p className="text-gray-400">High-Quality Products</p>
                    </div>
                    <div className="flex-grow">
                        <p className=" text-4xl font-bold">30,000+</p>
                        <p className="text-gray-400">Happy Customers</p>
                    </div>
                </div>
                .
            </div>
        </main>
        </>
    )
}