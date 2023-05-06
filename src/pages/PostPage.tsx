import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentComponent from "../components/CommentComponent";
import Navbar from "../components/HomeComponents/Navbar";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  //console.log(id);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`);

      if (!response.ok) {
        throw new Error("response error on single post page");
      }

      const result = await response.json();

      setPost(result.post);

      return result;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className=" min-h-screen h-full">
      <Navbar />
      <div className="flex justify-center mt-16">
        <div id="post-div" className="w-[80%]">
          <div className="text-5xl font-bold capitalize text-center">
            {post?.title}
          </div>
          <div className="mt-16 text-lg font-medium">{post?.details}</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <CommentComponent />
        </div>
      </div>
    </div>
  );
}

export default PostPage;
