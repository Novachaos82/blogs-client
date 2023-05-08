import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function DashBoardPost({ post, userId, token, onPostUpdate }) {
  console.log(post);
  console.log(userId);

  const bearer = `Bearer ${token}`;

  const handlePublish = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${post._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: post._id,
            title: post.title,
            date: post.date,
            details: post.details,
            user_name: post.user_name,
            published: !post.published,
          }),
        }
      );

      const data = await response.json();
      onPostUpdate();
      console.log(response);
      if (data.error) {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isoString = post.date;
  const date = new Date(isoString);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  return (
    <div className="flex justify-center gap-4 items-center">
      {post.user_name._id === userId ? (
        <div className="bg-[#ffffff] w-[40%] flex flex-col justify-center rounded-md items-center p-4 shadow-md">
          <div className="text-2xl font-bold">{post.title}</div>
          <div className="flex gap-2 text-gray-400">
            <p>{formattedDate},</p>
            <p>{formattedTime}</p>
          </div>
          <div>
            {post.published ? (
              <button onClick={handlePublish} className="publish-btn">
                un publish
              </button>
            ) : (
              <button onClick={handlePublish} className="publish-btn">
                publish
              </button>
            )}
          </div>

          <div className="flex gap-4 mt-4">
            <div>
              <Link
                to={`/post/${post._id}/edit`}
                className="bg-green-400 p-2 pl-4 pr-4 rounded-md"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DashBoardPost;
