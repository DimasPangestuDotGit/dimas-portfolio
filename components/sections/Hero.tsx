"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "IT Analyst & Fullstack Developer",
  "Application Developer",
  "Quality Assurance Engineer",
  "Business Analyst",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        30,
      );
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          padding: "140px 40px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Available tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(200,255,0,0.07)",
            border: "0.5px solid rgba(200,255,0,0.15)",
            color: "#C8FF00",
            fontSize: "11px",
            padding: "5px 12px",
            borderRadius: "100px",
            width: "fit-content",
            letterSpacing: "0.06em",
            fontFamily: "Inter, sans-serif",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "#C8FF00",
              borderRadius: "50%",
              animation: "pulse 2s infinite",
            }}
          />
          Available for work
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "4px",
          }}
        >
          Dimas
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(200,255,0,0.5)",
            marginBottom: "28px",
          }}
        >
          Pangestu
        </div>

        {/* Typing animation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "#C8FF00",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: "11px",
              color: "#666",
              letterSpacing: "0.12em",
              fontFamily: "Inter, sans-serif",
              textTransform: "uppercase",
              minWidth: "280px",
            }}
          >
            {displayed}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "12px",
                background: "#C8FF00",
                marginLeft: "2px",
                verticalAlign: "middle",
                animation: "blink 1s infinite",
              }}
            />
          </div>
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "#555",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.8,
            maxWidth: "360px",
            marginBottom: "36px",
          }}
        >
          Building things end-to-end — from mobile banking infrastructure to
          government systems. I care about what works and what lasts.
        </p>

        <div style={{ display: "flex", gap: "12px", marginBottom: "44px" }}>
          <a
            href="#experience"
            style={{
              background: "#C8FF00",
              color: "#0D0D0D",
              fontSize: "13px",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            View Experience →
          </a>
          <a
            href="/cv.pdf"
            style={{
              background: "transparent",
              color: "#F0F0F0",
              fontSize: "13px",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: "100px",
              border: "0.5px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
            }}
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "28px" }}>
          {[
            { icon: "📅", num: "3+", label: "Years exp" },
            { icon: "🏦", num: "BNI", label: "Banking" },
            { icon: "🏛️", num: "Gov", label: "Kemendag" },
          ].map((s) => (
            <div
              key={s.label}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(200,255,0,0.07)",
                  border: "0.5px solid rgba(200,255,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              >
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: 700 }}>{s.num}</div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#444",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — Photo + Brush */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Brush stroke SVG behind photo */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <svg
            viewBox="0 0 600 900"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Dark brush strokes */}
            <path
              d="M80,100 C150,60 300,80 450,50 C520,35 580,60 620,40 C580,120 500,140 400,160 C300,180 150,150 80,100Z"
              fill="#1a1a1a"
              opacity="0.9"
            />
            <path
              d="M50,200 C120,160 280,190 420,170 C500,158 560,175 600,160 L600,240 C540,260 460,250 360,268 C240,288 120,265 50,200Z"
              fill="#1c1c1c"
              opacity="0.85"
            />
            {/* Green accent strokes */}
            <path
              d="M100,120 C180,90 320,110 460,85 C520,74 570,88 600,78 C570,108 500,118 400,132 C280,148 160,138 100,120Z"
              fill="#C8FF00"
              opacity="0.12"
            />
            <path
              d="M60,320 C140,295 290,310 430,288 C500,276 555,290 595,278 C568,308 498,318 400,330 C280,345 140,338 60,320Z"
              fill="#C8FF00"
              opacity="0.07"
            />
            <path
              d="M200,480 C270,460 380,472 480,455 C530,446 570,458 600,450 C575,472 535,480 470,490 C380,502 270,498 200,480Z"
              fill="#C8FF00"
              opacity="0.09"
            />
            {/* More dark brush chaos */}
            <path
              d="M0,600 C80,570 200,590 320,575 C420,562 500,578 580,565 L600,640 C520,658 420,648 320,658 C200,670 80,660 0,640Z"
              fill="#1a1a1a"
              opacity="0.7"
            />
            <path
              d="M100,700 C180,678 300,692 420,678 C490,669 545,680 590,670 L600,740 C555,752 490,744 410,754 C290,768 170,758 100,740Z"
              fill="#161616"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Photo */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
          <Image
            src="/photo.png"
            alt="Dimas Pangestu"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(100%) contrast(1.15) brightness(0.75)",
              mixBlendMode: "luminosity",
            }}
            priority
          />
          {/* Duotone green */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(200,255,0,0.1) 0%, transparent 60%)",
              mixBlendMode: "screen",
              zIndex: 1,
            }}
          />
          {/* Fade left */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #111111 0%, rgba(17,17,17,0.4) 30%, transparent 65%)",
              zIndex: 2,
            }}
          />
          {/* Fade top */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, #111111 0%, transparent 12%)",
              zIndex: 2,
            }}
          />
          {/* Fade bottom */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(0deg, #111111 0%, transparent 20%)",
              zIndex: 2,
            }}
          />
        </div>

        {/* Corner decorations */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "20px",
            height: "20px",
            borderTop: "1px solid rgba(200,255,0,0.2)",
            borderRight: "1px solid rgba(200,255,0,0.2)",
            zIndex: 5,
          }}
        />

        {/* Vertical text */}
        <div
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%) rotate(90deg)",
            fontSize: "9px",
            color: "rgba(200,255,0,0.2)",
            letterSpacing: "0.2em",
            fontFamily: "Inter, sans-serif",
            whiteSpace: "nowrap",
            zIndex: 5,
          }}
        >
          JAKARTA · INDONESIA · 2025
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}
