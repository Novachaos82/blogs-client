import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentComponent from "../components/CommentComponent";

function PostPage() {
  const { id } = useParams();

  console.log(id);

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

      console.log(result);

      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>Page</div>
      <CommentComponent />
    </div>
  );
}

export default PostPage;
