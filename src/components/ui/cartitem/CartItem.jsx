import React from "react";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item, handleRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 shadow-sm ">
      <div className="flex items-center gap-4">
        <img
          src={item.icon}
          alt={item.name}
          className="w-12 h-12 object-contain"
        />
        <div>
          <h3 className="font-semibold text-black">{item.name}</h3>
          <p className="text-black text-sm capitalize">{item.period} plan</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold text-purple-600 text-lg">${item.price}</span>
        <button
          onClick={() => handleRemove(item)}
          className="btn btn-ghost text-red-500 hover:bg-red-50"
        >
          <MdDelete className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
