import React from "react";

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
              <div onClick={handlePublish}>un publish</div>
            ) : (
              <div onClick={handlePublish}>publish</div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DashBoardPost;
