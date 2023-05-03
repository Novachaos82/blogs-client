import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../loggedIncheck";
import jwt_decode from "jwt-decode";
import Navbar from "../HomeComponents/Navbar";
import DashBoardPost from "./DashBoardPost";

function DashBoardMain() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("secret_token");

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

  const decoded = jwt_decode(token);

  const userID = decoded.user._id;
  //console.log(posts);
  //console.log(decoded.user._id);
  return (
    <div>
      <Navbar />
      <div>
        {posts.map((post, index) => {
          return (
            <DashBoardPost
              key={index}
              token={token}
              userId={userID}
              post={post}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DashBoardMain;
