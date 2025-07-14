import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { getCart,saveCart,clearCart  } from "../service/cartService";
import { toast } from "react-toastify";
import axios from "axios";


const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);
  
  const updateQuantity = (productId, delta) => {
    const updated = cart
      .map((item) =>
        item.product.productId === productId
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter((item) => item.quantity > 0); 
    setCart(updated);
    saveCart(updated);
    window.location.reload();
  };

  const removeItem = (productId) => {
    const newCart = cart.filter(
      (item) => item.product.productId !== productId
    );
    setCart(newCart);
    saveCart(newCart);
    window.location.reload();
  };
  const handleCheckout = async () => {
    if (!window.confirm("Do you want to purchase?")) return;

    setLoading(true);
    try {
      
      const body = {
        paySuccess: true,
        productsInOrder: cart.map((item) => ({
          productId: item.product.productId,
          quantity: item.quantity,
        })),
      };
      const res = await axios.post("http://localhost:4000/api/checkout", body);
      if (res.status === 201 && res.data.success) {
        clearCart();
        setCart([]);
        toast.success("👏 Thank you for purchased!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (err) {
      window.location.reload();
      toast.error("Something went wrong!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } finally {
      setLoading(false);
      
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white">
        <h2 className="text-center font-semibold text-lg py-4 shadow-md">
          My Shopping Cart
        </h2>
        <div className="flex flex-col md:flex-row p-6 gap-4 bg-gray-100">
          {/* Left: Cart Content */}
          <div className="flex-1">
            {cart.length === 0 ? (
              <div className="flex items-center justify-center text-gray-700 font-semibold text-lg h-full">
                You have no products in cart
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.productId}
                    className="flex items-center gap-4 bg-white p-4 rounded shadow"
                  >
                    <img
                      src={item.product.img}
                      alt={item.product.productName}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">
                        {item.product.productName}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {item.product.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.productId, -1)
                          }
                          className="px-2 py-1 border rounded text-orange-500 disabled:opacity-40"
                        >
                          −
                        </button>
                        <span className="px-4 text-md">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.productId, 1)
                          }
                          disabled={item.quantity >= 99}
                          className="px-2 py-1 border rounded text-orange-500 disabled:opacity-40"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Price & Delete */}
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-blue-600 font-bold text-lg">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.productId)}
                        className="text-red-500 hover:text-red-700 text-xl"
                        title="Remove"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Order Info */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-md shadow p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Order Info</h3>
              <div className="flex justify-between mb-2 text-sm">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Shipping Cost:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-3 mt-3 font-bold text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                disabled={cart.length === 0 || loading}
                onClick={handleCheckout}
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:opacity-70 flex items-center justify-center"
              >
                {loading ? (
                  <span className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                ) : null}
                Checkout
              </button>
              <Link
                to="/products"
                className="block text-center border border-blue-400 text-blue-500 py-2 rounded mt-2 hover:bg-blue-50 transition"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
