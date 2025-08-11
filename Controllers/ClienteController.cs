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
                // Verificar email duplicado
                if (_clientes.Any(c => c.Email.ToLower() == cliente.Email.ToLower()))
                {
                    ModelState.AddModelError("Email", "Ya existe un cliente con este email");
                    return View(cliente);
                }
                
                // Asignar ID automático
                cliente.Id = _clientes.Count > 0 ? _clientes.Max(c => c.Id) + 1 : 1;
                cliente.FechaRegistro = DateTime.Now;
                
                // Agregar a la lista
                _clientes.Add(cliente);
                
                TempData["SuccessMessage"] = $"¡Cliente '{cliente.NombreCompleto}' registrado exitosamente!";
                return RedirectToAction("Index");
            }
            
            return View(cliente);
        }
        
        public IActionResult Directorio()
        {
            return View(_clientes.Where(c => c.Activo).ToList());
        }
    }
}