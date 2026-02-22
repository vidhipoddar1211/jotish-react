import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state;
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const screenshot = webcamRef.current.getScreenshot();
    navigate("/photo", { state: screenshot });
  };

  const handleBack = () => {
    navigate("/list");
  };

  if (!employee) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#4a5568", marginBottom: "20px", fontSize: "16px" }}>
            No employee data found.
          </p>
          <button
            onClick={handleBack}
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
        {/* Navigation Buttons */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "12px" }}>
          <button
            onClick={handleBack}
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#2563eb",
              backgroundColor: "transparent",
              border: "1px solid #2563eb",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.2s"
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
          <button
            onClick={() => navigate("/salary-chart")}
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#fff",
              backgroundColor: "#2563eb",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#1d4ed8"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#2563eb"}
          >
            📊 View Salary Chart
          </button>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "6px"
          }}>
            Employee Details
          </h1>
          <p style={{
            fontSize: "14px",
            color: "#cccccc"
          }}>
            View employee information and capture photo
          </p>
        </div>

        {/* Employee Info Card */}
        <div style={{
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          padding: "20px",
          marginBottom: "24px",
          backgroundColor: "#f9fafb"
        }}>
          <h2 style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "16px"
          }}>
            Information
          </h2>

          <div style={{
            display: "grid",
            gap: "12px"
          }}>
            <div style={{
              padding: "10px 0",
              borderBottom: "1px solid #e2e8f0"
            }}>
              <label style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#4a5568",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Name
              </label>
              <p style={{
                fontSize: "16px",
                color: "#1a202c",
                marginTop: "4px",
                fontWeight: "500"
              }}>
                {employee?.name || "N/A"}
              </p>
            </div>

            <div style={{
              padding: "10px 0",
              borderBottom: "1px solid #e2e8f0"
            }}>
              <label style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#4a5568",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Salary
              </label>
              <p style={{
                fontSize: "16px",
                color: "#1a202c",
                marginTop: "4px",
                fontWeight: "500"
              }}>
                {employee?.salary ? `₹${employee.salary.toLocaleString('en-IN')}` : "N/A"}
              </p>
            </div>

            <div style={{
              padding: "10px 0"
            }}>
              <label style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#4a5568",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                City
              </label>
              <p style={{
                fontSize: "16px",
                color: "#1a202c",
                marginTop: "4px",
                fontWeight: "500"
              }}>
                {employee?.city || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Camera Section */}
        <div style={{
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          padding: "20px",
          backgroundColor: "#f9fafb"
        }}>
          <h2 style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "16px"
          }}>
            Camera Preview
          </h2>

          <div style={{
            width: "100%",
            height: "300px",
            backgroundColor: "#000",
            borderRadius: "6px",
            overflow: "hidden",
            marginBottom: "16px"
          }}>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <button
            onClick={capturePhoto}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#fff",
              backgroundColor: "#2563eb",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#1d4ed8"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#2563eb"}
          >
            Capture Photo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;