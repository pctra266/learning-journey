using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessObjects;

namespace Repositories
{
    public class CatergoryRepository : ICatergoryRepository
    {
        public List<Category> GetCategories() => CategoryDAO.GetCategories();
    }
}
