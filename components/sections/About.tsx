"use client";

import { motion } from "framer-motion";

const cards = [
  { icon: "📍", title: "Jakarta, Indonesia", sub: "On-site · Open to remote" },
  {
    icon: "🎓",
    title: "Bachelor of Informatics Engineering",
    sub: "Satya Wacana Christian University",
  },
  { icon: "🏦", title: "Banking & Government", sub: "BNI · Ministry of Trade" },
  {
    icon: "⚙️",
    title: "Dev + QA + Analysis",
    sub: "Full software delivery cycle",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 40px",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#C8FF00",
            letterSpacing: "0.1em",
            fontFamily: "Inter, sans-serif",
            marginBottom: "10px",
            textTransform: "uppercase",
          }}
        >
          About me
        </div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          Who I am
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* TEXT */}
          <div
            style={{
              fontSize: "14px",
              color: "#888",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.8,
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              I&apos;m a{" "}
              <strong style={{ color: "#F0F0F0", fontWeight: 500 }}>
                Fullstack Developer & IT Analyst
              </strong>{" "}
              with hands-on experience building and testing applications in
              high-stakes environments — including mobile banking at BNI and
              government systems at the Ministry of Trade.
            </p>
            <p style={{ marginBottom: "16px" }}>
              I move comfortably between{" "}
              <strong style={{ color: "#F0F0F0", fontWeight: 500 }}>
                development and analysis
              </strong>{" "}
              — writing code, running tests, gathering requirements, and making
              sure what gets shipped actually works. I care about quality as
              much as I care about delivery.
            </p>
            <p>
              Currently sharpening my frontend skills with{" "}
              <strong style={{ color: "#F0F0F0", fontWeight: 500 }}>
                Next.js
              </strong>{" "}
              and building projects that reflect both my technical depth and my
              eye for clean, intentional design.
            </p>
          </div>

          {/* CARDS */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  background: "#1A1A1A",
                  border: "0.5px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "9px",
                    background: "rgba(200,255,0,0.07)",
                    border: "0.5px solid rgba(200,255,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "17px",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#F0F0F0",
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#555",
                      fontFamily: "Inter, sans-serif",
                      marginTop: "2px",
                    }}
                  >
                    {card.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
