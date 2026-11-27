import { ImageResponse } from "next/og";

export const alt = "Patkar Infotech — Websites, apps and custom software built for business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "52px 64px",
          background: "linear-gradient(120deg, #ffffff, #eaf5ff)",
          borderTop: "12px solid #087cba",
          color: "#10233f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "2px" }}>
            PATKAR INFOTECH
          </div>
          <div style={{ fontSize: 22, color: "#52647b", marginTop: 8 }}>
            Solutions That Empower
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-3px" }}>
          <div>Websites, Apps &amp;</div>
          <div>Custom Software.</div>
          <div style={{ color: "#087cba" }}>Built for Business.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23, color: "#52647b" }}>
          <div>Jabalpur, India · Working worldwide</div>
          <div style={{ color: "#087cba", fontWeight: 700 }}>patkarinfotech.com</div>
        </div>
      </div>
    ),
    size,
  );
}
