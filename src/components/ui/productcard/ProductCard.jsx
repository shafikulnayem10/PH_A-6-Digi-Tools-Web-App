import React from "react";
import { toast } from "react-toastify";
import { TiTick } from "react-icons/ti";


const ProductCard = ({ product, cartItems, setCartItems }) => {

  const isInCart = cartItems.some((item) => item.id === product.id);

  const getTagColor = (tagType) => {
    if (tagType === "popular") return "bg-purple-100 text-purple-600";
    if (tagType === "best seller") return "bg-orange-100 text-orange-600";
    if (tagType === "new") return "bg-green-100 text-green-600";
    return "bg-gray-100 text-gray-600";
  };

  const handleAddToCart = () => {
    if (isInCart) {
      toast.info(`${product.name} is already in the cart`);
      return;
    }
    setCartItems([...cartItems, product]);
   
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="card  shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="card-body">
        <div className="flex justify-between items-start mb-2">
          <img src={product.icon} alt={product.name} className="w-12 h-12 object-contain" />
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTagColor(product.tagType)}`}>
            {product.tag}
          </span>
        </div>

        <h2 className="text-lg text-black font-bold mt-2">{product.name}</h2>
        <p className="text-gray-500 text-sm">{product.description}</p>

        <div className="divider my-2"></div>

        <ul className="space-y-1 mb-3">
          {product.features.map((feature, ind) => (
            <li key={ind} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-purple-500 font-bold"><TiTick /></span> {feature}
            </li>
          ))}
        </ul>

        <div className="card-actions justify-between items-center mt-2">
          <div>
            <span className="text-2xl font-bold text-purple-600">${product.price}</span>
            <span className="text-gray-400 text-sm">/{product.period}</span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`btn rounded-full px-6 border-0 ${
              isInCart
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {isInCart ? "Added" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
