import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required hardcoded validation
    if (username === "testuser" && password === "Test123") {
      navigate("/list");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#2d2d2d",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <div style={{ width: "100%", maxWidth: "900px", padding: "60px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <h1 style={{
            fontSize: "64px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "20px",
          }}>
            Employee Portal
          </h1>
          <p style={{
            fontSize: "22px",
            color: "#cccccc"
          }}>
            Sign in to your account
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} style={{
          padding: "50px",
          backgroundColor: "#1a1a1a",
          border: "1px solid #404040",
          borderRadius: "12px"
        }}>
          {/* Username Field */}
          <div style={{ marginBottom: "30px" }}>
            <label style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#ffffff",
              display: "block",
              marginBottom: "10px"
            }}>
              Username
            </label>
            <input
              type="text"
              placeholder="testuser"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "16px",
                border: "1px solid #404040",
                borderRadius: "8px",
                backgroundColor: "#2d2d2d",
                color: "#ffffff",
                boxSizing: "border-box"
              }}
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "30px" }}>
            <label style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#ffffff",
              display: "block",
              marginBottom: "10px"
            }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "16px",
                border: "1px solid #404040",
                borderRadius: "8px",
                backgroundColor: "#2d2d2d",
                color: "#ffffff",
                boxSizing: "border-box"
              }}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p style={{
              color: "#ff6b6b",
              marginBottom: "20px",
              fontSize: "15px",
              textAlign: "center"
            }}>
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#fff",
              backgroundColor: "#2563eb",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.2s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#1d4ed8"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#2563eb"}
          >
            Login
          </button>
        </form>

        {/* Help Text */}
        <p style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "14px",
          color: "#999999"
        }}>
          Demo: testuser / Test123
        </p>
      </div>
    </div>
  );
}

export default Login;