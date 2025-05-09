using BusinessObject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public interface IProductRepository
    {

        void SaveProduct(Product product);
        void DeleteProduct(Product product);

        void UpdateProduct(Product product);
        List<Product> GetProducts();
        Product GetProductById(int id);
    }
}
