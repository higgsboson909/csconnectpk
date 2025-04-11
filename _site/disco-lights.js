/**
 * CS Connect PK - Disco Light Effects
 */

document.addEventListener('DOMContentLoaded', function() {
    // Apply disco lights to hero, join section, and footer
    const sections = document.querySelectorAll('.hero, .join-section, #footer');
    
    sections.forEach(section => {
        if (!section) return;

        // Create canvas for disco lights
        const canvas = document.createElement('canvas');
        canvas.className = 'disco-canvas';
        section.insertBefore(canvas, section.firstChild);

        const ctx = canvas.getContext('2d');
        let lights = [];
        let animationFrameId;

        // Resize canvas to match section
        function resizeCanvas() {
            canvas.width = section.offsetWidth;
            canvas.height = section.offsetHeight;
        }

        // Create disco lights
        function createLights() {
            lights = [];
            const numLights = 15;
            
            for (let i = 0; i < numLights; i++) {
                lights.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 100 + 50,
                    speed: Math.random() * 2 + 1,
                    angle: Math.random() * Math.PI * 2,
                    color: Math.random() < 0.5 ? '#4A00E0' : '#00B4D8',
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        }

        // Animate disco lights
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            lights.forEach(light => {
                // Move light
                light.angle += light.speed * 0.02;
                light.x += Math.cos(light.angle) * light.speed;
                light.y += Math.sin(light.angle) * light.speed;
                
                // Wrap around edges
                if (light.x < -light.radius) light.x = canvas.width + light.radius;
                if (light.x > canvas.width + light.radius) light.x = -light.radius;
                if (light.y < -light.radius) light.y = canvas.height + light.radius;
                if (light.y > canvas.height + light.radius) light.y = -light.radius;
                
                // Draw light
                const gradient = ctx.createRadialGradient(
                    light.x, light.y, 0,
                    light.x, light.y, light.radius
                );
                
                gradient.addColorStop(0, `${light.color}${Math.floor(light.opacity * 255).toString(16).padStart(2, '0')}`);
                gradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(animate);
        }

        // Initialize
        resizeCanvas();
        createLights();
        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            resizeCanvas();
            createLights();
        });
    });

    // Add light disco lights to About section
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        for (let i = 0; i < 5; i++) {
            const light = document.createElement('div');
            light.className = 'disco-light';
            aboutSection.appendChild(light);
        }
    }
}); 