import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemIncart, removeItemIncart } from "../../app/features/selectSlice";

export default function Cartbtn({  productId }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItem.productId);

    const isInCart = cartItems.includes( productId);

    const handleToggleCart = () => {
        if (isInCart) {
            dispatch(removeItemIncart( productId));
        } else {
            dispatch(addItemIncart( productId));
        }
    };

    return (
        <button onClick={handleToggleCart} className={`h-12 w-24 bg-white rounded-xl border-4 border-sky-500 text-2xl font-bold ${
            isInCart ? 'text-red-500 border-red-500' : 'text-sky-500 border-sky-500'
        }`}>
            {isInCart ? "Cancel" : "Cart"}
        </button>
    );
}


{/* <button className="h-12 w-20 bg-white rounded-xl border-4 border-sky-500 text-sky-500 text-2xl font-bold">Cart</button> */}