using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repositories;

namespace Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository iProductRepository;
        public ProductService()
        {
            iProductRepository = new ProductRepository();
        }
        public void DeleteProduct(Product product)
        {
            iProductRepository.DeleteProduct(product);
        }

        public Product GetProductById(int id)
        {
            return iProductRepository.GetProductById(id);
        }

        public List<Product> GetProducts()
        {
            return iProductRepository.GetProducts();
        }

        public void SaveProduct(Product product)
        {
            iProductRepository.SaveProduct(product);
        }

        public void UpdateProduct(Product product)
        {
            iProductRepository.UpdateProduct(product);
        }
    }
}
