using BusinessObject;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productService;
        public ProductService()
        {
            _productService = new ProductRepository();
        }
        public void DeleteProduct(Product product)
        {
            _productService.DeleteProduct(product);
        }

        public Product GetProductById(int id)
        {
            return _productService.GetProductById(id);
        }

        public List<Product> GetProducts()
        {
            return _productService.GetProducts();
        }

        public void SaveProduct(Product product)
        {
            _productService.SaveProduct(product);
        }

        public void UpdateProduct(Product product)
        {
            _productService.UpdateProduct(product);
        }
    }
}
