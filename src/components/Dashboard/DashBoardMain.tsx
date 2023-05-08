import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../loggedIncheck";

import Navbar from "../HomeComponents/Navbar";
import DashBoardPost from "./DashBoardPost";
import { token, userID } from "../utils/getUserid";
import { Link } from "react-router-dom";

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
    <div className="bg-[#eceaf6] min-h-screen h-full">
      <Navbar />
      <div className="flex justify-center">
        <div className="bg-[#5948f7] p-2 text-white font-semibold mb-8 rounded-md hover:brightness-75 transition-all duration-200 hover:-translate-y-1">
          <Link to={`/post/create`}>Create Post</Link>
        </div>
      </div>
      <div className="flex justify-center gap-4 flex-col ">
        {posts.map((post, index) => {
          return (
            <DashBoardPost
              key={index}
              token={token}
              userId={userID}
              post={post}
              onPostUpdate={getPosts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DashBoardMain;
