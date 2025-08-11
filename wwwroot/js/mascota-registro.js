// Funcionalidad JavaScript para registro de mascotas
document.addEventListener('DOMContentLoaded', function() {
    
    // Validación en tiempo real
    const form = document.querySelector('.registro-form');
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
    
    // Validar campo individual
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Limpiar errores previos
        clearFieldError(field);
        
        // Validaciones específicas
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'Este campo es obligatorio');
            return false;
        }
        
        if (field.name === 'Nombre' && value.length > 50) {
            showFieldError(field, 'El nombre no puede exceder 50 caracteres');
            return false;
        }
        
        if (field.name === 'Edad') {
            const edad = parseInt(value);
            if (edad < 0 || edad > 50) {
                showFieldError(field, 'La edad debe estar entre 0 y 50 años');
                return false;
            }
        }
        
        if (field.name === 'Peso') {
            const peso = parseFloat(value);
            if (peso < 0.1 || peso > 200) {
                showFieldError(field, 'El peso debe estar entre 0.1 y 200 kg');
                return false;
            }
        }
        
        return true;
    }
    
    // Mostrar error en campo
    function showFieldError(field, message) {
        field.classList.add('error');
        const errorSpan = field.parentNode.querySelector('.text-danger');
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'block';
        }
    }
    
    // Limpiar error de campo
    function clearFieldError(field) {
        field.classList.remove('error');
        const errorSpan = field.parentNode.querySelector('.text-danger');
        if (errorSpan) {
            errorSpan.style.display = 'none';
        }
    }
    
    // Limpiar error al escribir
    function clearError(e) {
        const field = e.target;
        if (field.classList.contains('error')) {
            clearFieldError(field);
        }
    }
    
    // Sugerencias de razas basadas en especie
    const especieSelect = document.querySelector('select[name="Especie"]');
    const razaInput = document.querySelector('input[name="Raza"]');
    
    const razasPorEspecie = {
        'Perro': ['Labrador', 'Golden Retriever', 'Pastor Alemán', 'Bulldog', 'Chihuahua', 'Poodle'],
        'Gato': ['Persa', 'Siamés', 'Maine Coon', 'Británico de Pelo Corto', 'Bengalí', 'Ragdoll'],
        'Ave': ['Canario', 'Periquito', 'Loro', 'Cacatúa', 'Agapornis', 'Diamante Mandarín'],
        'Conejo': ['Holandés', 'Angora', 'Rex', 'Cabeza de León', 'Mini Lop', 'Gigante de Flandes'],
        'Hamster': ['Sirio', 'Roborovski', 'Chino', 'Ruso', 'Campbell', 'Europeo'],
        'Pez': ['Goldfish', 'Betta', 'Guppy', 'Tetra Neón', 'Angel', 'Platy']
    };
    
    if (especieSelect && razaInput) {
        especieSelect.addEventListener('change', function() {
            const especieSeleccionada = this.value;
            
            if (razasPorEspecie[especieSeleccionada]) {
                razaInput.setAttribute('list', 'razas-datalist');
                
                // Crear o actualizar datalist
                let datalist = document.getElementById('razas-datalist');
                if (!datalist) {
                    datalist = document.createElement('datalist');
                    datalist.id = 'razas-datalist';
                    razaInput.parentNode.appendChild(datalist);
                }
                
                datalist.innerHTML = '';
                razasPorEspecie[especieSeleccionada].forEach(raza => {
                    const option = document.createElement('option');
                    option.value = raza;
                    datalist.appendChild(option);
                });
                
                razaInput.placeholder = `Ej: ${razasPorEspecie[especieSeleccionada][0]}`;
            } else {
                razaInput.removeAttribute('list');
                razaInput.placeholder = 'Especificar raza';
            }
        });
    }
    
    // Animación de envío
    form.addEventListener('submit', function(e) {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '⏳ Registrando...';
        submitBtn.disabled = true;
    });
});