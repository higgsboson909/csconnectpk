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

    // Add Join Us button to mobile menu
    const joinUsItem = document.createElement('li');
    joinUsItem.className = 'mobile-join';
    
    // Create Join Us link with proper styling
    const joinUsLink = document.createElement('a');
    joinUsLink.href = 'index.html#join';
    joinUsLink.className = 'btn btn-primary';
    joinUsLink.innerHTML = 'Join Us';
    
    joinUsItem.appendChild(joinUsLink);
    navList.appendChild(joinUsItem);

    // Toggle menu functionality
    hamburgerBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        navList.classList.toggle('show');
        const isExpanded = navList.classList.contains('show');
        hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        document.body.classList.toggle('menu-open', isExpanded);
        
        // Toggle icon between bars and times
        hamburgerBtn.innerHTML = isExpanded ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside nav
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && navList.classList.contains('show')) {
            navList.classList.remove('show');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking on a link
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
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
                document.body.classList.remove('menu-open');
            }
        }, 250);
    });

    // Handle escape key to close menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navList.classList.contains('show')) {
            navList.classList.remove('show');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });
}); 