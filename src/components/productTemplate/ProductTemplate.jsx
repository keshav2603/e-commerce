import React from "react";
export default function ProductTemplate({ image="./pic-1.png", title="none", rating, description }) {
    return (
        <>
        <div className="w-11/12 h-72 flex m-auto items-center justify-around bg-gray-100">
          <div className="w-3/12 h-64">
            <img src={image} alt="" className="object-cover h-64 " />
          </div>
          <div className="w-8/12 h-64 shadow-2xl p-3">
            <h1 className="font-abc text-2xl">{title}</h1>
            <p></p>
          </div>
        </div>
      </>
      
    );
  };
  