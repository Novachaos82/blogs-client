import React, { useRef } from "react";
import { token } from "../utils/getUserid";

function CreatePost() {
  const titleRef = useRef(null);
  const detailsRef = useRef(null);

  const bearer = `Bearer ${token}`;

  const handlesubmit = (e: Event) => {
    e.preventDefault();
    createSubmit(titleRef.current.value, detailsRef.current.value);
  };
  const createSubmit = async (title, details) => {
    try {
      const response = await fetch(`http://localhost:3000/api/posts`, {
        method: "POST",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          details: details,
        }),
      });

      if (!response.ok) {
        throw new Error("response error");
      }
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input ref={titleRef} type="text" placeholder="title" name="title" />
        <input
          ref={detailsRef}
          type="textarea"
          placeholder="detauks"
          name="details"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
