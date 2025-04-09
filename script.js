

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

document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation checks
            if (!name || name.length < 2) {
                showError('name', 'Inserisci un nome valido (minimo 2 caratteri)');
                return;
            }
            
            if (!email || !isValidEmail(email)) {
                showError('email', 'Inserisci un indirizzo email valido');
                return;
            }
            
            if (!subject || subject.length < 5) {
                showError('subject', 'L\'oggetto deve contenere almeno 5 caratteri');
                return;
            }
            
            if (!message || message.length < 10) {
                showError('message', 'Il messaggio deve contenere almeno 10 caratteri');
                return;
            }
            
            // If all validations pass, prepare the email
            const mailtoLink = `mailto:dynamictrafficmanager@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`
            )}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form and show success message
            contactForm.reset();
            showSuccess('Messaggio preparato con successo! Apri il tuo client email per inviarlo.');
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback d-block';
    errorDiv.textContent = message;
    
    // Remove any existing error message
    const existingError = field.parentElement.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }
    
    field.classList.add('is-invalid');
    field.parentElement.appendChild(errorDiv);
    
    // Focus on the field with error
    field.focus();
}

function showSuccess(message) {
    // Create success alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert alert before the form
    const form = document.getElementById('contactForm');
    form.parentElement.insertBefore(alertDiv, form);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alertDiv);
        bsAlert.close();
    }, 5000);
} 