// Menu mobile
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scroll pour les liens du menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Fermer le menu mobile après clic
        menu.classList.remove('active');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
};

// Validation du formulaire de contact
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    // Validation simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer un email valide.');
        return;
    }
    
    // Si tout est valide
    alert('Message envoyé avec succès !');
    contactForm.reset();
});

// Animation du bouton CTA au hover
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transition = 'all 0.3s ease';
    });
});

// Fermer le menu mobile quand on clique en dehors
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Gestion du scroll pour le header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Initialisation
window.onload = () => {
    const header = document.querySelector('header');
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    }
};