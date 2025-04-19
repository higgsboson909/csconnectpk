/**
 * CS Connect PK - About Section Animation
 */

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;

    // Create canvas for the animation
    const canvas = document.createElement('canvas');
    canvas.className = 'about-canvas';
    aboutSection.insertBefore(canvas, aboutSection.firstChild);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Resize canvas to match section
    function resizeCanvas() {
        canvas.width = aboutSection.offsetWidth;
        canvas.height = aboutSection.offsetHeight;
    }

    // Create particles
    function createParticles() {
        particles = [];
        const numParticles = 30;
        
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                color: Math.random() < 0.5 ? '#4A00E0' : '#00B4D8',
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    // Draw connections between particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.2;
                    ctx.strokeStyle = `rgba(74, 0, 224, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animate particles
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            // Move particle
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Draw connections
        drawConnections();
        
        animationFrameId = requestAnimationFrame(animate);
    }

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
}); 