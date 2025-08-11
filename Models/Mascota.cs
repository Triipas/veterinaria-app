using System.ComponentModel.DataAnnotations;

namespace VeterinariaApp.Models
{
    public class Mascota
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "El nombre es obligatorio")]
        [StringLength(50, ErrorMessage = "El nombre no puede exceder 50 caracteres")]
        public string Nombre { get; set; } = string.Empty;
        
        [Required(ErrorMessage = "La especie es obligatoria")]
        public string Especie { get; set; } = string.Empty;
        
        [Required(ErrorMessage = "La raza es obligatoria")]
        public string Raza { get; set; } = string.Empty;
        
        [Range(0, 50, ErrorMessage = "La edad debe estar entre 0 y 50 años")]
        public int Edad { get; set; }
        
        [Required(ErrorMessage = "El peso es obligatorio")]
        [Range(0.1, 200, ErrorMessage = "El peso debe estar entre 0.1 y 200 kg")]
        public decimal Peso { get; set; }
        
        [StringLength(100, ErrorMessage = "El nombre del propietario no puede exceder 100 caracteres")]
        public string Propietario { get; set; } = string.Empty;
        
        public DateTime FechaRegistro { get; set; } = DateTime.Now;
    }
}