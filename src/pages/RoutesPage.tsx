import Login from "../components/AuthComponents/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "../components/AuthComponents/Signup";

function RoutesPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default RoutesPage;
