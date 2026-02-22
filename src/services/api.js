import axios from "axios";
// Fallback data used when API is unavailable (CORS / empty response)
const fallbackData = Array.from({ length: 30 }, (_, i) => ({
  name: `Employee ${i + 1}`,
  salary: Math.floor(40000 + Math.random() * 40000),
  city: ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"][i % 5],
}));

export const fetchEmployees = async () => {
  try {
    const response = await axios.post(
      "/api/backend_dev/gettabledata.php",
      {
        username: "test",
        password: "123456",
      }
    );

    const data = response.data;

    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.result)) return data.result;

    // API responded but no usable data
    console.warn("API returned no usable data, using fallback");
    return fallbackData;

  } catch (error) {
    console.warn("API failed, using fallback data");
    return fallbackData;
  }
};