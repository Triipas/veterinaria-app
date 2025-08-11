// Funcionalidad JavaScript para formularios de clientes
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.cliente-form');
    const emailInput = document.querySelector('input[name="Email"]');
    const telefonoInput = document.querySelector('input[name="Telefono"]');
    
    // Validar email en tiempo real
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            let feedback = document.querySelector('.email-feedback');
            if (!feedback) {
                feedback = document.createElement('small');
                feedback.className = 'email-feedback';
                this.parentNode.appendChild(feedback);
            }
            
            if (email && !emailRegex.test(email)) {
                feedback.textContent = '❌ Formato de email inválido';
                feedback.className = 'email-feedback text-danger';
                this.classList.add('error');
            } else if (email) {
                feedback.textContent = '✅ Email válido';
                feedback.className = 'email-feedback text-success';
                this.classList.remove('error');
            } else {
                feedback.textContent = '';
                this.classList.remove('error');
            }
        });
    }
    
    // Formatear teléfono automáticamente
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, ''); // Solo números
            
            // Formato peruano: +51 999 999 999
            if (value.length >= 9) {
                if (value.startsWith('51')) {
                    value = '+51 ' + value.slice(2, 5) + ' ' + value.slice(5, 8) + ' ' + value.slice(8, 11);
                } else if (value.length === 9) {
                    value = '+51 ' + value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 9);
                }
            }
            
            this.value = value;
            
            // Mostrar feedback
            let feedback = document.querySelector('.telefono-feedback');
            if (!feedback) {
                feedback = document.createElement('small');
                feedback.className = 'telefono-feedback';
                this.parentNode.appendChild(feedback);
            }
            
            const cleanNumber = this.value.replace(/\D/g, '');
            if (cleanNumber.length >= 11 && cleanNumber.startsWith('51')) {
                feedback.textContent = '✅ Teléfono válido';
                feedback.className = 'telefono-feedback text-success';
            } else if (cleanNumber.length === 9) {
                feedback.textContent = '✅ Teléfono válido (se agregará +51)';
                feedback.className = 'telefono-feedback text-success';
            } else if (this.value) {
                feedback.textContent = '⚠️ Formato: +51 999 999 999';
                feedback.className = 'telefono-feedback text-warning';
            } else {
                feedback.textContent = '';
            }
        });
    }
    
    // Auto-completar ciudades peruanas
    const ciudadInput = document.querySelector('input[name="Ciudad"]');
    if (ciudadInput) {
        const ciudadesPeruanas = [
            'Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Piura', 'Iquitos', 
            'Cusco', 'Huancayo', 'Chimbote', 'Tacna', 'Ica', 'Pucallpa',
            'Cajamarca', 'Sullana', 'Ayacucho', 'Juliaca', 'Puno'
        ];
        
        ciudadInput.setAttribute('list', 'ciudades-peru');
        
        const datalist = document.createElement('datalist');
        datalist.id = 'ciudades-peru';
        
        ciudadesPeruanas.forEach(ciudad => {
            const option = document.createElement('option');
            option.value = ciudad;
            datalist.appendChild(option);
        });
        
        ciudadInput.parentNode.appendChild(datalist);
    }
    
    // Animación de envío
    form.addEventListener('submit', function() {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '⏳ Registrando...';
        submitBtn.disabled = true;
    });
});