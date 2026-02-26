// Modern SRE Portfolio — Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
});

// Navigation scroll effect
function initNavigation() {
    const nav = document.getElementById('nav');
    
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
    
    // Mobile menu toggle
    const toggle = document.getElementById('navtoggle');
    const navlinks = document.getElementById('navlinks');
    
    toggle?.addEventListener('click', () => {
        const isOpen = navlinks.classList.toggle('active');
        toggle.classList.toggle('active', isOpen);
    });
}

// Typing effect for hero
function initTypingEffect() {
    const text = "Site Reliability Engineer";
    const element = document.getElementById('typingtext');
    if (!element) return;
    
    let i = 0;
    const typeChar = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 100);
        }
    };
    
    // Start after small delay
    setTimeout(typeChar, 500);
}

// Simple scroll reveal
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.timeline-item, .project-card, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Add visible class style dynamically
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);