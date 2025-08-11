using Microsoft.AspNetCore.Mvc;
using VeterinariaApp.Models;

namespace VeterinariaApp.Controllers
{
    public class MascotaController : Controller
    {
        // Lista estática para simular base de datos
        private static List<Mascota> _mascotas = new List<Mascota>();
        
        public IActionResult Index()
        {
            return View(_mascotas);
        }
        
        public IActionResult Registro()
        {
            return View(new Mascota());
        }
        
        [HttpPost]
        public IActionResult Registro(Mascota mascota)
        {
            if (ModelState.IsValid)
            {
                // Por ahora solo mostramos un mensaje de éxito
                ViewBag.Mensaje = "Mascota registrada correctamente (funcionalidad básica)";
                return View(new Mascota());
            }
            
            return View(mascota);
        }
    }
}