using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Services;

namespace ProductManagementMVC.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductService _contextProduct;
        private readonly ICatergoryService _contextCategory;
        //private readonly ILogger<Index> _logger;

        public ProductsController(IProductService contextProduct, ICatergoryService contextCategory)
        {
            _contextProduct = contextProduct;
            _contextCategory = contextCategory;
        }



        // GET: Products
        public IActionResult Index()
        {
            if (HttpContext.Session.GetString("UserId") == null)
            {
                // Redirect to the login page or display an error message
                return RedirectToAction("Login", "Account");
            }

            var myStoreDbContext = _contextProduct.GetProducts();
            return View(myStoreDbContext.ToList());
        }

        // GET: Products/Details/5
        public async Task<IActionResult> Details(int id)
        {
            if (id <= 0)
            {
                return NotFound();
            }

            var product = _contextProduct.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }

        // GET: Products/Create
        public IActionResult Create()
        {
            ViewBag.CategoryId = new SelectList(_contextCategory.GetCategories(), "CategoryId", "CategoryName");
            return View();
        }

        // POST: Products/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Create( Product product)
        {
            //_logger.LogInformation("da vao day nhe");
            //if (ModelState.IsValid)
            //{
            //    _contextProduct.SaveProduct(product);

            //    return RedirectToAction(nameof(Index));
            //}
            _contextProduct.SaveProduct(product);

            //ViewData["CategoryId"] = new SelectList(_contextCategory.GetCategories(), "CategoryId", "CategoryName", product.CategoryId);
            TempData["Noti"] = "toi la tra";
            return RedirectToAction("Index");
        }

        // GET: Products/Edit/5
        public  IActionResult Edit(int id)
        {
            if (id <= 0)
            {
                return View("Error");
            }

            var product = _contextProduct.GetProductById(id);
            if (product == null)
            {
                return View("Error");
            }
            ViewBag.CategoryId = new SelectList(_contextCategory.GetCategories(), "CategoryId", "CategoryName", product.CategoryId);
            return View(product);
        }

        // POST: Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        //public  IActionResult Edit(int id, [Bind("ProductId,ProductName,CategoryId,UnitsInStock,UnitPrice")] Product product)
        public  IActionResult Edit(Product product)
        {
            //if (id != product.ProductId)
            //{
            //    return NotFound();
            //}

            if(product is null)
            {
                return View("Error");
            }
            _contextProduct.UpdateProduct(product);
            //if (ModelState.IsValid)
            //{
            //    try
            //    {
            //        _contextProduct.UpdateProduct(product);
            //    }
            //    catch (DbUpdateConcurrencyException)
            //    {
            //        if (!ProductExists(product.ProductId))
            //        {
            //            return NotFound();
            //        }
            //        else
            //        {
            //            throw;
            //        }
            //    }
            //    return RedirectToAction(nameof(Index));
            //}


            //ViewData["CategoryId"] = new SelectList(_contextCategory.GetCategories(), "CategoryId", "CategoryName", product.CategoryId);
            //return View(product);

            return RedirectToAction("Index");
        }

        // GET: Products/Delete/5
        public  IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return View("Error");
            }

            var product = _contextProduct.GetProductById((int)id);
            if (product == null)
            {
                return View("Error");
            }
            _contextProduct.DeleteProduct(product);
            return RedirectToAction("Index");
        }

        // POST: Products/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(int id)
        //{
        //    var product = _contextProduct.GetProductById(id);
        //    if (product != null)
        //    {
        //        _contextProduct.DeleteProduct(product);
        //    }

           
        //    return RedirectToAction(nameof(Index));
        //}

        private bool ProductExists(int id)
        {
            var tmp = _contextProduct.GetProductById(id);
            return (tmp != null) ? true : false;

        }
    }
}
