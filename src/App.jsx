import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import Details from "./components/Details";
import PhotoResult from "./components/PhotoResult";
import SalaryChart from "./components/SalaryChart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/list" element={<List />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/photo" element={<PhotoResult />} />
      <Route path="/salary-chart" element={<SalaryChart />} />
    </Routes>
  );
}

export default App;