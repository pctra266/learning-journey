using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BusinessObject;
using Service;

namespace ProductMangementRazorPage.Pages.Products
{
    public class IndexModel : PageModel
    {
        private readonly IProductService _contextProduct;

        public IndexModel(IProductService context)
        {
            _contextProduct = context;
        }



        public IList<Product> Product { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Product = _contextProduct.GetProducts();
        }
    }
}
