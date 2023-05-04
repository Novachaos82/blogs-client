import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../loggedIncheck";

import Navbar from "../HomeComponents/Navbar";
import DashBoardPost from "./DashBoardPost";
import { token, userID } from "../utils/getUserid";

function DashBoardMain() {
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
