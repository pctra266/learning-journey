using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repositories;

namespace Services
{
    public class CategoryService : ICatergoryService
    {
        private readonly ICatergoryRepository iCatergoryRepository;

        public CategoryService()
        {
            iCatergoryRepository = new CatergoryRepository();
        }
        public List<Category> GetCategories()
        {
            return iCatergoryRepository.GetCategories();
        }
    }
}
