// Manejo de eventos e interactividad del Portafolio Profesional
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio de Ciberseguridad de Anthony Simon inicializado.");

    // Cambiar dinámicamente la opacidad de la barra de navegación al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#0b111e';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Pequeño efecto visual en la terminal del logo al poner el cursor encima
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.letterSpacing = '1px';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.letterSpacing = 'normal';
    });
});
