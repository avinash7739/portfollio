import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // ─── STARS ────────────────────────────────────────
        const stars = Array.from({ length: 180 }, () => ({
            x: Math.random(),
            y: Math.random(),
            r: Math.random() * 1.8 + 0.3,
            alpha: Math.random(),
            dir: Math.random() > 0.5 ? 1 : -1,
            speed: Math.random() * 0.004 + 0.001,
        }));

        // ─── REALISTIC SOLAR SYSTEM ────────────────────────
        // Placed center of screen, big enough to feel immersive
        const planets = [
            {
                name: 'Mercury',
                orbitR: 90,
                r: 5,
                color: '#b5b5b5',
                speed: 0.030,
                angle: Math.random() * Math.PI * 2,
                tilt: 0.3,
            },
            {
                name: 'Venus',
                orbitR: 140,
                r: 10,
                color: '#e8cda0',
                speed: 0.020,
                angle: Math.random() * Math.PI * 2,
                tilt: 0.3,
            },
            {
                name: 'Earth',
                orbitR: 200,
                r: 11,
                color: '#4da6ff',
                speed: 0.014,
                angle: Math.random() * Math.PI * 2,
                tilt: 0.3,
                hasMoon: true,
                moonAngle: 0,
            },
            {
                name: 'Mars',
                orbitR: 265,
                r: 8,
                color: '#c1440e',
                speed: 0.010,
                angle: Math.random() * Math.PI * 2,
                tilt: 0.3,
            },
            {
                name: 'Jupiter',
                orbitR: 360,
                r: 22,
                color: '#c88b3a',
                speed: 0.006,
                angle: Math.random() * Math.PI * 2,
                tilt: 0.28,
            },
            {
                name: 'Saturn',
                orbitR: 460,
                r: 18,
                color: '#e4d191',
                speed: 0.004,
                angle: Math.random() * Math.PI * 2,
                tilt: 0.28,
                hasRing: true,
            },
            {
                name: 'Uranus',
                orbitR: 550,
                r: 13,
                color: '#7de8e8',
                speed: 0.002,
                angle: Math.random() * Math.PI * 2,
                tilt: 0.28,
            },
        ];

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDark = document.documentElement.classList.contains('dark');

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            // ── Twinkling Stars ─────────────────────────────
            stars.forEach((s) => {
                s.alpha += s.speed * s.dir;
                if (s.alpha >= 1 || s.alpha <= 0.05) s.dir *= -1;
                ctx.beginPath();
                ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${isDark ? s.alpha * 0.85 : s.alpha * 0.12})`;
                ctx.fill();
            });

            // ── Sun ─────────────────────────────────────────
            // Outer corona glow
            const corona = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70);
            corona.addColorStop(0, 'rgba(255,240,100,0.9)');
            corona.addColorStop(0.4, 'rgba(255,160,30,0.4)');
            corona.addColorStop(1, 'rgba(255,80,0,0)');
            ctx.beginPath();
            ctx.arc(cx, cy, 70, 0, Math.PI * 2);
            ctx.fillStyle = corona;
            ctx.fill();

            // Sun core
            const sunCore = ctx.createRadialGradient(cx, cy - 5, 2, cx, cy, 28);
            sunCore.addColorStop(0, '#fff7a1');
            sunCore.addColorStop(0.5, '#ffd700');
            sunCore.addColorStop(1, '#ff8c00');
            ctx.beginPath();
            ctx.arc(cx, cy, 28, 0, Math.PI * 2);
            ctx.fillStyle = sunCore;
            ctx.fill();

            // ── Planets ─────────────────────────────────────
            planets.forEach((p) => {
                p.angle += p.speed;
                const tilt = p.tilt;

                // Orbit ring (ellipse for depth)
                ctx.beginPath();
                ctx.ellipse(cx, cy, p.orbitR, p.orbitR * tilt, 0, 0, Math.PI * 2);
                ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
                ctx.lineWidth = 0.8;
                ctx.stroke();

                const px = cx + Math.cos(p.angle) * p.orbitR;
                const py = cy + Math.sin(p.angle) * p.orbitR * tilt;

                // Planet glow
                const glow = ctx.createRadialGradient(px, py, 0, px, py, p.r * 2.8);
                glow.addColorStop(0, p.color + 'aa');
                glow.addColorStop(1, p.color + '00');
                ctx.beginPath();
                ctx.arc(px, py, p.r * 2.8, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                // Planet body
                const bodyGrad = ctx.createRadialGradient(px - p.r * 0.3, py - p.r * 0.3, 0, px, py, p.r);
                bodyGrad.addColorStop(0, lighten(p.color));
                bodyGrad.addColorStop(1, darken(p.color));
                ctx.beginPath();
                ctx.arc(px, py, p.r, 0, Math.PI * 2);
                ctx.fillStyle = bodyGrad;
                ctx.fill();

                // Earth's Moon
                if (p.hasMoon) {
                    p.moonAngle += 0.04;
                    const mr = 18;
                    const mx = px + Math.cos(p.moonAngle) * mr;
                    const my = py + Math.sin(p.moonAngle) * mr * 0.4;
                    ctx.beginPath();
                    ctx.arc(mx, my, 3, 0, Math.PI * 2);
                    ctx.fillStyle = '#d0d0d0';
                    ctx.fill();
                }

                // Saturn rings
                if (p.hasRing) {
                    ctx.save();
                    ctx.translate(px, py);
                    ctx.scale(1, 0.35);
                    ctx.beginPath();
                    ctx.ellipse(0, 0, p.r * 2.5, p.r * 2.5, 0, 0, Math.PI * 2);
                    ctx.strokeStyle = 'rgba(228,209,145,0.55)';
                    ctx.lineWidth = 5;
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(0, 0, p.r * 2.9, p.r * 2.9, 0, 0, Math.PI * 2);
                    ctx.strokeStyle = 'rgba(200,175,100,0.3)';
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    ctx.restore();
                }

                // Label
                ctx.fillStyle = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)';
                ctx.font = '9px sans-serif';
                ctx.fillText(p.name, px + p.r + 3, py + 3);
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

// Simple helpers for planet 3D shading
function lighten(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = Math.min(255, ((n >> 16) & 0xff) + 60);
    const g = Math.min(255, ((n >> 8) & 0xff) + 60);
    const b = Math.min(255, (n & 0xff) + 60);
    return `rgb(${r},${g},${b})`;
}
function darken(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = Math.max(0, ((n >> 16) & 0xff) - 40);
    const g = Math.max(0, ((n >> 8) & 0xff) - 40);
    const b = Math.max(0, (n & 0xff) - 40);
    return `rgb(${r},${g},${b})`;
}

export default ParticleBackground;
