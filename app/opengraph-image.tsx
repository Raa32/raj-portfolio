import { ImageResponse } from "next/og";

export const alt = "Raj Sahu, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0908",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#8A8578",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          BASE CAMP / 0M
        </div>
        <div
          style={{
            color: "#C4B49A",
            fontSize: 120,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: -2,
            marginTop: 24,
          }}
        >
          RAJ SAHU
        </div>
        <div
          style={{
            color: "#F2EFE8",
            fontSize: 32,
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          I build the infrastructure software runs on, and I know how to
          support the people who use it.
        </div>
        <div
          style={{
            color: "#D96C3F",
            fontSize: 24,
            marginTop: 40,
            letterSpacing: 4,
          }}
        >
          rxj.life
        </div>
      </div>
    ),
    size
  );
}
