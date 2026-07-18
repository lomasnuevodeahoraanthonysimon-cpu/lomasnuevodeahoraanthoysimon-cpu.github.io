/**
 * Anthony Simon | Cybersecurity Portfolio
 * Core Interactivity & UI Events
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("[✔] Sistema de Portafolio S.Cyber.do inicializado de forma segura.");

    // 1. Control de Barra de Navegación Dinámica (Scroll)
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }, { passive: true }); // 'passive' optimiza enormemente el rendimiento en móviles
    }

    // 2. Sistema de Menú Desplegable Responsivo (Mobile Hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Cambiar dinámicamente el icono de barras (☰) a una equis (✕) al abrir
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Cerrar el menú móvil automáticamente al hacer clic en cualquier opción de navegación
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }
});
