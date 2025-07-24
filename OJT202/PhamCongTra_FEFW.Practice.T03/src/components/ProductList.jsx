import React from 'react';
import { Link } from "react-router-dom";

const ProductList = ({ products, viewType }) => {
  const containerClasses =
    viewType === 'grid'
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
      : 'flex flex-col space-y-4';

  return (
    <div className={containerClasses}>
      {products.map((prod) => {
        if (viewType === 'grid') {
          return (
            <div key={prod.id} className="border rounded p-4 flex flex-col">
              <Link to={`/products/${prod.id}`} className="block mb-2">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-32 object-cover rounded"
                />
              </Link>
              <h4 className="text-blue-600 font-semibold">{prod.name}</h4>
              <p className="text-yellow-600 font-bold">${prod.price}</p>
              <p className="text-sm"><span className="font-semibold">Category:</span> {prod.category}</p>
              <p className="text-sm"><span className="font-semibold">Company:</span> {prod.company}</p>
            </div>
          );
        }

        return (
          <div key={prod.id} className="border rounded p-4 flex flex-row">
            <Link to={`/products/${prod.id}`} className="block mr-4">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-32 h-32 object-cover rounded"
              />
            </Link>
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{prod.name}</h4>
              <p className="font-bold text-yellow-600">${prod.price}</p>
              <p className="text-sm">Category: {prod.category}</p>
              <p className="text-sm">Company: {prod.company}</p>
              <p className="text-gray-600 text-sm mt-1">
                {prod.description.substring(0, 100)}...
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
