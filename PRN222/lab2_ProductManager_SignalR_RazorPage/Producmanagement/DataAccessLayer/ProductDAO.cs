using BusinessObject;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class ProductDAO
    {
        public static List<Product> GetProducts()
        {
            var list = new List<Product>();
            try
            {
                using var context = new MyStoreDbContext();
                list = context.Products.Include(x => x.Category).ToList();

            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            return list;
        }

        public static void SaveProduct(Product product)
        {
            try
            {
                var context = new MyStoreDbContext();
                context.Products.Add(product);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }

        }

        public static void UpdateProduct(Product product)
        {
            try
            {
                var context = new MyStoreDbContext();
                context.Entry<Product>(product).State
                    = Microsoft.EntityFrameworkCore.EntityState.Modified;
                context.SaveChanges();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public static void DeleteProduct(Product product)
        {
            try
            {
                var context = new MyStoreDbContext();
                var p1 =
                    context.Products.SingleOrDefault(c => c.ProductId == product.ProductId);
                context.Products.Remove(p1);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public static Product? GetProductById(int id)
        {
            var context = new MyStoreDbContext();
            return context.Products.FirstOrDefault(x => x.ProductId == id);
        }
    }
}
