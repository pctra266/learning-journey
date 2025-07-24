import axios from 'axios';

const BASE_URL = 'http://localhost:8888';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = () => api.get('/products');

export const getProductById = (id) => api.get(`/products/${id}`);

export const searchProducts = (query) =>
  api.get('/products', { params: { q: query } });

export const filterProducts = (filters) =>
  api.get('/products', { params: filters });

export const sortProducts = (sortBy, order = 'asc') =>
  api.get('/products', {
    params: {
      _sort: sortBy,
      _order: order,
    },
  });

export const getAllCategories = () => api.get('/categories');

export const getAllCompanies = () => api.get('/companies');
