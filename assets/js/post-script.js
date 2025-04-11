document.addEventListener('DOMContentLoaded', function() {
    // Get the container
    const container = document.querySelector('.blog-post-header');
    
    // Add disco lights animation
    const discoCanvas = document.querySelector('.blog-post-header .disco-canvas');
    if (discoCanvas && container) {
        const ctx = discoCanvas.getContext('2d');
        let lights = [];
        let animationFrameId;
        
        // Resize canvas
        function resizeCanvas() {
            discoCanvas.width = container.offsetWidth;
            discoCanvas.height = container.offsetHeight;
        }
        
        // Create disco lights
        function createLights() {
            lights = [];
            const numLights = window.innerWidth < 768 ? 8 : 15;
            
            for (let i = 0; i < numLights; i++) {
                lights.push({
                    x: Math.random() * discoCanvas.width,
                    y: Math.random() * discoCanvas.height,
                    radius: Math.random() * 150 + 70,
                    speed: Math.random() * 1.2 + 0.6,
                    angle: Math.random() * Math.PI * 2,
                    color: Math.random() < 0.5 ? '#4A00E0' : '#00B4D8',
                    opacity: Math.random() * 0.3 + 0.1
                });
            }
        }
        
        // Animate disco lights
        function animateDisco() {
            ctx.clearRect(0, 0, discoCanvas.width, discoCanvas.height);
            
            lights.forEach(light => {
                // Move light
                light.angle += light.speed * 0.01;
                light.x += Math.cos(light.angle) * light.speed;
                light.y += Math.sin(light.angle) * light.speed;
                
                // Wrap around edges
                if (light.x < -light.radius) light.x = discoCanvas.width + light.radius;
                if (light.x > discoCanvas.width + light.radius) light.x = -light.radius;
                if (light.y < -light.radius) light.y = discoCanvas.height + light.radius;
                if (light.y > discoCanvas.height + light.radius) light.y = -light.radius;
                
                // Draw light
                const gradient = ctx.createRadialGradient(
                    light.x, light.y, 0,
                    light.x, light.y, light.radius
                );
                
                const hexOpacity = Math.floor(light.opacity * 255).toString(16).padStart(2, '0');
                gradient.addColorStop(0, `${light.color}${hexOpacity}`);
                gradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(animateDisco);
        }
        
        // Initialize disco lights
        resizeCanvas();
        createLights();
        animateDisco();
        
        // Handle resize for disco lights
        window.addEventListener('resize', () => {
            resizeCanvas();
            createLights();
        });
    }
}); 