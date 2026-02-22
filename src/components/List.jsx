import React from "react";
import { useNavigate } from "react-router-dom";

const employees = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  salary: Math.floor(40000 + Math.random() * 40000),
  city: ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"][i % 5],
}));

function EmployeeList() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#2d2d2d",
      padding: "20px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "8px"
            }}>
              Employee List
            </h1>
            <p style={{
              fontSize: "14px",
              color: "#cccccc"
            }}>
              Click on any employee to view details
            </p>
          </div>
          <button
            onClick={() => navigate("/salary-chart")}
            style={{
              padding: "10px 20px",
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

        {/* Table */}
        <div style={{
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
        }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#000000"
          }}>
            <thead>
              <tr style={{ backgroundColor: "#1a1a1a", borderBottom: "2px solid #333333" }}>
                <th style={{
                  padding: "20px 24px",
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Name
                </th>
                <th style={{
                  padding: "20px 24px",
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Salary
                </th>
                <th style={{
                  padding: "20px 24px",
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  City
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, index) => (
                <tr
                  key={emp.id}
                  onClick={() => navigate(`/details/${emp.id}`, { state: emp })}
                  style={{
                    borderBottom: "1px solid #333333",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    backgroundColor: index % 2 === 0 ? "#1a1a1a" : "#262626"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#404040"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#1a1a1a" : "#262626"}
                >
                  <td style={{
                    padding: "20px 24px",
                    fontSize: "17px",
                    color: "#ffffff",
                    fontWeight: "500"
                  }}>
                    {emp.name}
                  </td>
                  <td style={{
                    padding: "20px 24px",
                    fontSize: "17px",
                    color: "#ffffff",
                    fontWeight: "500"
                  }}>
                    ₹{emp.salary.toLocaleString('en-IN')}
                  </td>
                  <td style={{
                    padding: "20px 24px",
                    fontSize: "17px",
                    color: "#ffffff",
                    fontWeight: "500"
                  }}>
                    {emp.city}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;