"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
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
          Get in touch
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Let&apos;s build
              <br />
              something <span style={{ color: "#C8FF00" }}>great.</span>
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              Got an interesting project or role? I&apos;m always open to new
              opportunities and collaborations. Reach out and let&apos;s talk.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                {
                  icon: "💼",
                  label: "LinkedIn",
                  val: "linkedin.com/in/dimaspangestu",
                  href: "https://www.linkedin.com/in/dimas-pangestu-7b93aa1b0/",
                },
                {
                  icon: "🐙",
                  label: "GitHub",
                  val: "github.com/dimaspangestu",
                  href: "https://github.com/DimasPangestuDotGit",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  val: "hello@dimaspangestu.com",
                  href: "mailto:dimasspangestu99@gmail.com",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 18px",
                    background: "#1A1A1A",
                    border: "0.5px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    textDecoration: "none",
                  }}
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
                      fontSize: "17px",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#F0F0F0",
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#555",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {s.val}
                    </div>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#444",
                      fontSize: "16px",
                    }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {[
              { label: "Your name", placeholder: "John Doe", type: "text" },
              {
                label: "Email address",
                placeholder: "john@company.com",
                type: "email",
              },
            ].map((field) => (
              <div
                key={field.label}
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    background: "#1A1A1A",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#F0F0F0",
                    fontSize: "13px",
                    fontFamily: "Inter, sans-serif",
                    outline: "none",
                  }}
                />
              </div>
            ))}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label
                style={{
                  fontSize: "12px",
                  color: "#666",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Hey, I'd like to talk about..."
                rows={4}
                style={{
                  background: "#1A1A1A",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  color: "#F0F0F0",
                  fontSize: "13px",
                  fontFamily: "Inter, sans-serif",
                  outline: "none",
                  resize: "none",
                }}
              />
            </div>

            <button
              style={{
                background: "#C8FF00",
                color: "#0D0D0D",
                fontSize: "13px",
                fontWeight: 500,
                padding: "13px",
                borderRadius: "10px",
                cursor: "pointer",
                border: "none",
                fontFamily: "Space Grotesk, sans-serif",
                marginTop: "4px",
              }}
            >
              Send message →
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
