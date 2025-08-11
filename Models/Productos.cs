using System.ComponentModel.DataAnnotations;

namespace VeterinariaApp.Models
{
    public class Producto
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "El nombre del producto es obligatorio")]
        [StringLength(100, ErrorMessage = "El nombre no puede exceder 100 caracteres")]
        public string Nombre { get; set; } = string.Empty;
        
        [Required(ErrorMessage = "La categoría es obligatoria")]
        public string Categoria { get; set; } = string.Empty;
        
        [StringLength(500, ErrorMessage = "La descripción no puede exceder 500 caracteres")]
        public string Descripcion { get; set; } = string.Empty;
        
        [Required(ErrorMessage = "El precio es obligatorio")]
        [Range(0.01, 10000, ErrorMessage = "El precio debe estar entre $0.01 y $10,000")]
        public decimal Precio { get; set; }
        
        [Required(ErrorMessage = "El stock es obligatorio")]
        [Range(0, int.MaxValue, ErrorMessage = "El stock no puede ser negativo")]
        public int Stock { get; set; }
        
        [StringLength(50, ErrorMessage = "La marca no puede exceder 50 caracteres")]
        public string Marca { get; set; } = string.Empty;
        
        public DateTime FechaIngreso { get; set; } = DateTime.Now;
        
        public bool Activo { get; set; } = true;
    }
}