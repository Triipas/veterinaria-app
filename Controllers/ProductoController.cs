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
                // Asignar ID automático
                producto.Id = _productos.Count > 0 ? _productos.Max(p => p.Id) + 1 : 1;
                producto.FechaIngreso = DateTime.Now;
                
                // Agregar a la lista
                _productos.Add(producto);
                
                TempData["SuccessMessage"] = $"¡Producto '{producto.Nombre}' creado exitosamente!";
                return RedirectToAction("Index");
            }
            
            return View(producto);
        }
        
        public IActionResult Inventario()
        {
            return View(_productos.Where(p => p.Activo).ToList());
        }
    }
}