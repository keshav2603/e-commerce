import React from "react";
import { FaStar } from "react-icons/fa";
import Cartbtn from "../cartbtn/Cartbtn";
export default function ProductTemplate({ productId, image="./pic-1.png", title="none",  description,price="00.0" ,category,rating }) {
    return (
        <>
        <div className="w-11/12 h-80 flex m-auto items-center justify-around ">
          <div className="w-4/12 h-72 flex items-center justify-center  shadow">
            <img src={image} alt="" className="object-contain h-72 max-w-full " />
          </div>
          <div className="w-8/12 h-72 shadow p-3 bg-gray-100 flex flex-col ">
            <h1 className="font-abc text-4xl underline pb-1">{category}</h1>
            <h1 className="font-abc text-2xl pb-1">{title}</h1>
            <div className="flex font-bold">  
            rating:
              <p className="bg-green-700 rounded w-12 text-center text-white flex justify-center">       {rating} <FaStar  className="text-center"/>
              </p>
            </div>
            <p> {description}</p>
            <div className=" flex justify-between px-6 mt-auto ">
              <p className="text-2xl font-bold flex justify-center items-center">Price: $ {price}</p>
              <Cartbtn productId={ productId}/>
            </div>
          </div>
        </div>
      </>
      
    );
  };
  