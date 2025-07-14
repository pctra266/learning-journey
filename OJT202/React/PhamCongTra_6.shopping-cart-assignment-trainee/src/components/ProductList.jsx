import React from 'react'
import ProductItem from "./ProductItem"

const ProductList = ({ products, onSelect }) => {
    if(!products) return <div>loading ...</div>
    return (
        <div className="w-1/3 overflow-y-auto h-screen p-2">
          {products.map(product => (
            <ProductItem key={product.productId} product={product} onSelect={onSelect} />
          ))}
        </div>
      );
}

export default ProductList