using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessObjects;

namespace Repositories
{
    public class ProductRepository : IProductRepository
    {
        public void DeleteProduct(Product product) => ProductDAO.DeleteProduct(product);

        public Product GetProductById(int id) => ProductDAO.GetProductById(id);

        public List<Product> GetProducts() => ProductDAO.GetProducts();

        public void SaveProduct(Product product) => ProductDAO.SaveProduct(product);

        public void UpdateProduct(Product product) => ProductDAO.UpdateProduct(product);
    }
}
