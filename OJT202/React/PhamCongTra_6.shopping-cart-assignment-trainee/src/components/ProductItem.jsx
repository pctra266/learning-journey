import React from 'react'

const ProductItem = ({ product, onSelect }) => {
    return (
        <div className="flex gap-2 p-2 bg-white shadow-md mt-1.5">
          <img src={product.img} alt={product.productName} className="w-16 h-16 object-cover" />
          <div className="flex-1">
            <h4 className="font-bold">{product.productName}</h4>
            <p className='text-[13px]'>{product.description}</p>
            <div className='flex justify-between'>
            <p className='font-semibold'>${product.price.toFixed(2)}</p>
            <button className="text-blue-500 cursor-pointer" onClick={() => onSelect(product)}>Details</button>
            </div>
          </div>
        </div>
      );
}

export default ProductItem