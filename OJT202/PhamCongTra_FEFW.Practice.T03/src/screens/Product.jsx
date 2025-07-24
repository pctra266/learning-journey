import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import ProductList from '../components/ProductList';
import { getAllProducts,
    getAllCategories,
    getAllCompanies,
    searchProducts,
    filterProducts,
    sortProducts, } from '../services/apiService';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filters, setFilters] = useState({ search: '', category: 'all', company: 'all', sort: '', order: 'asc' });
  const [view, setView] = useState('grid');

  useEffect(() => {
    getAllCategories().then(res => setCategories(res.data));
    getAllCompanies().then(res => setCompanies(res.data));
  }, []);

  useEffect(() => {
    const { search, category, company, sort, order } = filters;
    if (search) {
      searchProducts(search).then(res => setProducts(res.data));
    } else if (category !== 'all' || company !== 'all') {
      const filterParams = {};
      if (category !== 'all') filterParams.category = category;
      if (company !== 'all') filterParams.company = company;
      filterProducts(filterParams).then(res => setProducts(res.data));
    } else if (sort) {
      sortProducts(sort, order).then(res => setProducts(res.data));
    } else {
      getAllProducts().then(res => setProducts(res.data));
    }
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({ search: '', category: 'all', company: 'all', sort: '', order: 'asc' });
  };

  return (
    <div className="flex container mx-auto py-6 space-x-6">
      <Sidebar
        categories={categories}
        companies={companies}
        filters={filters}
        onFilterChange={handleFilterChange}
        onClear={clearFilters}
      />

      <div className="flex-1">
        <TopBar
          search={filters.search}
          onSearchChange={val => handleFilterChange('search', val)}
          sort={filters.sort}
          onSortChange={val => handleFilterChange('sort', val)}
          view={view}
          onViewChange={setView}
          total={products.length}
        />

        <ProductList products={products} viewType={view} />
      </div>
    </div>
  );
};

export default Product;