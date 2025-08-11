using Microsoft.AspNetCore.Mvc;
using VeterinariaApp.Models;

namespace VeterinariaApp.Controllers
{
    public class ClienteController : Controller
    {
        // Lista estática para simular base de datos
        private static List<Cliente> _clientes = new List<Cliente>();
        
        public IActionResult Index()
        {
            var clientesActivos = _clientes.Where(c => c.Activo).ToList();
            return View(clientesActivos);
        }
        
        public IActionResult Registrar()
        {
            return View(new Cliente());
        }
        
        [HttpPost]
        public IActionResult Registrar(Cliente cliente)
        {
            if (ModelState.IsValid)
            {
                // Por ahora solo mostramos mensaje básico
                ViewBag.Mensaje = "Cliente registrado correctamente (funcionalidad básica)";
                return View(new Cliente());
            }
            
            return View(cliente);
        }
        
        public IActionResult Directorio()
        {
            return View(_clientes.Where(c => c.Activo).ToList());
        }
    }
}