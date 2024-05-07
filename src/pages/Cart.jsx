import React, { useState , useEffect} from "react";
import ProductinCart from "../components/ProductinCart";
import { useSelector } from "react-redux";
export default function Cart(){
    const [items, setItems] = useState([]); // Initialize items state
    const [totalPrice, setTotalPrice] = useState(0);
    const itemsId = useSelector(state => state.cartItem.productId);

    useEffect(() => {
        fetchProducts();
    }, [itemsId]);

    const fetchProducts = async () => {
        try {
            const productPromises = itemsId.map(async id => {
                const URL = `https://fakestoreapi.com/products/${id}`;
                const response = await fetch(URL);
                const jsonData = await response.json();
                return jsonData;
            });

            const products = await Promise.all(productPromises);
            // Assuming each product has a 'price' property
            const total = products.reduce((acc, curr) => acc + curr.price, 0);
            setTotalPrice(total);
            setItems(products); // Update items state with fetched products
        } catch (error) {
            console.log("Error in fetching products:", error);
        }
    };
    return(
        <>
        <body className=" bg-gray-100">
  <div class="h-full bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        {
            items.map(item=>(
                <ProductinCart 
                image={item.image}
                title={item.title}
                price={item.price}
                productId={item.id}
                />
            ))
        }
      </div>
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">${totalPrice}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">${totalPrice+4.99}</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>
  </div>
</body>
        </>
    )
}