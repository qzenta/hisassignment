import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A2E4A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            color: "#14B8A6",
            fontSize: "15px",
            fontWeight: 900,
            letterSpacing: "-0.5px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          ha
        </span>
      </div>
    ),
    { ...size }
  );
}
