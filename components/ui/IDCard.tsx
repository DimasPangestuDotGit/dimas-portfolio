"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function IDCard() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const hitAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const engine = Engine.create({ gravity: { y: 1.8 } });
    const world = engine.world;

    const W = window.innerWidth;
    const H = window.innerHeight;

    const render = Render.create({
      element: sceneRef.current!,
      engine,
      options: {
        width: W,
        height: H,
        wireframes: false,
        background: "transparent",
      },
    });

    const cardW = 150;
    const cardH = 230;

    const card = Bodies.rectangle(W / 2, H / 2 - 40, cardW, cardH, {
      restitution: 0.4,
      friction: 0.1,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
        lineWidth: 0,
      },
      label: "card",
    });

    const anchor = Bodies.circle(W / 2, 60, 7, {
      isStatic: true,
      render: { fillStyle: "#C8FF00" },
      label: "anchor",
    });

    const string = Matter.Constraint.create({
      bodyA: anchor,
      bodyB: card,
      pointB: { x: 0, y: -cardH / 2 },
      length: 120,
      stiffness: 0.05,
      damping: 0.05,
      render: { strokeStyle: "#C8FF00", lineWidth: 1.5, anchors: false },
    });

    Composite.add(world, [card, anchor, string]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.35, render: { visible: false } },
    });
    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // Allow scroll
    render.canvas.addEventListener(
      "wheel",
      (e) => {
        window.scrollBy({ top: e.deltaY, behavior: "auto" });
      },
      { passive: true },
    );

    // Update hit area div to follow card
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      const pos = card.position;
      const angle = card.angle;

      // Update hit area
      if (hitAreaRef.current) {
        hitAreaRef.current.style.width = `${cardW}px`;
        hitAreaRef.current.style.height = `${cardH}px`;
        hitAreaRef.current.style.left = `${pos.x - cardW / 2}px`;
        hitAreaRef.current.style.top = `${pos.y - cardH / 2}px`;
        hitAreaRef.current.style.transform = `rotate(${angle}rad)`;
        hitAreaRef.current.style.transformOrigin = "center center";
      }

      // Draw card
      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(angle);

      ctx.shadowColor = "rgba(200,255,0,0.15)";
      ctx.shadowBlur = 30;

      const grad = ctx.createLinearGradient(
        -cardW / 2,
        -cardH / 2,
        cardW / 2,
        cardH / 2,
      );
      grad.addColorStop(0, "#1f1f1f");
      grad.addColorStop(1, "#141414");
      ctx.beginPath();
      ctx.roundRect(-cardW / 2, -cardH / 2, cardW, cardH, 16);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(200,255,0,0.2)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, -cardH / 2 + 18, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#111";
      ctx.fill();
      ctx.strokeStyle = "rgba(200,255,0,0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.roundRect(-cardW / 2, -cardH / 2, cardW, 6, [16, 16, 0, 0]);
      ctx.fillStyle = "#C8FF00";
      ctx.fill();

      const photoY = -cardH / 2 + 80;
      ctx.beginPath();
      ctx.arc(0, photoY, 40, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200,255,0,0.07)";
      ctx.fill();
      ctx.strokeStyle = "rgba(200,255,0,0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = "rgba(200,255,0,0.25)";
      ctx.beginPath();
      ctx.arc(0, photoY - 8, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, photoY + 22, 20, Math.PI, 0);
      ctx.fill();

      ctx.fillStyle = "#F0F0F0";
      ctx.font = "bold 12px Space Grotesk, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("DIMAS PANGESTU", 0, photoY + 58);

      ctx.fillStyle = "#C8FF00";
      ctx.font = "10px Inter, sans-serif";
      ctx.fillText("Fullstack Developer", 0, photoY + 76);

      ctx.beginPath();
      ctx.moveTo(-cardW / 2 + 20, photoY + 90);
      ctx.lineTo(cardW / 2 - 20, photoY + 90);
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.fillStyle = "#60be2e";
      ctx.font = "10px Inter, sans-serif";
      ctx.fillText("Ministry of Trade", 0, photoY + 110);

      ctx.restore();
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Forward hit area mouse events to canvas
    const hitArea = hitAreaRef.current;
    if (hitArea) {
      const forward = (e: MouseEvent) => {
        const evt = new MouseEvent(e.type, e);
        render.canvas.dispatchEvent(evt);
      };
      hitArea.addEventListener("mousedown", forward);
      hitArea.addEventListener("mousemove", forward);
      hitArea.addEventListener("mouseup", forward);
    }

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <>
      {/* Canvas — no pointer events */}
      <div
        ref={sceneRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          pointerEvents: "none",
        }}
      >
        <style>{`canvas { pointer-events: none !important; }`}</style>
      </div>

      {/* Hit area — follows card, captures drag */}
      <div
        ref={hitAreaRef}
        style={{
          position: "fixed",
          zIndex: 10,
          cursor: "grab",
          pointerEvents: "all",
        }}
      />
    </>
  );
}
