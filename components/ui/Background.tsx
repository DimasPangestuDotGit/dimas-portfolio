"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // PARTICLES
    type ParticleType = "dot" | "cross" | "ring" | "line";
    const types: ParticleType[] = [
      "dot",
      "dot",
      "dot",
      "cross",
      "ring",
      "line",
    ];
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.2 + 0.05,
      type: types[Math.floor(Math.random() * types.length)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
    }));

    // SHOOTING STARS
    type Star = {
      x: number;
      y: number;
      len: number;
      speed: number;
      opacity: number;
      active: boolean;
      progress: number;
    };
    const shootingStars: Star[] = Array.from({ length: 6 }, () => ({
      x: 0,
      y: 0,
      len: 0,
      speed: 0,
      opacity: 0,
      active: false,
      progress: 0,
    }));

    const spawnStar = (star: Star) => {
      star.x = Math.random() * canvas.width * 0.8;
      star.y = Math.random() * canvas.height * 0.4;
      star.len = Math.random() * 120 + 60;
      star.speed = Math.random() * 4 + 3;
      star.opacity = Math.random() * 0.6 + 0.3;
      star.active = true;
      star.progress = 0;
    };

    // Stagger initial spawn
    shootingStars.forEach((s, i) => {
      setTimeout(() => spawnStar(s), i * 1800 + Math.random() * 2000);
    });

    // AURORA — multiple flowing layers
    let auroraTime = 0;

    const drawAurora = () => {
      auroraTime += 0.003;
      const w = canvas.width;
      const h = canvas.height;

      // Layer 1 — wide base glow
      const grad1 = ctx.createLinearGradient(0, 0, w, h * 0.6);
      grad1.addColorStop(
        0,
        `rgba(200,255,0,${0.03 + Math.sin(auroraTime) * 0.01})`,
      );
      grad1.addColorStop(
        0.4,
        `rgba(100,200,0,${0.02 + Math.cos(auroraTime * 0.7) * 0.01})`,
      );
      grad1.addColorStop(1, "rgba(0,0,0,0)");

      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let x = 0; x <= w; x += 20) {
        const wave =
          Math.sin(x * 0.004 + auroraTime) * 60 +
          Math.sin(x * 0.007 + auroraTime * 1.3) * 30;
        ctx.lineTo(x, h * 0.25 + wave);
      }
      ctx.lineTo(w, 0);
      ctx.closePath();
      ctx.fillStyle = grad1;
      ctx.fill();

      // Layer 2 — tighter band
      const grad2 = ctx.createLinearGradient(0, h * 0.1, 0, h * 0.5);
      grad2.addColorStop(0, "rgba(0,0,0,0)");
      grad2.addColorStop(
        0.5,
        `rgba(180,255,0,${0.025 + Math.sin(auroraTime * 1.2) * 0.01})`,
      );
      grad2.addColorStop(1, "rgba(0,0,0,0)");

      ctx.beginPath();
      ctx.moveTo(0, h * 0.15);
      for (let x = 0; x <= w; x += 20) {
        const wave =
          Math.sin(x * 0.005 + auroraTime * 1.1) * 50 +
          Math.cos(x * 0.003 + auroraTime * 0.8) * 25;
        ctx.lineTo(x, h * 0.3 + wave);
      }
      ctx.lineTo(w, h * 0.15);
      ctx.closePath();
      ctx.fillStyle = grad2;
      ctx.fill();

      // Layer 3 — accent streak
      const grad3 = ctx.createLinearGradient(w * 0.3, 0, w * 0.7, h * 0.4);
      grad3.addColorStop(0, "rgba(0,0,0,0)");
      grad3.addColorStop(
        0.5,
        `rgba(200,255,0,${0.02 + Math.cos(auroraTime * 0.9) * 0.008})`,
      );
      grad3.addColorStop(1, "rgba(0,0,0,0)");

      ctx.beginPath();
      ctx.moveTo(w * 0.2, 0);
      for (let x = w * 0.2; x <= w * 0.9; x += 20) {
        const wave =
          Math.sin(x * 0.006 + auroraTime * 1.4) * 40 +
          Math.sin(x * 0.002 + auroraTime) * 20;
        ctx.lineTo(x, h * 0.2 + wave);
      }
      ctx.lineTo(w * 0.9, 0);
      ctx.closePath();
      ctx.fillStyle = grad3;
      ctx.fill();
    };

    const drawShootingStar = (star: Star) => {
      if (!star.active) return;

      const angle = Math.PI / 5;
      const tailX = star.x + Math.cos(angle) * star.len * star.progress;
      const tailY = star.y + Math.sin(angle) * star.len * star.progress;
      const headX = tailX + Math.cos(angle) * 12;
      const headY = tailY + Math.sin(angle) * 12;

      const fade =
        star.progress < 0.3
          ? star.progress / 0.3
          : star.progress > 0.7
            ? (1 - star.progress) / 0.3
            : 1;

      const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
      grad.addColorStop(0, `rgba(200,255,0,0)`);
      grad.addColorStop(1, `rgba(200,255,0,${star.opacity * fade})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(headX, headY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Glow at head
      const glow = ctx.createRadialGradient(headX, headY, 0, headX, headY, 6);
      glow.addColorStop(0, `rgba(200,255,0,${0.4 * fade})`);
      glow.addColorStop(1, "rgba(200,255,0,0)");
      ctx.beginPath();
      ctx.arc(headX, headY, 6, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      star.progress += star.speed / (star.len * 3);
      if (star.progress >= 1) {
        star.active = false;
        setTimeout(() => spawnStar(star), Math.random() * 4000 + 2000);
      }
    };

    const drawParticle = (p: (typeof particles)[0]) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.strokeStyle = `rgba(200,255,0,${p.opacity})`;
      ctx.fillStyle = `rgba(200,255,0,${p.opacity})`;
      ctx.lineWidth = 0.5;

      switch (p.type) {
        case "dot":
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "cross":
          const s = p.r * 3;
          ctx.beginPath();
          ctx.moveTo(-s, 0);
          ctx.lineTo(s, 0);
          ctx.moveTo(0, -s);
          ctx.lineTo(0, s);
          ctx.stroke();
          break;
        case "ring":
          ctx.beginPath();
          ctx.arc(0, 0, p.r * 2.5, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case "line":
          const l = p.r * 6;
          ctx.beginPath();
          ctx.moveTo(-l, 0);
          ctx.lineTo(l, 0);
          ctx.stroke();
          break;
      }
      ctx.restore();
    };

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawAurora();
      shootingStars.forEach(drawShootingStar);
      particles.forEach((p) => {
        drawParticle(p);
        p.x += p.dx;
        p.y += p.dy;
        p.rotation += p.rotSpeed;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
