// Funciones JavaScript básicas para la aplicación
document.addEventListener('DOMContentLoaded', function() {
    console.log('Veterinaria App cargada correctamente');
    
    // Animación simple para las tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
});