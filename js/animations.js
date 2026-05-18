// Animations Module

export function initAnimations() {
    initScrollReveals();
    initParallax();
}

function initScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal-up, .philosophy-text');
    
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
        return;
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => observer.observe(el));
}

function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const lifestyleBg = document.querySelector('.lifestyle-parallax-bg');
    
    window.addEventListener('scroll', () => {
        // Disable parallax translations completely on mobile/tablet screens
        if (window.innerWidth <= 1024) return;
        
        const scrolled = window.scrollY;
        
        // Custom element parallax
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.1;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        // Lifestyle background parallax
        if (lifestyleBg) {
            const yPos = scrolled * 0.15;
            lifestyleBg.style.transform = `translateY(${yPos}px)`;
        }
    });
}
