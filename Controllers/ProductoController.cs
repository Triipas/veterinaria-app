using Microsoft.AspNetCore.Mvc;
using VeterinariaApp.Models;

namespace VeterinariaApp.Controllers
{
    public class ProductoController : Controller
    {
        // Lista estática para simular base de datos
        private static List<Producto> _productos = new List<Producto>();
        
        public IActionResult Index()
        {
            var productosActivos = _productos.Where(p => p.Activo).ToList();
            return View(productosActivos);
        }
        
        public IActionResult Crear()
        {
            return View(new Producto());
        }
        
        [HttpPost]
        public IActionResult Crear(Producto producto)
        {
            if (ModelState.IsValid)
            {
                // Por ahora solo mostramos mensaje básico
                ViewBag.Mensaje = "Producto creado correctamente (funcionalidad básica)";
                return View(new Producto());
            }
            
            return View(producto);
        }
        
        public IActionResult Inventario()
        {
            return View(_productos.Where(p => p.Activo).ToList());
        }
    }
}