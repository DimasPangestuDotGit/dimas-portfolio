"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "May 2025 — Present",
    duration: "1 yr 1 mo",
    company: "Ministry of Trade - Republic of Indonesia",
    type: "Full-time · On-site",
    role: "IT Business Analyst",
    bullets: [
      "Participated in application development projects, focusing on UAT and business process design.",
      "Assisted in data management and development through effective documentation and team coordination.",
      "Supported requirement gathering and project tracking to ensure seamless task execution.",
      "Collaborated with cross-functional teams to address both technical and non-technical challenges.",
    ],
    tags: [
      "UAT",
      "Business Analysis",
      "Documentation",
      "Requirements Gathering",
    ],
  },
  {
    period: "Dec 2024 — Apr 2025",
    duration: "5 mos",
    company: "PT. Bank Negara Indonesia",
    type: "Contract · On-site",
    role: "Quality Assurance Associate",
    bullets: [
      "Conducted troubleshooting and maintenance of containerized environments for optimal performance.",
      "Managed database operations including data setup and verification to support seamless data flow.",
      "Created comprehensive testing documentation and participated in QA process enhancement meetings.",
    ],
    tags: [
      "QA",
      "OpenShift Container Platform",
      "Database",
      "Testing Documentation",
    ],
  },
  {
    period: "Feb 2022 — Oct 2024",
    duration: "2 yrs 9 mos",
    company: "PT. Bank Negara Indonesia",
    type: "Contract · On-site",
    role: "Application Developer",
    bullets: [
      "Enhanced backend and frontend features for mobile banking applications, improving user experience.",
      "Collaborated in requirements gathering sessions with users and system analysts for accurate development.",
      "Conducted Software Integration Testing and created delivery documentation and unit tests.",
    ],
    tags: ["HTML", "JavaScript", "C#", "SIT", "SoapUI", "Mobile Banking"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          Career
        </div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          Experience
        </h2>

        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "32px",
                padding: "32px 0",
                borderBottom:
                  i < experiences.length - 1
                    ? "0.5px solid rgba(255,255,255,0.05)"
                    : "none",
              }}
            >
              {/* LEFT */}
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#555",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  {exp.period}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#444",
                    fontFamily: "Inter, sans-serif",
                    marginBottom: "8px",
                  }}
                >
                  {exp.duration}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#C8FF00",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.03em",
                    marginBottom: "6px",
                  }}
                >
                  {exp.company}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    color: "#555",
                    background: "rgba(255,255,255,0.04)",
                    border: "0.5px solid rgba(255,255,255,0.07)",
                    padding: "2px 8px",
                    borderRadius: "100px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {exp.type}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "#F0F0F0",
                    marginBottom: "14px",
                  }}
                >
                  {exp.role}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "16px",
                  }}
                >
                  {exp.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        fontFamily: "Inter, sans-serif",
                        lineHeight: 1.7,
                        paddingLeft: "16px",
                        position: "relative",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#C8FF00",
                          fontSize: "11px",
                          top: "4px",
                        }}
                      >
                        —
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "10px",
                        color: "#777",
                        background: "rgba(255,255,255,0.04)",
                        border: "0.5px solid rgba(255,255,255,0.07)",
                        padding: "3px 10px",
                        borderRadius: "100px",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
