// Animazione dello scroll fluido per i link interni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animazione delle feature cards al caricamento
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Carica direttamente l'iframe del progetto Scratch
document.addEventListener('DOMContentLoaded', function() {
    const scratchFrame = document.querySelector('.scratch-frame');
    const placeholder = document.querySelector('.placeholder');
    
    // Rimuovi il placeholder
    placeholder.style.display = 'none';
    
    // Crea l'iframe per il progetto Scratch
    const iframe = document.createElement('iframe');
    iframe.src = 'https://scratch.mit.edu/projects/1156817768/embed';  // URL vecchio: 1153932087
    iframe.allowTransparency = true;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.allowFullscreen = true;
    
    // Aggiungi l'iframe al frame
    scratchFrame.appendChild(iframe);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}); 