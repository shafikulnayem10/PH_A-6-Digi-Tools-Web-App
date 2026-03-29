import { use, useState } from "react";
import ProductCard from "../../ui/productcard/ProductCard";
import CartItem from "../../ui/cartitem/CartItem";
import { toast } from "react-toastify";

const Products = ({ productsPromise, cartItems, setCartItems }) => {
  const products = use(productsPromise);
  const [activeTab, setActiveTab] = useState("products");

  const handleRemove = (item) => {
    const filtered = cartItems.filter((c) => c.id !== item.id);
    setCartItems(filtered);
    toast.error(`${item.name} removed from cart`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty!");
      return;
    }
    setCartItems([]);
    toast.success("Checkout successful! ");
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto max-w-6xl px-4 my-16">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl text-black  font-bold">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-10">
        <div className="flex">
          <button
            onClick={() => setActiveTab("products")}
            className={`btn rounded-r-none rounded-l-full px-8 border-0 ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`btn rounded-l-none rounded-r-full px-8 border-0 ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Cart ({cartItems.length})
          </button>
        </div>
      </div>

       {/* Products Grid  */}
      {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      )}

      {/* Cart Grid */}
      {activeTab === "cart" && (
        <div className="max-w-2xl mx-auto">
          <div className="card  shadow-md border border-gray-100 p-6">
           

            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <img src="/package.png" alt="Empty cart" className="w-20 opacity-30" />
                <p className="text-black font-medium">Your cart is empty</p>
                <p className="text-black text-sm">Go to Products tab to add items</p>
              </div>
            ) : (
              <>
               
                <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                  My Cart
                </p>
                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      handleRemove={handleRemove}
                    />
                  ))}
                </div>

                <div className="divider"></div>

                <div className="flex justify-between items-center mb-6">
                  <span className="font-semibold text-gray-600">Total</span>
                  <span className="text-xl font-bold text-purple-600">
                    ${totalPrice}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn w-full bg-purple-600 text-white hover:bg-purple-700 border-0 rounded-full"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
