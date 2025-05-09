using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BusinessObject;
using Service;

namespace ProductMangementRazorPage.Pages.Products
{
    public class EditModel : PageModel
    {
        private readonly IProductService _context;
        private readonly ICategoryService _categoryService;

        public EditModel(IProductService context, ICategoryService categoryService)
        {
            _context = context;
            _categoryService = categoryService;
        }


        [BindProperty]
        public Product Product { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = _context.GetProductById((int)id);
            if (product == null)
            {
                return NotFound();
            }
            Product = product;
            ViewData["CategoryId"] = new SelectList(_categoryService.GetCategories(), "CategoryId", "CategoryName");
            return Page();

        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more information, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            //if (!ModelState.IsValid)
            //{
            //    return Page();
            //}

            try
            {
                _context.UpdateProduct(Product);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(Product.ProductId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");

        }

        private bool ProductExists(int id)
        {
            return (_context.GetProductById(id) == null) ? true : false;
        }
    }
}
