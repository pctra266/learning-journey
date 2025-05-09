using Microsoft.AspNetCore.Mvc;
using Services;

namespace ProductManagementMVC.Controllers
{
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }
        public IActionResult Login()
        {
            return View();
        }

        //[HttpPost]
        //public IActionResult Login(AccountMember account)
        //{
        //    var acc = _contextAccount.GetAccountById(account.MemberId);
        //    if (acc == null)
        //    {
        //        TempData["Noti"] = "account not found";
                
        //    }
        //    else
        //    {
        //        TempData["Noti"] = "login successfully";
        //    }
        //        return View();
        //}

        [HttpPost]
        public IActionResult Login(AccountMember model)
        {
            var user = _accountService.GetAccountById(model.MemberId);

            if (user != null)
            {
                if ( user.MemberPassword == model.MemberPassword)
                {
                    // Store user information in session
                    HttpContext.Session.SetString("UserId", user.MemberId);
                    HttpContext.Session.SetString("Username", user.FullName);

                    return RedirectToAction("Index", "Products"); // Redirect to home page
                }
                else
                {
                    ModelState.AddModelError("", "Invalid username or password.");
                }
            }
            //TempData["Noti"] = "account not found";
            return View(model);
        }
        public IActionResult Logout()
        {
            HttpContext.Session.Clear(); // Clear session data
            return RedirectToAction("Login");
        }




    }
}
