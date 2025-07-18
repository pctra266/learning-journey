import { useEffect, useState } from 'react';
import productService from '../service/product';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

const defaultForm = {
  name: '',
  price: 0,
  description: '',
  inStock: true,
};

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Omit<Product, 'id'>>(defaultForm);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    productService.getAll().then((res) => setProducts(res.data));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (editId === null) {
      await productService.create(form);
    } else {
      await productService.update(editId, form);
    }
    setForm(defaultForm);
    setEditId(null);
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setForm({
      name: product.name,
      price: product.price,
      description: product.description,
      inStock: product.inStock,
    });
    setEditId(product.id);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await productService.delete(id);
      fetchProducts();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Product Manager</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <label>
          In Stock
          <input
            type="checkbox"
            name="inStock"
            checked={form.inStock}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>
          {editId === null ? 'Add' : 'Update'}
        </button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - ${p.price} | {p.description} |{' '}
            {p.inStock ? '✅ In stock' : '❌ Out of stock'}
            <button onClick={() => handleEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
