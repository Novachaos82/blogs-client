import Login from "../components/AuthComponents/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "../components/AuthComponents/Signup";
import PostPage from "./PostPage";
import DashBoardMain from "../components/Dashboard/DashBoardMain";
import DashboardPostEdit from "../components/Dashboard/DashboardPostEdit";
import CreatePost from "../components/Dashboard/CreatePost";

function RoutesPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/dashboard/" element={<DashBoardMain />} />
        <Route path="/post/:id/edit" element={<DashboardPostEdit />} />
        <Route path="/post/create" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default RoutesPage;
