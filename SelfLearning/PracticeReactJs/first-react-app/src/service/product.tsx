import instance from './axios';

const productService = {
  // Lấy tất cả sản phẩm
  getAll: () => instance.get('/products'),

  // Lấy 1 sản phẩm theo ID
  getById: (id: number) => instance.get(`/products/${id}`),

  // Tạo mới sản phẩm
  create: (product: {
    name: string;
    price: number;
    description?: string;
    inStock?: boolean;
  }) => instance.post('/products', product),

  // Cập nhật sản phẩm
  update: (id: number, updatedProduct: Partial<{
    name: string;
    price: number;
    description: string;
    inStock: boolean;
  }>) => instance.patch(`/products/${id}`, updatedProduct),

  // Xóa sản phẩm
  delete: (id: number) => instance.delete(`/products/${id}`),
};

export default productService;
