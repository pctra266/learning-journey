import axios from 'axios';

const API_BASE = 'http://localhost:8888/api/customers';

export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching all customers:', error);
    throw error;
  }
};

export const getCustomerById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching customer with id ${id}:`, error);
    throw error;
  }
};
