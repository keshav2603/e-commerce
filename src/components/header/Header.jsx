import React from "react";
import { FaSearch, } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
export default function Header() {
    return (
        <header className="w-5/6 mx-auto my-6 h-12 flex items-center justify-between">
            <div className="">
                <img src="./SHOP.CO.png" alt="" className="" />
            </div>
            <div>
                <nav>
                    <ul className="flex w-80 h-5  justify-between">
                        {/* still here all list item need to add link in them for now it wass just to see how it looks  */}
                        <li><select name="Shop" id="Shop">
                                <option value="shop">Shop</option>
                            </select>   
                        </li>
                        <li>on Sale</li>
                        <li>New Arivals</li>
                        <li> Brands</li>
                    </ul>
                </nav>
            </div>

            <div className="w-1/3 bg-gray-400 rounded-3xl opacity-50">
                <input type="text"  className="bg-transparent h-12 w-11/12 ps-2 border-none"
                placeholder="search proucts..."/>
                <button className="w-1/12 h-12">
                    <FaSearch />
                </button>
            </div>

            <div className="w-16">
                <MdOutlineShoppingCart />
                <button>sign in</button>
            </div>
        </header>
    )
} 
