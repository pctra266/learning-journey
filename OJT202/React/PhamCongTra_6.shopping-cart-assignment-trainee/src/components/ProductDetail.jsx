import {useState} from 'react'
import QuantitySelector from "./QuantitySelector";
import { addToCart } from "../service/cartService";

const ProductDetail = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  if (!product) return <div className="w-2/3 p-4">Select a product to view details</div>;
  const totalPrice = (product.price * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    window.location.reload();
  };

    return (
    <div className=" w-2/3  p-4">
      <div className="gap-4 bg-white shadow-md p-2.5">
        <img src={product.img} alt={product.productName} className="w-64 h-64 object-cover" />
        <div>
          <h2 className="text-2xl font-bold">{product.productName}</h2>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4 flex items-center justify-between gap-4">
          <div >
            <QuantitySelector value={quantity} onChange={setQuantity} />
          </div>
          <div>
            <span className="text-xl font-bold mr-3.5">${totalPrice}</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail