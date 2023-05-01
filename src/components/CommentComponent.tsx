import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function CommentComponent() {
  const commentRef = useRef(null);
  const usernameRef = useRef(null);
  const { id } = useParams();
  useEffect(() => {
    commentData();
  }, []);
  const commentData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${id}/comments`
      );
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

  const handleCommentSubmit = (e: Event) => {
    e.preventDefault();
    postComment(commentRef.current.value, usernameRef.current.value);
  };
  const postComment = async (comment, username) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comment, username }),
        }
      );

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
      <form action="" onSubmit={handleCommentSubmit}>
        <input
          ref={commentRef}
          type="text"
          name="comment"
          placeholder="comment"
          id="comment"
        />
        <input
          ref={usernameRef}
          type="text"
          name="username"
          placeholder="username"
          id="username"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentComponent;
