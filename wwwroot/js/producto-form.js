// Funcionalidad JavaScript para formularios de productos
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.producto-form');
    const precioInput = document.querySelector('input[name="Precio"]');
    const stockInput = document.querySelector('input[name="Stock"]');
    
    // Formatear precio en tiempo real
    if (precioInput) {
        precioInput.addEventListener('input', function() {
            const value = parseFloat(this.value);
            if (!isNaN(value) && value > 0) {
                const formatted = value.toLocaleString('es-PE', {
                    style: 'currency',
                    currency: 'PEN'
                });
                
                // Mostrar preview del precio
                let preview = document.querySelector('.precio-preview');
                if (!preview) {
                    preview = document.createElement('small');
                    preview.className = 'precio-preview text-muted';
                    this.parentNode.appendChild(preview);
                }
                preview.textContent = `Vista previa: ${formatted}`;
            }
        });
    }
    
    // Validar stock
    if (stockInput) {
        stockInput.addEventListener('input', function() {
            const value = parseInt(this.value);
            let preview = document.querySelector('.stock-preview');
            
            if (!preview) {
                preview = document.createElement('small');
                preview.className = 'stock-preview';
                this.parentNode.appendChild(preview);
            }
            
            if (value < 5) {
                preview.textContent = '⚠️ Stock crítico';
                preview.className = 'stock-preview text-danger';
            } else if (value < 10) {
                preview.textContent = '⚠️ Stock bajo';
                preview.className = 'stock-preview text-warning';
            } else {
                preview.textContent = '✅ Stock normal';
                preview.className = 'stock-preview text-success';
            }
        });
    }
    
    // Sugerencias por categoría
    const categoriaSelect = document.querySelector('select[name="Categoria"]');
    const nombreInput = document.querySelector('input[name="Nombre"]');
    
    const sugerenciasPorCategoria = {
        'Alimento': ['Premium', 'Cachorro', 'Adulto', 'Senior', 'Dietético'],
        'Juguetes': ['Interactivo', 'Mordedor', 'Pelota', 'Cuerda', 'Squeaky'],
        'Higiene': ['Shampoo', 'Acondicionador', 'Cepillo', 'Cortaúñas', 'Desodorante'],
        'Medicamentos': ['Antiparasitario', 'Vitaminas', 'Antibiótico', 'Analgésico'],
        'Accesorios': ['Collar', 'Correa', 'Placa', 'Ropa', 'Bandana'],
        'Camas y Casas': ['Cama', 'Casa', 'Manta', 'Cojín', 'Refugio'],
        'Transporte': ['Transportadora', 'Arnés', 'Cinturón', 'Bolso']
    };
    
    if (categoriaSelect && nombreInput) {
        categoriaSelect.addEventListener('change', function() {
            const categoria = this.value;
            if (sugerenciasPorCategoria[categoria]) {
                // Mostrar sugerencias
                let sugerencias = document.querySelector('.nombre-sugerencias');
                if (!sugerencias) {
                    sugerencias = document.createElement('div');
                    sugerencias.className = 'nombre-sugerencias';
                    nombreInput.parentNode.appendChild(sugerencias);
                }
                
                sugerencias.innerHTML = `
                    <small class="text-muted">
                        💡 Sugerencias: ${sugerenciasPorCategoria[categoria].join(', ')}
                    </small>
                `;
            }
        });
    }
    
    // Animación de envío
    form.addEventListener('submit', function() {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '⏳ Creando...';
        submitBtn.disabled = true;
    });
});