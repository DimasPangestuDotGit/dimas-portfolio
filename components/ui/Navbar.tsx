"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#F0F0F0";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#666";
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.07)" : "none",
        background: scrolled ? "rgba(17,17,17,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ fontSize: "15px", fontWeight: 500 }}>
        Dimas<span style={{ color: "#C8FF00" }}>.</span>
      </div>

      <ul style={{ display: "flex", gap: "28px", listStyle: "none" }}>
        {["About", "Skills", "Experience", "Education", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: "13px",
                  color: "#666",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </a>
            </li>
          ),
        )}
      </ul>

      <a
        href="#contact"
        style={{
          fontSize: "13px",
          color: "#0D0D0D",
          background: "#C8FF00",
          padding: "8px 18px",
          borderRadius: "100px",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        Hire me
      </a>
    </nav>
  );
}
