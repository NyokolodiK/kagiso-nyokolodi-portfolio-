import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Kagiso Nyokolodi — Principal Software Engineer, frontend architecture and applied AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const [sansRegular, sansSemiBold, monoRegular] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/IBMPlexSans-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/IBMPlexSans-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/IBMPlexMono-Regular.ttf")),
  ]);

  const layers = [
    { label: "CONTEXT", detail: "product state", color: "#7aa2ff" },
    { label: "TOOLS", detail: "MCP · APIs", color: "#b592ff" },
    { label: "EVIDENCE", detail: "live sources", color: "#5cf2b8" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#06090e",
          color: "#e9f0f6",
          fontFamily: "IBM Plex Sans",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            backgroundImage:
              "linear-gradient(#7aa2ff0d 1px, transparent 1px), linear-gradient(90deg, #7aa2ff0d 1px, transparent 1px)",
            backgroundSize: "76px 76px",
            maskImage:
              "radial-gradient(ellipse at 50% 0%, #000 0%, transparent 78%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -80,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, #2559e62e, transparent 68%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, #5cf2b81a, transparent 68%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid #293a49",
            borderRadius: 18,
            display: "flex",
            flexDirection: "column",
            background: "#0b1219cc",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 28px",
              borderBottom: "1px solid #17232e",
              fontFamily: "IBM Plex Mono",
              fontSize: 13,
              letterSpacing: "2.4px",
              color: "#7f8f9e",
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#5cf2b8",
                  boxShadow: "0 0 16px #5cf2b8",
                  display: "flex",
                }}
              />
              <span style={{ color: "#e9f0f6" }}>Kagiso Nyokolodi</span>
            </div>
            <span style={{ color: "#5cf2b8" }}>Agent runtime / 2026</span>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              padding: "38px 28px 30px 42px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 660,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "IBM Plex Mono",
                  fontSize: 14,
                  letterSpacing: "2.2px",
                  color: "#7aa2ff",
                  textTransform: "uppercase",
                }}
              >
                Principal Software Engineer
              </span>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 22,
                  fontSize: 74,
                  fontWeight: 600,
                  letterSpacing: "-3.2px",
                  lineHeight: 1.02,
                }}
              >
                <span>Frontend systems</span>
                <span>for complex</span>
                <span style={{ color: "#5cf2b8" }}>workflows.</span>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: 24,
                  width: 70,
                  height: 2,
                  background: "linear-gradient(90deg, #7aa2ff, #5cf2b8)",
                }}
              />

              <span
                style={{
                  display: "flex",
                  marginTop: 20,
                  maxWidth: 560,
                  fontSize: 21,
                  lineHeight: 1.45,
                  color: "#94a5b5",
                }}
              >
                Principal-level frontend architecture, applied AI and delivery
                across internal operations, partner portals and traveller-facing
                products.
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 24,
                  fontFamily: "IBM Plex Mono",
                  fontSize: 12,
                  letterSpacing: "1.6px",
                  color: "#7f8f9e",
                }}
              >
                <span style={{ color: "#5cf2b8" }}>TRACE</span>
                <span>context → plan → tools → evidence → response</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                position: "relative",
                marginLeft: 28,
                marginTop: 8,
                flexDirection: "column",
                gap: 10,
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignSelf: "flex-end",
                  fontFamily: "IBM Plex Mono",
                  fontSize: 11,
                  letterSpacing: "1.8px",
                  color: "#5cf2b8",
                }}
              >
                03 LAYERS
              </span>

              {layers.map((layer, index) => (
                <div
                  key={layer.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 16px",
                    height: 84,
                    borderRadius: 12,
                    background:
                      index === 2 ? "#0e211c" : "rgba(255, 255, 255, 0.025)",
                    border: `1px solid ${index === 2 ? "#5cf2b84d" : "#293a49"}`,
                    boxShadow:
                      index === 2 ? "0 0 44px -18px #5cf2b8" : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "IBM Plex Mono",
                        fontSize: 10,
                        letterSpacing: "1.6px",
                        color: layer.color,
                      }}
                    >
                      0{index + 1}
                    </span>
                    <span
                      style={{
                        marginTop: 2,
                        fontSize: 19,
                        fontWeight: 600,
                        letterSpacing: "-0.6px",
                      }}
                    >
                      {layer.label}
                    </span>
                    <span
                      style={{
                        marginTop: 1,
                        fontFamily: "IBM Plex Mono",
                        fontSize: 10,
                        color: "#94a5b5",
                      }}
                    >
                      {layer.detail}
                    </span>
                  </div>
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 999,
                      background: layer.color,
                      display: "flex",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 28px",
              borderTop: "1px solid #17232e",
              fontFamily: "IBM Plex Mono",
              fontSize: 12,
              letterSpacing: "1.4px",
              color: "#7f8f9e",
            }}
          >
            <span style={{ color: "#e9f0f6" }}>kagiso-nyokolodi.dev</span>
            <span>Principal engineering × applied AI</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "IBM Plex Sans", data: sansRegular, style: "normal", weight: 400 },
        { name: "IBM Plex Sans", data: sansSemiBold, style: "normal", weight: 600 },
        { name: "IBM Plex Mono", data: monoRegular, style: "normal", weight: 400 },
      ],
    },
  );
}
