import React from "react";
import Navbar from "../components/HomeComponents/Navbar";
import { Link } from "react-router-dom";

function Post({ posts }) {
  console.log(posts);
  return (
    <div className="bg-[#eceaf6] min-h-screen h-full">
      <Navbar />
      <div className="flex justify-center gap-5 flex-col items-center pb-12">
        {posts.map((post) => {
          const isoString = post.date;
          const date = new Date(isoString);
          console.log(date.toLocaleString());
          const formattedDate = date.toLocaleDateString();
          const formattedTime = date.toLocaleTimeString();

          return (
            <Link
              className="bg-white flex flex-col  w-[30%] min-h-[25vh]  h-fit  rounded-md pl-4 pr-4 justify-center shadow-lg pb-6 pt-4"
              to={`/posts/${post._id}`}
              key={post._id}
            >
              <div className="flex justify-center text-center">
                <div className="text-3xl font-bold">{post.title}</div>
              </div>

              <div className="flex justify-center mb-16">
                <div className="text-xl">{post.user_name.username}</div>
              </div>
              <div className=" flex text-center justify-center gap-2 text-lg">
                <div>{formattedDate},</div>

                <div>{formattedTime}</div>
              </div>

              <div className="flex justify-center">
                <div className="text-center bg-[#e3e9e5] rounded-md mt-2 p-2 w-[80%]">
                  view post
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
