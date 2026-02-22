import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { fetchEmployees } from "../services/api";

function SalaryChart() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const employees = await fetchEmployees();
      setData(employees.slice(0, 10));
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#2d2d2d",
      padding: "20px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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

        {/* Header */}
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "6px"
          }}>
            Salary Chart
          </h1>
          <p style={{
            fontSize: "14px",
            color: "#cccccc"
          }}>
            Employee salary distribution (first 10 employees)
          </p>
        </div>

        {/* Chart Card */}
        <div style={{
          border: "1px solid #404040",
          borderRadius: "6px",
          padding: "24px",
          backgroundColor: "#1a1a1a"
        }}>
          {loading ? (
            <div style={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <p style={{ color: "#cccccc", fontSize: "18px" }}>Loading chart...</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={600}>
              <BarChart data={data} margin={{ top: 30, right: 40, left: 20, bottom: 100 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: "#cccccc", fontSize: 14 }}
                  angle={-45}
                  textAnchor="end"
                  height={120}
                />
                <YAxis 
                  tick={{ fill: "#cccccc", fontSize: 14 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #404040",
                    borderRadius: "6px",
                    color: "#ffffff"
                  }}
                />
                <Bar dataKey="salary" fill="#2563eb" radius={[12, 12, 0, 0]} width={60} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}

export default SalaryChart;