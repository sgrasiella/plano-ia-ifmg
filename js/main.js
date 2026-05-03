// main.js - Lógica de interações da Plataforma IFMG.IA

document.addEventListener('DOMContentLoaded', () => {
    
    // Configuração do Navbar Scroll
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger inicial

    // Menu Mobile Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if(mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Altera ícone para X quando aberto
            if(navLinks.classList.contains('active')){
                mobileMenuBtn.innerHTML = '✕';
            } else {
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    }

    // Animações Fade-in On Scroll usando IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));


    // Lógica para Tabs de Tutoriais (se existirem na página)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if(tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                
                // Remove active de todos
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active-content'));
                
                // Adiciona active ao atual
                button.classList.add('active');
                const targetContent = document.getElementById(targetId);
                if(targetContent) {
                    targetContent.classList.add('active-content');
                }
            });
        });
    }

});
