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
                // Asignar ID automático
                mascota.Id = _mascotas.Count > 0 ? _mascotas.Max(m => m.Id) + 1 : 1;
                mascota.FechaRegistro = DateTime.Now;
                
                // Agregar a la lista
                _mascotas.Add(mascota);
                
                TempData["SuccessMessage"] = $"¡Mascota '{mascota.Nombre}' registrada exitosamente!";
                return RedirectToAction("Index");
            }
            
            return View(mascota);
        }
    }
}