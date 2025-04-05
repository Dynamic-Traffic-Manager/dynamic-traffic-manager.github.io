// Animazione dello scroll fluido per i link interni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animazione delle feature cards al caricamento
const observerOptions = {
    threshold: 0.1
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

// Funzione per caricare il progetto Scratch
function loadScratchProject() {
    const scratchFrame = document.querySelector('.scratch-frame');
    const placeholder = document.querySelector('.placeholder');
    
    // Qui dovrai sostituire l'URL con quello del tuo progetto Scratch
    const scratchProjectUrl = 'URL_DEL_TUO_PROGETTO_SCRATCH';
    
    // Rimuovi il placeholder
    placeholder.style.display = 'none';
    
    // Crea l'iframe per il progetto Scratch
    const iframe = document.createElement('iframe');
    iframe.src = scratchProjectUrl;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    // Aggiungi l'iframe al frame
    scratchFrame.appendChild(iframe);
}

// Aggiungi un event listener per caricare il progetto Scratch quando l'utente clicca sul placeholder
document.querySelector('.placeholder').addEventListener('click', loadScratchProject); 