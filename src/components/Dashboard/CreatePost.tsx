import React, { FormEvent, FormEventHandler, useRef } from "react";
import { token } from "../utils/getUserid";
import Navbar from "../HomeComponents/Navbar";

function CreatePost() {
  const titleRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  const bearer = `Bearer ${token}`;

  const handlesubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (titleRef.current && detailsRef.current) {
      createSubmit(titleRef.current.value, detailsRef.current.value);
    }
  };
  const createSubmit = async (title: string, details: string) => {
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
      //console.error(err);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="form-outer">
        <form action="" onSubmit={handlesubmit} className="form-div">
          <label htmlFor="title" className="label-classes">
            Title
          </label>
          <input
            ref={titleRef}
            type="text"
            placeholder="title"
            name="title"
            className="input-classes"
          />
          <label htmlFor="details" className="label-classes">
            {" "}
            Details
          </label>
          <textarea
            className="input-classes"
            ref={detailsRef}
            placeholder="details"
            name="details"
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
