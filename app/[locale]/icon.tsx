import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 62,
  height: 62,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 17,
          fontFamily: "var(--font-ubuntu)",
          background: "linear-gradient(to bottom, #434343, #000000)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D7A908",
          borderRadius: "50%",
          padding: 10,
        }}
      >
        S/Z
      </div>
    ),
    {
      ...size,
    },
  );
}
