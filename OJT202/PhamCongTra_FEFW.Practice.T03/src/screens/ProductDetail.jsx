import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/apiService';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
      >
        BACK TO PRODUCTS
      </button>

      <div className="flex flex-col md:flex-row space-x-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto rounded" />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl font-bold text-yellow-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <ul className="space-y-1 mb-4">
            <li><strong>Shipping:</strong> Free</li>
            <li><strong>Category:</strong> {product.category}</li>
            <li><strong>Brand:</strong> {product.company}</li>
          </ul>

          <div className="flex items-center space-x-2 mb-4">
            <button className="px-3 py-1 bg-yellow-400 rounded">-</button>
            <span>1</span>
            <button className="px-3 py-1 bg-yellow-400 rounded">+</button>
          </div>

          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;