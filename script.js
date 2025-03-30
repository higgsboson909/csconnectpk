// Animation classes
const animationClasses = {
    fadeIn: 'fade-in',
    slideUp: 'slide-up',
    slideLeft: 'slide-left',
    slideRight: 'slide-right',
    zoomIn: 'zoom-in',
    scaleIn: 'scale-in',
    float: 'float',
    pulse: 'pulse',
    hoverScale: 'hover-scale',
    hoverGlow: 'hover-glow',
    ripple: 'ripple'
};

// Animation durations
const durations = {
    fast: '0.5s',
    medium: '0.8s',
    slow: '1.2s'
};

// Theme configuration
const themeConfig = {
    light: {
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f8f9fa',
        '--text-primary': '#1a1a1a',
        '--text-secondary': '#4a4a4a',
        '--card-bg': '#ffffff',
        '--header-bg': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--nav-bg': '#ffffff',
        '--nav-text': '#1a1a1a',
        '--footer-bg': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--card-shadow': '0 4px 20px rgba(0, 0, 0, 0.05)',
        '--hover-shadow': '0 8px 30px rgba(0, 0, 0, 0.08)',
        '--border-color': 'rgba(0, 0, 0, 0.08)',
        '--hover-glow': '0 0 15px rgba(52, 152, 219, 0.2)',
        '--accent-primary': '#3498db',
        '--accent-secondary': '#2c3e50',
        '--accent-light': '#e8f4f8',
        '--gradient-primary': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--gradient-secondary': 'linear-gradient(135deg, #f8f9fa, #ffffff)',
        '--text-muted': '#6c757d',
        '--link-color': '#2c3e50',
        '--link-hover': '#3498db',
        '--button-primary': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--button-hover': 'linear-gradient(135deg, #2c3e50, #1a1a1a)',
        '--card-header': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--card-border': '1px solid rgba(0, 0, 0, 0.08)',
        '--input-bg': '#ffffff',
        '--input-border': '1px solid rgba(0, 0, 0, 0.1)',
        '--input-focus': '1px solid #3498db',
        '--success-color': '#2ecc71',
        '--error-color': '#e74c3c',
        '--warning-color': '#f1c40f',
        '--info-color': '#3498db'
    },
    dark: {
        '--bg-primary': '#121212',
        '--bg-secondary': '#1a1a1a',
        '--text-primary': '#ffffff',
        '--text-secondary': '#e0e0e0',
        '--card-bg': '#1a1a1a',
        '--header-bg': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--nav-bg': '#121212',
        '--nav-text': '#ffffff',
        '--footer-bg': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--card-shadow': '0 4px 20px rgba(0, 0, 0, 0.2)',
        '--hover-shadow': '0 8px 30px rgba(0, 0, 0, 0.3)',
        '--border-color': 'rgba(255, 255, 255, 0.08)',
        '--hover-glow': '0 0 15px rgba(52, 152, 219, 0.3)',
        '--accent-primary': '#3498db',
        '--accent-secondary': '#2c3e50',
        '--accent-light': 'rgba(52, 152, 219, 0.1)',
        '--gradient-primary': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--gradient-secondary': 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
        '--text-muted': '#a0aec0',
        '--link-color': '#3498db',
        '--link-hover': '#2980b9',
        '--button-primary': 'linear-gradient(135deg, #3498db, #2980b9)',
        '--button-hover': 'linear-gradient(135deg, #2980b9, #2472a4)',
        '--card-header': 'linear-gradient(135deg, #2c3e50, #1a252f)',
        '--card-border': '1px solid rgba(255, 255, 255, 0.08)',
        '--input-bg': '#1a1a1a',
        '--input-border': '1px solid rgba(255, 255, 255, 0.1)',
        '--input-focus': '1px solid #3498db',
        '--success-color': '#27ae60',
        '--error-color': '#c0392b',
        '--warning-color': '#d35400',
        '--info-color': '#3498db'
    }
};

// Add CSS animations to the document
const style = document.createElement('style');
style.textContent = `
    /* Theme transition */
    :root {
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* Base styles */
    body {
        background-color: var(--bg-primary);
        color: var(--text-primary);
    }

    .card {
        background-color: var(--card-bg);
        border: var(--card-border);
        box-shadow: var(--card-shadow);
    }

    .card-header {
        background: var(--card-header);
    }

    .btn {
        background: var(--button-primary);
        color: white;
        transition: all 0.3s ease;
    }

    .btn:hover {
        background: var(--button-hover);
        transform: translateY(-2px);
        box-shadow: var(--hover-shadow);
    }

    .nav-link {
        color: var(--nav-text);
    }

    .nav-link:hover {
        color: var(--accent-primary);
    }

    /* Fade In Animation */
    .fade-in {
        opacity: 0;
        transition: opacity ${durations.medium} ease-out;
    }
    .fade-in.visible {
        opacity: 1;
    }

    /* Slide Up Animation */
    .slide-up {
        opacity: 0;
        transform: translateY(30px);
        transition: all ${durations.medium} ease-out;
    }
    .slide-up.visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* Slide Left Animation */
    .slide-left {
        opacity: 0;
        transform: translateX(-30px);
        transition: all ${durations.medium} ease-out;
    }
    .slide-left.visible {
        opacity: 1;
        transform: translateX(0);
    }

    /* Slide Right Animation */
    .slide-right {
        opacity: 0;
        transform: translateX(30px);
        transition: all ${durations.medium} ease-out;
    }
    .slide-right.visible {
        opacity: 1;
        transform: translateX(0);
    }

    /* Zoom In Animation */
    .zoom-in {
        opacity: 0;
        transform: scale(0.95);
        transition: all ${durations.medium} ease-out;
    }
    .zoom-in.visible {
        opacity: 1;
        transform: scale(1);
    }

    /* Scale In Animation */
    .scale-in {
        opacity: 0;
        transform: scale(0.8);
        transition: all ${durations.slow} cubic-bezier(0.4, 0, 0.2, 1);
    }
    .scale-in.visible {
        opacity: 1;
        transform: scale(1);
    }

    /* Float Animation */
    .float {
        animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }

    /* Pulse Animation */
    .pulse {
        animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }

    /* Hover Scale Animation */
    .hover-scale {
        transition: transform 0.3s ease;
    }
    .hover-scale:hover {
        transform: scale(1.02);
    }

    /* Hover Glow Animation */
    .hover-glow {
        transition: box-shadow 0.3s ease;
    }
    .hover-glow:hover {
        box-shadow: var(--hover-glow);
    }

    /* Ripple Effect */
    .ripple {
        position: relative;
        overflow: hidden;
    }
    .ripple::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 1s;
    }
    .ripple:active::after {
        transform: scale(0, 0);
        opacity: 0.3;
        transition: 0s;
    }

    /* Lazy Loading */
    .lazy-image {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .lazy-image.loaded {
        opacity: 1;
    }

    /* Delay classes */
    .delay-1 { transition-delay: 0.2s; }
    .delay-2 { transition-delay: 0.4s; }
    .delay-3 { transition-delay: 0.6s; }
    .delay-4 { transition-delay: 0.8s; }
    .delay-5 { transition-delay: 1s; }

    /* Theme toggle button */
    .theme-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--header-bg);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        box-shadow: var(--card-shadow);
        z-index: 1000;
        transition: all 0.3s ease;
    }

    .theme-toggle:hover {
        transform: scale(1.1) rotate(180deg);
        box-shadow: var(--hover-shadow);
    }

    /* Dark mode specific styles */
    [data-theme="dark"] .card {
        background-color: var(--card-bg);
        border-color: var(--border-color);
        box-shadow: var(--card-shadow);
    }

    [data-theme="dark"] .card:hover {
        box-shadow: var(--hover-shadow);
    }

    [data-theme="dark"] .card-header {
        background: var(--card-header);
    }

    [data-theme="dark"] .btn {
        background: var(--button-primary);
    }

    [data-theme="dark"] .btn:hover {
        background: var(--button-hover);
    }

    [data-theme="dark"] .section-title {
        color: var(--text-primary);
    }

    [data-theme="dark"] .section-subtitle {
        color: var(--text-secondary);
    }

    [data-theme="dark"] .text-muted {
        color: var(--text-muted);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .theme-toggle {
            bottom: 15px;
            right: 15px;
            width: 45px;
            height: 45px;
            font-size: 20px;
        }
    }
`;
document.head.appendChild(style);

// Theme management
function setTheme(theme) {
    const root = document.documentElement;
    Object.entries(themeConfig[theme]).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const button = document.querySelector('.theme-toggle');
    if (button) {
        button.innerHTML = theme === 'light' ? '🌙' : '☀️';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
}

// Create theme toggle button
function createThemeToggle() {
    const button = document.createElement('button');
    button.className = 'theme-toggle ripple';
    button.title = 'Toggle theme';
    button.addEventListener('click', toggleTheme);
    document.body.appendChild(button);
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
}

// Lazy loading for images
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Intersection Observer configuration with better performance
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

// Create the observer with performance optimization
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            requestAnimationFrame(() => {
                entry.target.classList.add('visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            });
        }
    });
}, observerOptions);

// Function to add animations to elements with performance optimization
function addAnimations() {
    // Header animations
    const header = document.querySelector('header');
    if (header) {
        const title = header.querySelector('h1');
        const subtitle = header.querySelector('p');
        if (title) {
            title.classList.add(animationClasses.slideUp, 'delay-1');
            observer.observe(title);
        }
        if (subtitle) {
            subtitle.classList.add(animationClasses.fadeIn, 'delay-2');
            observer.observe(subtitle);
        }
    }

    // Navigation animations
    const nav = document.querySelector('nav');
    if (nav) {
        const logo = nav.querySelector('div');
        const menu = nav.querySelector('ul');
        const button = nav.querySelector('.btn');
        
        if (logo) {
            logo.classList.add(animationClasses.slideLeft);
            observer.observe(logo);
        }
        if (menu) {
            menu.classList.add(animationClasses.fadeIn);
            observer.observe(menu);
        }
        if (button) {
            button.classList.add(animationClasses.slideRight, 'ripple');
            observer.observe(button);
        }
    }

    // Add micro-interactions to cards
    document.querySelectorAll('.card').forEach((card, index) => {
        card.classList.add(animationClasses.float, animationClasses.hoverScale, animationClasses.hoverGlow);
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Add micro-interactions to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.add(animationClasses.pulse, animationClasses.ripple);
    });

    // Section animations with performance optimization
    const sections = ['home', 'about', 'events', 'blog', 'forum'];
    sections.forEach(section => {
        const sectionElement = document.querySelector(`#${section}`);
        if (sectionElement) {
            const title = sectionElement.querySelector('.section-title, h2');
            const cards = sectionElement.querySelectorAll('.card');
            
            if (title) {
                title.classList.add(animationClasses.slideUp);
                observer.observe(title);
            }
            
            cards.forEach((card, index) => {
                card.classList.add(animationClasses.slideUp, `delay-${index % 3 + 1}`);
                observer.observe(card);
            });
        }
    });

    // Footer animations
    const footer = document.querySelector('footer');
    if (footer) {
        footer.querySelectorAll('div').forEach((div, index) => {
            div.classList.add(animationClasses.fadeIn, `delay-${index + 1}`);
            observer.observe(div);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    createThemeToggle();
    addAnimations();
    lazyLoadImages();
});

// Smooth scroll for navigation links with performance optimization
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            requestAnimationFrame(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    });
});
