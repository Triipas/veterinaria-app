using Microsoft.AspNetCore.Mvc;

namespace VeterinariaApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Veterinaria App - Inicio";
            return View();
        }
    }
}