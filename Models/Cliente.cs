using System.ComponentModel.DataAnnotations;

namespace VeterinariaApp.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        
        [Required(ErrorMessage = "El nombre es obligatorio")]
        [StringLength(100, ErrorMessage = "El nombre no puede exceder 100 caracteres")]
        public string Nombre { get; set; } = string.Empty;
        
        [Required(ErrorMessage = "El apellido es obligatorio")]
        [StringLength(100, ErrorMessage = "El apellido no puede exceder 100 caracteres")]
        public string Apellido { get; set; } = string.Empty;
        
        [Required(ErrorMessage = "El email es obligatorio")]
        [EmailAddress(ErrorMessage = "Formato de email inválido")]
        public string Email { get; set; } = string.Empty;
        
        [Required(ErrorMessage = "El teléfono es obligatorio")]
        [Phone(ErrorMessage = "Formato de teléfono inválido")]
        [StringLength(20, ErrorMessage = "El teléfono no puede exceder 20 caracteres")]
        public string Telefono { get; set; } = string.Empty;
        
        [StringLength(200, ErrorMessage = "La dirección no puede exceder 200 caracteres")]
        public string Direccion { get; set; } = string.Empty;
        
        [StringLength(50, ErrorMessage = "La ciudad no puede exceder 50 caracteres")]
        public string Ciudad { get; set; } = string.Empty;
        
        public DateTime FechaRegistro { get; set; } = DateTime.Now;
        
        public bool Activo { get; set; } = true;
        
        // Propiedad calculada para nombre completo
        public string NombreCompleto => $"{Nombre} {Apellido}";
    }
}