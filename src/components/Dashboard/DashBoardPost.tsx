import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function DashBoardPost({ post, userId, token }) {
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
      console.log(response);
      if (data.error) {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {post.user_name._id === userId ? (
        <div>
          <div>{post.title}</div>
          <div>
            {post.published ? (
              <button onClick={handlePublish}>un publish</button>
            ) : (
              <button onClick={handlePublish}>publish</button>
            )}
          </div>
          <div>
            <Link to={`/post/${post._id}/edit`}>Edit</Link>
          </div>

          <div>
            <Link to={`/post/create`}>Create Post</Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DashBoardPost;
