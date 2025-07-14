import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductDetail from '../components/ProductDetail';
import ProductList from '../components/ProductList';

const Products = () => {
  const [products,setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("http://localhost:4000/api/products");
      setProducts(res.data);
      setSelectedProduct(res.data[0]); 
    };
    fetchProduct();
  }, []);
  return (
    <div className="flex justify-between">
      <ProductDetail product={selectedProduct} />
      <ProductList products={products} onSelect={setSelectedProduct} />
    </div>
  );
}

export default Products