document.addEventListener('DOMContentLoaded', function() {
    // Apply hover effects to primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.background = 'linear-gradient(135deg, #60A3D9, #A4F1F9)';
            button.style.boxShadow = '0 6px 20px rgba(164, 241, 249, 0.4)';
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.background = 'linear-gradient(135deg, #9B5DE5, #60A3D9)';
            button.style.boxShadow = '0 4px 15px rgba(155, 93, 229, 0.3)';
            button.style.transform = '';
        });
    });

    // Add subtle animation to nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Create or update the hover effect
            if (!link.querySelector('.nav-hover-effect')) {
                const effect = document.createElement('span');
                effect.className = 'nav-hover-effect';
                effect.style.position = 'absolute';
                effect.style.bottom = '-4px';
                effect.style.left = '0';
                effect.style.width = '0';
                effect.style.height = '2px';
                effect.style.background = '#9B5DE5';
                effect.style.transition = 'width 0.3s ease';
                link.appendChild(effect);
            }
            
            // Animate the hover effect
            setTimeout(() => {
                const effect = link.querySelector('.nav-hover-effect');
                if (effect) {
                    effect.style.width = '100%';
                }
            }, 10);
            
            // Change text color
            link.style.color = '#A4F1F9';
        });
        
        link.addEventListener('mouseleave', () => {
            // Reset the hover effect
            const effect = link.querySelector('.nav-hover-effect');
            if (effect) {
                effect.style.width = '0';
            }
            
            // Reset text color
            link.style.color = 'white';
        });
    });

    // Add subtle glow effect to cards on hover
    const cards = document.querySelectorAll('.card, .event-card, .blog-post');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 30px rgba(155, 93, 229, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        });
    });
}); 