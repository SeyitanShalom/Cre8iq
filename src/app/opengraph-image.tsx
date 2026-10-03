import { ImageResponse } from "next/og";

export const alt = "Cre8iq premium creative portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#001224",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            Cre
            <span style={{ color: "#00acb5" }}>8</span>
            iq
          </div>
          <div
            style={{
              border: "1px solid rgba(227,254,255,0.22)",
              borderRadius: 8,
              color: "#e3feff",
              fontSize: 24,
              padding: "14px 20px",
            }}
          >
            Lagos, Nigeria
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#00acb5",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Graphic Design / UI/UX Product Design / Web Development
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 800,
              letterSpacing: 0,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Premium personal creative portfolio for refined digital work.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {["Brand visuals", "Product experiences", "Responsive websites"].map(
            (item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(227,254,255,0.22)",
                  borderRadius: 8,
                  color: "#e3feff",
                  fontSize: 24,
                  padding: "16px 20px",
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
