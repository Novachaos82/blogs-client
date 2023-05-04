import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { token } from "../utils/getUserid";

function DashboardPostEdit() {
  const [post, setPost] = useState();
  const { id } = useParams();

  const titleRef = useRef(null);
  const detailsRef = useRef(null);
  const bearer = `Bearer ${token}`;

  console.log(id);
  useEffect(() => {
    getPosts();
  }, []);
  async function getPosts() {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`);
      if (!response.ok) {
        throw new Error("resp error");
      }
      const data = await response.json();
      //console.log(data.posts); // do something with the data
      setPost(data.post);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(post);

  const handleForm = (e: Event) => {
    e.preventDefault();
    changeSubmit(titleRef.current.value, detailsRef.current.value);
  };

  const changeSubmit = async (title, details) => {
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
            title: title,
            date: post.date,
            details: details,
            user_name: post.user_name,
            published: post.published,
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
  const deletePost = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${post._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
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
      <form action="" onSubmit={handleForm}>
        <input
          ref={titleRef}
          type="text"
          id="title"
          name="title"
          placeholder="title"
        />
        <input
          ref={detailsRef}
          type="textarea"
          name="details"
          id="details"
          placeholder="details"
        />
        <button type="submit">submit</button>
      </form>

      <button className="deleteBtn" onClick={deletePost}>
        Delete Post
      </button>
    </div>
  );
}

export default DashboardPostEdit;
