"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
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
          Education
        </div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          Academic background
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: "#1A1A1A",
            border: "0.5px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            padding: "32px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            maxWidth: "600px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "rgba(200,255,0,0.07)",
              border: "0.5px solid rgba(200,255,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              flexShrink: 0,
            }}
          >
            🎓
          </div>
          <div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 500,
                color: "#F0F0F0",
                marginBottom: "4px",
              }}
            >
              S1 Teknik Informatika
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#C8FF00",
                fontFamily: "Inter, sans-serif",
                marginBottom: "4px",
              }}
            >
              Universitas Kristen Satya Wacana (UKSW)
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#555",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Salatiga, Jawa Tengah · Computer Science
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
