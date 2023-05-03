import Login from "../components/AuthComponents/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "../components/AuthComponents/Signup";
import PostPage from "./PostPage";
import DashBoardMain from "../components/Dashboard/DashBoardMain";

function RoutesPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/dashboard/" element={<DashBoardMain />} />
      </Routes>
    </>
  );
}

export default RoutesPage;
