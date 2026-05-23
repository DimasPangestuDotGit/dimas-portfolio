export default function Footer() {
  return (
    <footer
      style={{
        padding: "24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: 500 }}>
        Dimas<span style={{ color: "#C8FF00" }}>.</span>
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "#444",
          fontFamily: "Inter, sans-serif",
        }}
      >
        © 2025 Dimas Pangestu — Designed & built with care
      </div>
    </footer>
  );
}
