import React, {
  useEffect,
  useState,
  useRef,
  FormEventHandler,
  FormEvent,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { token } from "../utils/getUserid";
import Navbar from "../HomeComponents/Navbar";

function DashboardPostEdit() {
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType>();
  const { id } = useParams();

  const titleRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);
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
      console.log(data.posts); // do something with the data
      setPost(data.post);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(post);

  const handleForm: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (titleRef.current && detailsRef.current) {
      changeSubmit(titleRef.current.value, detailsRef.current.value);
    }
  };

  const changeSubmit = async (title: string, details: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${post?._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: post?._id,
            title: title,
            date: post?.date,
            details: details,
            user_name: post?.user_name,
            published: post?.published,
          }),
        }
      );

      const data = await response.json();
      navigate("/dashboard");
      //console.log(response);
      if (data.error) {
        //console.log(data.error);
      }
    } catch (error) {
      //console.log(error);
    }
  };
  const deletePost = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${post?._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      navigate("/dashboard");
      //console.log(response);
      if (data.error) {
        //console.log(data.error);
      }
    } catch (error) {
      //console.log(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const scHeight = e.target.scrollHeight;
    if (detailsRef.current) {
      detailsRef.current.style.height = `${scHeight}px`;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="form-outer">
          <form action="" onSubmit={handleForm} className="form-div">
            <label htmlFor="title" className="label-classes">
              Title
            </label>
            <input
              className="input-classes"
              defaultValue={post?.title}
              ref={titleRef}
              type="text"
              id="title"
              name="title"
              placeholder="title"
              required
            />

            <label htmlFor="details" className="label-classes">
              {" "}
              Details
            </label>
            <textarea
              onInput={handleInputChange}
              defaultValue={post?.details}
              className="input-classes"
              ref={detailsRef}
              name="details"
              id="details"
              placeholder="details"
              required
            />
            <button className="submit-btn" type="submit">
              submit
            </button>
            <button className="delete-btn mt-10" onClick={deletePost}>
              Delete Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DashboardPostEdit;
