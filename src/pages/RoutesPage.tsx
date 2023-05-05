import Login from "../components/AuthComponents/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "../components/AuthComponents/Signup";
import PostPage from "./PostPage";
import DashBoardMain from "../components/Dashboard/DashBoardMain";
import DashboardPostEdit from "../components/Dashboard/DashboardPostEdit";
import CreatePost from "../components/Dashboard/CreatePost";
import { useEffect, useState } from "react";
import Post from "./Post";

function RoutesPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getPosts() {
    try {
      const response = await fetch("http://localhost:3000/api/posts/");
      const data = await response.json();
      //console.log(data.posts); // do something with the data
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/dashboard/" element={<DashBoardMain />} />
        <Route path="/post/:id/edit" element={<DashboardPostEdit />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/posts" element={<Post posts={posts} />} />
      </Routes>
    </>
  );
}

export default RoutesPage;
