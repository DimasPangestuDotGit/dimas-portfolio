"use client";

import { useEffect, useRef } from "react";

export default function Scorpio() {
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

    let t = 0;

    // Scorpio body segments - spine from head to tail
    const getSpine = () => {
      const cx = canvas.width * 0.55;
      const cy = canvas.height * 0.45;
      const tailWave = Math.sin(t * 0.8) * 12;
      const tailWave2 = Math.sin(t * 0.6 + 1) * 8;

      return [
        // Head
        { x: cx, y: cy },
        { x: cx - 30, y: cy + 20 },
        { x: cx - 55, y: cy + 45 },
        { x: cx - 70, y: cy + 75 },
        { x: cx - 75, y: cy + 108 },
        // Mid body
        { x: cx - 68, y: cy + 140 },
        { x: cx - 50, y: cy + 168 },
        // Tail start
        { x: cx - 25, y: cy + 190 + tailWave * 0.3 },
        { x: cx + 10, y: cy + 205 + tailWave * 0.6 },
        { x: cx + 45, y: cy + 210 + tailWave * 0.9 },
        { x: cx + 75, y: cy + 200 + tailWave },
        { x: cx + 95, y: cy + 178 + tailWave + tailWave2 * 0.5 },
        { x: cx + 100, y: cy + 150 + tailWave + tailWave2 },
        // Tail curl
        { x: cx + 90, y: cy + 122 + tailWave * 0.8 + tailWave2 },
        { x: cx + 68, y: cy + 102 + tailWave * 0.5 + tailWave2 },
        // Stinger
        { x: cx + 50, y: cy + 88 + tailWave * 0.3 + tailWave2 * 0.8 },
        { x: cx + 38, y: cy + 70 + tailWave2 * 0.5 },
      ];
    };

    // Left claw
    const getLeftClaw = () => {
      const spine = getSpine();
      const base = spine[0];
      const clawWave = Math.sin(t * 0.5 + 0.5) * 8;

      return {
        arm1: [
          base,
          { x: base.x + 50, y: base.y - 30 + clawWave * 0.3 },
          { x: base.x + 100, y: base.y - 50 + clawWave * 0.6 },
          { x: base.x + 140, y: base.y - 60 + clawWave },
        ],
        pincer1: [
          { x: base.x + 140, y: base.y - 60 + clawWave },
          { x: base.x + 175, y: base.y - 45 + clawWave },
          { x: base.x + 190, y: base.y - 25 + clawWave },
        ],
        pincer2: [
          { x: base.x + 140, y: base.y - 60 + clawWave },
          { x: base.x + 168, y: base.y - 78 + clawWave },
          { x: base.x + 185, y: base.y - 70 + clawWave },
        ],
      };
    };

    // Right claw
    const getRightClaw = () => {
      const spine = getSpine();
      const base = spine[0];
      const clawWave = Math.sin(t * 0.4 + 1) * 8;

      return {
        arm1: [
          base,
          { x: base.x + 40, y: base.y + 60 + clawWave * 0.3 },
          { x: base.x + 90, y: base.y + 100 + clawWave * 0.6 },
          { x: base.x + 140, y: base.y + 120 + clawWave },
        ],
        pincer1: [
          { x: base.x + 140, y: base.y + 120 + clawWave },
          { x: base.x + 178, y: base.y + 112 + clawWave },
          { x: base.x + 192, y: base.y + 95 + clawWave },
        ],
        pincer2: [
          { x: base.x + 140, y: base.y + 120 + clawWave },
          { x: base.x + 165, y: base.y + 138 + clawWave },
          { x: base.x + 180, y: base.y + 132 + clawWave },
        ],
      };
    };

    // Constellation stars along spine
    const getStars = () => {
      const spine = getSpine();
      return spine.filter((_, i) => i % 2 === 0);
    };

    const drawPath = (
      points: { x: number; y: number }[],
      color: string,
      width: number,
      alpha: number,
    ) => {
      if (points.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const mx = (prev.x + curr.x) / 2;
        const my = (prev.y + curr.y) / 2;
        ctx.quadraticCurveTo(prev.x, prev.y, mx, my);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.strokeStyle = color.replace(")", `,${alpha})`).replace("rgb", "rgba");
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    };

    const drawStar = (
      x: number,
      y: number,
      r: number,
      alpha: number,
      color = "200,180,255",
    ) => {
      // Glow
      const glow = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
      glow.addColorStop(0, `rgba(${color},${alpha * 0.6})`);
      glow.addColorStop(1, `rgba(${color},0)`);
      ctx.beginPath();
      ctx.arc(x, y, r * 4, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${alpha})`;
      ctx.fill();
    };

    const drawConstellationLines = (
      points: { x: number; y: number }[],
      alpha: number,
    ) => {
      if (points.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = `rgba(180,160,255,${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([3, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // Scorpio symbol top left
    const drawSymbol = () => {
      const x = 60;
      const y = 80;
      ctx.font = `bold 48px serif`;
      ctx.fillStyle = `rgba(150,120,220,${0.12 + Math.sin(t * 0.3) * 0.03})`;
      ctx.fillText("♏", x, y);
    };

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      t += 0.02;

      drawSymbol();

      const spine = getSpine();
      const stars = getStars();
      const leftClaw = getLeftClaw();
      const rightClaw = getRightClaw();

      // Glow body
      drawPath(spine, "rgb(120,80,200)", 12, 0.04);
      drawPath(spine, "rgb(140,100,220)", 6, 0.08);

      // Main body outline
      drawPath(spine, "rgb(160,130,240)", 1.5, 0.35);

      // Constellation dotted lines
      drawConstellationLines(stars, 0.2);

      // Left claw glow + outline
      drawPath(leftClaw.arm1, "rgb(120,80,200)", 8, 0.05);
      drawPath(leftClaw.arm1, "rgb(160,130,240)", 1.5, 0.3);
      drawPath(leftClaw.pincer1, "rgb(160,130,240)", 1.5, 0.3);
      drawPath(leftClaw.pincer2, "rgb(160,130,240)", 1.5, 0.3);

      // Right claw glow + outline
      drawPath(rightClaw.arm1, "rgb(120,80,200)", 8, 0.05);
      drawPath(rightClaw.arm1, "rgb(160,130,240)", 1.5, 0.3);
      drawPath(rightClaw.pincer1, "rgb(160,130,240)", 1.5, 0.3);
      drawPath(rightClaw.pincer2, "rgb(160,130,240)", 1.5, 0.3);

      // Stars at constellation points
      stars.forEach((s, i) => {
        const r = i === 0 ? 3 : i === stars.length - 1 ? 2.5 : 1.5;
        const alpha = 0.6 + Math.sin(t + i) * 0.2;
        const isAntares = i === 4;
        drawStar(s.x, s.y, r, alpha, isAntares ? "255,80,80" : "200,180,255");
      });

      // Stinger tip glow
      const tip = spine[spine.length - 1];
      drawStar(tip.x, tip.y, 2, 0.8 + Math.sin(t * 2) * 0.15, "200,255,0");

      // Legs (simple lines from body segments)
      const legSegments = [2, 3, 4, 5];
      legSegments.forEach((si, i) => {
        const seg = spine[si];
        const legWave = Math.sin(t * 0.6 + i * 0.8) * 5;
        const side = i % 2 === 0 ? 1 : -1;

        // Left leg
        ctx.beginPath();
        ctx.moveTo(seg.x, seg.y);
        ctx.lineTo(seg.x - 40 * side, seg.y - 20 + legWave);
        ctx.lineTo(seg.x - 55 * side, seg.y - 10 + legWave);
        ctx.strokeStyle = `rgba(140,110,220,0.25)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Right leg
        ctx.beginPath();
        ctx.moveTo(seg.x, seg.y);
        ctx.lineTo(seg.x + 40 * side, seg.y + 10 + legWave);
        ctx.lineTo(seg.x + 55 * side, seg.y + 20 + legWave);
        ctx.strokeStyle = `rgba(140,110,220,0.2)`;
        ctx.lineWidth = 1;
        ctx.stroke();
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
