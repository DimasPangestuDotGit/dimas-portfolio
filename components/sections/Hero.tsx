"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        alignItems: "center",
        padding: "140px 40px 80px",
        gap: "40px",
        borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        minHeight: "100vh",
      }}
    >
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(200,255,0,0.07)",
            border: "0.5px solid rgba(200,255,0,0.18)",
            color: "#C8FF00",
            fontSize: "11px",
            padding: "5px 12px",
            borderRadius: "100px",
            letterSpacing: "0.06em",
            fontFamily: "Inter, sans-serif",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "#C8FF00",
              borderRadius: "50%",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          Available for work
        </div>

        <h1
          style={{
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}
        >
          IT Analyst
          <br />& <span style={{ color: "#C8FF00" }}>Developer</span>
          <br />
          Based in Jakarta
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#777",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.7,
            maxWidth: "420px",
            marginBottom: "32px",
          }}
        >
          Fullstack developer with experience in application development,
          quality assurance, and business analysis — from mobile banking at BNI
          to government systems at Ministry of Trade - Republic of Indonesia.
        </p>

        <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
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
              border: "0.5px solid rgba(255,255,255,0.15)",
              textDecoration: "none",
            }}
          >
            Download CV
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
            paddingTop: "28px",
            borderTop: "0.5px solid rgba(255,255,255,0.07)",
          }}
        >
          {[
            { num: "3+", label: "Years exp" },
            { num: "BNI", label: "Banking sector" },
            { num: "Gov", label: "Ministry of Trade" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "22px", fontWeight: 700 }}>{s.num}</div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#555",
                  fontFamily: "Inter, sans-serif",
                  marginTop: "2px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "0.5px solid rgba(200,255,0,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "370px",
            height: "370px",
            borderRadius: "50%",
            border: "0.5px solid rgba(200,255,0,0.05)",
          }}
        />

        <div
          style={{
            width: "260px",
            height: "320px",
            borderRadius: "130px 130px 110px 110px",
            background: "#1A1A1A",
            border: "0.5px solid rgba(255,255,255,0.07)",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgba(200,255,0,0.05)",
              border: "0.5px solid rgba(200,255,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(200,255,0,0.3)",
              fontSize: "32px",
            }}
          >
            👤
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(150deg, rgba(200,255,0,0.05) 0%, transparent 55%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1A1A1A",
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: "100px",
            padding: "7px 14px",
            display: "flex",
            alignItems: "center",
            gap: "7px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              background: "#C8FF00",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              color: "#777",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Open to opportunities
          </span>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
