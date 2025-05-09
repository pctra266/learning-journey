using BusinessObject;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryService;
        public CategoryService()
        {
            _categoryService = new CategoryRepository();
        }
        public List<Category> GetCategories()
        {
            return _categoryService.GetCategories();
        }
    }
}
