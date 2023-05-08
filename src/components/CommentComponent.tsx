import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function CommentComponent() {
  const commentRef = useRef(null);
  const usernameRef = useRef(null);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
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

      setComments(result.comments);

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
      commentData();
      const result = await response.json();

      console.log(result);

      return result;
    } catch (err) {
      console.error(err);
    }
  };

  console.log(comments);
  return (
    <div className="flex flex-col justify-center mt-16">
      <div className="flex  flex-col gap-4">
        {comments.map((comment) => {
          const isoString = comment.date;
          const date = new Date(isoString);
          const formattedDate = date.toLocaleDateString();

          return (
            <div
              key={comment._id}
              className=" border-solid border-[1px]  rounded-md p-4 shadow-sm"
            >
              <div className="text-xl font-semibold flex gap-2 items-end">
                {comment.username}
                <span className="text-gray-500 font-thin">|</span>
                <span className="text-gray-500 text-sm"> {formattedDate}</span>
              </div>

              <div className="mt-2 text-lg">{comment.comment}</div>
            </div>
          );
        })}
      </div>
      <form
        action=""
        onSubmit={handleCommentSubmit}
        className="bg-white flex flex-col justify-center p-6 rounded-md mt-16 shadow-lg mb-28"
      >
        <label className="text-lg font-bold" htmlFor="comment">
          Comment:
        </label>
        <textarea
          className="mt-2 rounded-md border-solid border-[1px] border-gray-300 p-4"
          ref={commentRef}
          name="comment"
          placeholder="comment"
          id="comment"
          required
        />
        <label className="text-lg font-bold" htmlFor="username">
          Username:
        </label>

        <input
          className="mt-2 rounded-md border-solid border-[1px] border-gray-300 p-4"
          ref={usernameRef}
          type="text"
          name="username"
          placeholder="username"
          id="username"
          required
        />

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentComponent;
