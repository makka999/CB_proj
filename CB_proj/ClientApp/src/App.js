import { Route, Routes, useNavigate } from "react-router-dom";
import "./custom.css";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";

export default function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-up");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<button onClick={handleClick}>Register!</button>}
      />
      <Route path="/sign-up" element={<RegisterPage />} />
    </Routes>
  );
}
