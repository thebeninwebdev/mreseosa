import { ImageResponse } from "next/og";

export const alt =
  "Eseosa Osayi — Full-stack engineer building useful web products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#090909",
        color: "#f4f2ee",
        padding: "72px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "#c7a66d",
          fontSize: 24,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        Eseosa Osayi / Full-Stack Engineer
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 86,
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
        }}
      >
        <div style={{ display: "flex" }}>Full-stack engineer</div>
        <div style={{ display: "flex" }}>building useful</div>
        <div style={{ display: "flex", color: "#a98f69" }}>web products.</div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 22,
          color: "rgba(255,255,255,0.62)",
        }}
      >
        Product engineering / AI integrations / Remote worldwide
      </div>
    </div>,
    size,
  );
}
