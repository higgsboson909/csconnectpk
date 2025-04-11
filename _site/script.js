/*
=================================
    CS Connect PK Main JavaScript
    Author: CS Connect PK Team
    Version: 1.0
=================================
*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initMobileNav();
    
    // Add hover effects
    initHoverEffects();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Set CSS variables (fallback for older browsers)
    initCssVariables();
    
    // Add scroll effects
    initScrollEffects();
});

/**
 * Initialize mobile navigation
 */
function initMobileNav() {
    // Create mobile toggle button if it doesn't exist
    if (!document.querySelector('.mobile-toggle')) {
        const mobileToggle = document.createElement('div');
        mobileToggle.className = 'mobile-toggle';
        mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
        mobileToggle.setAttribute('role', 'button');
        mobileToggle.setAttribute('tabindex', '0');
        mobileToggle.innerHTML = `
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        `;
        
        const nav = document.querySelector('nav');
        nav.appendChild(mobileToggle);
    }
    
    // Create mobile menu if it doesn't exist
    if (!document.querySelector('.mobile-menu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.setAttribute('aria-hidden', 'true');
        
        // Clone navigation items
        const navList = document.querySelector('nav ul').cloneNode(true);
        mobileMenu.appendChild(navList);
        
        // Clone join button
        const joinButton = document.querySelector('nav .btn-primary').cloneNode(true);
        mobileMenu.appendChild(joinButton);
        
        // Append mobile menu to body
        document.body.appendChild(mobileMenu);
    }
    
    // Get references to mobile navigation elements
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', toggleMobileMenu);
    mobileToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 993 && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Toggle mobile menu function
    function toggleMobileMenu() {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        const isExpanded = mobileMenu.classList.contains('active');
        mobileToggle.setAttribute('aria-expanded', isExpanded);
        mobileMenu.setAttribute('aria-hidden', !isExpanded);
        
        // Force repaint to ensure proper display
        if (isExpanded) {
            // First ensure the menu is in the DOM and visible
            mobileMenu.style.display = 'flex';
            mobileMenu.style.transform = 'translateX(0)';
            
            // Force repaint
            void mobileMenu.offsetHeight;
            
            // Make sure toggle is always visible
            mobileToggle.style.zIndex = '1010';
            mobileToggle.style.position = 'relative';
            
            // Ensure the bars are visible with important to override any specificity issues
            document.querySelectorAll('.mobile-toggle .bar').forEach(bar => {
                bar.style.backgroundColor = 'var(--text-light)';
                bar.style.setProperty('background-color', 'var(--text-light)', 'important');
            });
        } else {
            // When closing, use a small delay to allow for animation
            setTimeout(() => {
                if (!mobileMenu.classList.contains('active')) {
                    mobileMenu.style.display = '';
                }
            }, 300);
        }
    }
    
    // Close mobile menu function
    function closeMobileMenu() {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }
}

/**
 * Initialize hover effects for interactive elements
 */
function initHoverEffects() {
    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim() || '#6c5ce7';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.color = '';
        });
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 4px 12px rgba(0, 51, 102, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
            button.style.boxShadow = '';
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.about-card, .join-card, .forum-card, .event-card, .blog-card, .blog-post');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 16px rgba(0, 51, 102, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScroll() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate the offset for the fixed navbar
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                // Smooth scroll to the target section
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

/**
 * Initialize CSS variables as fallbacks for older browsers
 */
function initCssVariables() {
    // Set nav background color explicitly as a fallback for CSS variables
    document.documentElement.style.setProperty('--nav-bg', '#1a1a1a');
    document.documentElement.style.setProperty('--primary', '#002244');
    document.documentElement.style.setProperty('--secondary', '#5e2a84');
    document.documentElement.style.setProperty('--bg-dark', '#1a1a1a');
    document.documentElement.style.setProperty('--text-light', '#f0f0f0');
    
    // Check for CSS variable support
    if (!window.CSS || !window.CSS.supports || !window.CSS.supports('--a', 0)) {
        applyFallbackStyles();
    }
    
    function applyFallbackStyles() {
        // Apply fallback styles for browsers that don't support CSS variables
        const fallbackStyles = {
            '.mobile-menu': { backgroundColor: '#1a1a1a' },
            'nav': { backgroundColor: '#1a1a1a' },
            '.btn-primary': { backgroundColor: '#002244' },
            '.hero': { background: 'linear-gradient(to right, #5e2a84, #002244)' },
            '.about-section': { backgroundColor: '#f2eef8' },
            '.join-section': { background: 'linear-gradient(to right, #5e2a84, #002244)' },
            '.forum-section': { backgroundColor: '#e8e8ee' },
            '.events-section': { background: 'linear-gradient(to right, #5e2a84, #002244)' },
            '.blogs-section': { background: 'linear-gradient(to right, #5e2a84, #002244)' },
            '.blog-section': { background: 'linear-gradient(to right, #5e2a84, #002244)' },
            'footer': { backgroundColor: '#1a1a1a' }
        };
        
        for (const selector in fallbackStyles) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                for (const property in fallbackStyles[selector]) {
                    element.style[property] = fallbackStyles[selector][property];
                }
            });
        }
    }
}

/**
 * Initialize scroll effects
 */
function initScrollEffects() {
    const nav = document.querySelector('nav');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Trigger immediately to set initial state
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    }
}
