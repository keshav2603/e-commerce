import React from "react";
import { FaSearch, } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
    const numberOfItemsInCart = useSelector(state => state.cartItem.numberOfProduct);
    return (
        <header className="w-5/6 mx-auto my-5 h-12 flex items-center justify-between">
            <div className="">
                <img src="./SHOP.CO.png" alt="" className="" />
            </div>
            <div>
                <nav>
                    <ul className="flex w-80 h-5  justify-between">
                        {/* still here all list item need to add link in them for now it wass just to see how it looks  */}
                        <li>
                            <Link to="/">
                                <button>Home</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <button>AllProducts</button>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>

            <div className="w-1/3 bg-gray-400 rounded-3xl opacity-50">
                <input type="text"  className="bg-transparent h-12 w-11/12 ps-2 border-none "
                placeholder="search proucts..." />
                <Link to="/products">
                <button className="w-1/12 h-12">
                    <FaSearch />
                </button>
                </Link>
            </div>

            <div className="w-16 font-bold text-xl">
                <Link to={"/cart"}>
                <button className="flex" >
                    <MdOutlineShoppingCart className="font-bold text-xl" />
                    <p>{`(`}</p>
                    <p className="text-blue-500">{numberOfItemsInCart}</p>
                    <p>{`)`}</p>
                </button>
                </Link>
            </div>
        </header>
    )
} 
