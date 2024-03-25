import React from "react";

const Cart = () => {
  return (
    <div className="w-full flex flex-col px-5 min-h-screen">
      <h1 className="text-2xl font-semibold">Cart Page</h1>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="lsit w-full p-2 flex flex-col gap-y-2">
          <div className="cart_items w-full h-42 p-2 border-2 rounded-lg flex gap-2">
            <img
              src="/wiredheadphone.jpg"
              alt="product_image"
              className="w-40 object-cover rounded-lg"
            />
            <div className="w-full flex flex-col">
              <h1 className="text-red-600 font-semibold">Headphones</h1>
              <h1 className="text-lg font-bold ">
                boAt Wired Earphones - boAt{" "}
              </h1>
              <h1 className="font-semibold">$99/-</h1>
              <input
                type="Number"
                placeholder="Quantity"
                className="w-24 px-2 py-1 ring-1 ring-gray-400 rounded-full mt-1"
              />
              <div className="w-full flex gap-3 font-semibold text-cyan-600 mt-2">
                <span className="cursor-pointer hover:text-cyan-800">Remove</span> |
                <span className="cursor-pointer hover:text-cyan-800">See more</span>
              </div>
            </div>
          </div>


          <div className="cart_items w-full h-42 p-2 border-2 rounded-lg flex gap-2">
            <img
              src="/wiredheadphone.jpg"
              alt="product_image"
              className="w-40 object-cover rounded-lg"
            />
            <div className="w-full flex flex-col">
              <h1 className="text-red-600 font-semibold">Headphones</h1>
              <h1 className="text-lg font-bold ">
                boAt Wired Earphones - boAt{" "}
              </h1>
              <h1 className="font-semibold">$99/-</h1>
              <input
                type="Number"
                placeholder="Quantity"
                className="w-24 px-2 py-1 ring-1 ring-gray-400 rounded-full mt-1"
              />
              <div className="w-full flex gap-3 font-semibold text-cyan-600 mt-2">
                <span className="cursor-pointer hover:text-cyan-800">Remove</span> |
                <span className="cursor-pointer hover:text-cyan-800">See more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="payment_details w-[40%] pt-2">
            <div className="border-2 min-h-32 rounded-lg p-2">
                <div className="font-semibold text-xl"><span>Grand Total: </span> <span>$198</span></div>
                <div className="p-auto"></div>
                <div className="w-full text-center font-semibold bg-red-600 rounded-lg py-3 text-gray-200 cursor-pointer hover:bg-red-500">
                    Proceed To Pay
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
