import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PhotoResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state;

  if (!image) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2d2d2d",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#cccccc", marginBottom: "20px", fontSize: "16px" }}>
            No photo captured.
          </p>
          <button
            onClick={() => navigate("/list")}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#fff",
              backgroundColor: "#2563eb",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Back to List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#2d2d2d",
      padding: "20px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Back Button */}
        <button
          onClick={() => navigate("/list")}
          style={{
            marginBottom: "24px",
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#2563eb",
            backgroundColor: "transparent",
            border: "1px solid #2563eb",
            borderRadius: "6px",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#2563eb";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#2563eb";
          }}
        >
          ← Back to List
        </button>

        {/* Header */}
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "6px"
          }}>
            Photo Result
          </h1>
          <p style={{
            fontSize: "14px",
            color: "#cccccc"
          }}>
            Your captured employee photo
          </p>
        </div>

        {/* Photo Card */}
        <div style={{
          border: "1px solid #404040",
          borderRadius: "6px",
          padding: "24px",
          backgroundColor: "#1a1a1a",
          textAlign: "center"
        }}>
          {image && (
            <>
              <img
                src={image}
                alt="Captured photo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "6px",
                  marginBottom: "16px",
                  border: "1px solid #cbd5e0"
                }}
              />
              <p style={{
                fontSize: "14px",
                color: "#4a5568"
              }}>
                Photo captured successfully
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoResult;