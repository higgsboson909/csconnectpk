/**
 * CS Connect PK - Mesh Gradient Animation
 * A lightweight, responsive animated mesh gradient using Canvas API
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for all animated background containers
    const containers = document.querySelectorAll('.animated-bg-container');
    containers.forEach(container => {
        createMeshGradient(container);
    });
    
    window.addEventListener('resize', function() {
        containers.forEach(container => {
            resizeMeshGradient(container);
        });
    });
});

function createMeshGradient(container) {
    let canvas = container.querySelector('.mesh-gradient-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.className = 'mesh-gradient-canvas';
        container.insertBefore(canvas, container.firstChild);
    }
    
    initMeshGradient(canvas, container);
}

function initMeshGradient(canvas, container) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = container.offsetWidth;
    let height = canvas.height = container.offsetHeight;
    
    // Configuration
    const config = {
        pointCount: window.innerWidth < 768 ? 15 : 30,
        pointRadius: 1,
        lineWidth: 0.5,
        gradientColors: [
            { color: 'rgba(13, 17, 23, 0.8)', stop: 0 },     // Dark Background
            { color: 'rgba(44, 62, 80, 0.6)', stop: 0.3 },    // Dark Blue
            { color: 'rgba(52, 31, 97, 0.4)', stop: 0.6 },    // Deep Purple
            { color: 'rgba(44, 62, 80, 0.6)', stop: 0.8 },    // Dark Blue
            { color: 'rgba(13, 17, 23, 0.8)', stop: 1 }       // Dark Background
        ],
        animationSpeed: 0.0003,
        maxDistance: window.innerWidth < 768 ? 100 : 150
    };
    
    // Special handling for hero section
    if (container.classList.contains('hero')) {
        config.gradientColors = [
            { color: 'rgba(10, 10, 15, 0.9)', stop: 0 },     // Dark Background
            { color: 'rgba(26, 26, 46, 0.7)', stop: 0.3 },    // Dark Blue
            { color: 'rgba(22, 33, 62, 0.5)', stop: 0.6 },    // Deep Purple
            { color: 'rgba(26, 26, 46, 0.7)', stop: 0.8 },    // Dark Blue
            { color: 'rgba(10, 10, 15, 0.9)', stop: 1 }       // Dark Background
        ];
        config.pointCount = window.innerWidth < 768 ? 10 : 20;
        config.maxDistance = window.innerWidth < 768 ? 80 : 120;
    }
    
    // Create points with smoother initial positions
    const points = [];
    for (let i = 0; i < config.pointCount; i++) {
        points.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.1,
            vy: (Math.random() - 0.5) * 0.1,
            baseX: Math.random() * width,
            baseY: Math.random() * height
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Update points with smoother movement
        points.forEach(point => {
            // Add gentle wave-like motion
            point.x += point.vx + Math.sin(Date.now() * 0.0008 + point.baseX * 0.01) * 0.1;
            point.y += point.vy + Math.cos(Date.now() * 0.0008 + point.baseY * 0.01) * 0.1;
            
            // Smooth boundary handling
            if (point.x < 0 || point.x > width) {
                point.vx *= -0.8;
                point.x = Math.max(0, Math.min(width, point.x));
            }
            if (point.y < 0 || point.y > height) {
                point.vy *= -0.8;
                point.y = Math.max(0, Math.min(height, point.y));
            }
        });
        
        // Draw connections with improved gradient
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dx = points[i].x - points[j].x;
                const dy = points[i].y - points[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < config.maxDistance) {
                    const opacity = Math.pow(1 - (distance / config.maxDistance), 2);
                    
                    // Create gradient for each line
                    const gradient = ctx.createLinearGradient(
                        points[i].x, points[i].y,
                        points[j].x, points[j].y
                    );
                    
                    config.gradientColors.forEach(gc => {
                        gradient.addColorStop(gc.stop, gc.color.replace(')', `, ${opacity})`));
                    });
                    
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = config.lineWidth;
                    ctx.stroke();
                    
                    // Draw subtle glow at connection points
                    const glowRadius = config.pointRadius * (1 + opacity * 0.5);
                    ctx.beginPath();
                    ctx.arc(points[i].x, points[i].y, glowRadius, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                    
                    ctx.beginPath();
                    ctx.arc(points[j].x, points[j].y, glowRadius, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function resizeMeshGradient(container) {
    const canvas = container.querySelector('.mesh-gradient-canvas');
    if (canvas) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        initMeshGradient(canvas, container);
    }
} 