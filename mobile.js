document.addEventListener('DOMContentLoaded', function() {
    // Create and add hamburger menu button
    const nav = document.querySelector('nav');
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger-menu';
    hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
    hamburgerBtn.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Insert hamburger button before the navigation list
    const navList = nav.querySelector('ul');
    nav.insertBefore(hamburgerBtn, navList);

    // Toggle menu functionality
    hamburgerBtn.addEventListener('click', function() {
        navList.classList.toggle('show');
        const isExpanded = navList.classList.contains('show');
        hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        
        // Toggle icon between bars and times
        hamburgerBtn.innerHTML = isExpanded ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = nav.contains(event.target);
        
        if (!isClickInside && navList.classList.contains('show')) {
            navList.classList.remove('show');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking on a link
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                navList.classList.remove('show');
                hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        }, 250);
    });
}); 