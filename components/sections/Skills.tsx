"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    cat: "Development",
    skills: [
      { name: "JavaScript", pct: 82 },
      { name: "HTML & CSS", pct: 88 },
      { name: "C#", pct: 72 },
      { name: "Database (SQL)", pct: 80 },
    ],
  },
  {
    cat: "Quality Assurance",
    skills: [
      { name: "Software QA", pct: 85 },
      { name: "UAT", pct: 88 },
      { name: "SIT", pct: 84 },
      { name: "Postman", pct: 78 },
    ],
  },
  {
    cat: "Analysis & Tools",
    skills: [
      { name: "Apache Superset", pct: 75 },
      { name: "Documentation", pct: 90 },
      { name: "Business Process Design", pct: 78 },
      { name: "Requirements Gathering", pct: 82 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Expertise
        </div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          Tech & skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
              style={{
                background: "#1A1A1A",
                border: "0.5px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "#C8FF00",
                  letterSpacing: "0.06em",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {group.cat}
              </div>

              {group.skills.map((skill, si) => (
                <div key={skill.name} style={{ marginBottom: "14px" }}>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      fontFamily: "Inter, sans-serif",
                      marginBottom: "6px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{skill.name}</span>
                    <span style={{ color: "#555" }}>{skill.pct}%</span>
                  </div>
                  <div
                    style={{
                      height: "2px",
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: si * 0.1,
                        ease: "easeOut",
                      }}
                      style={{
                        height: "2px",
                        background: "#C8FF00",
                        borderRadius: "1px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
