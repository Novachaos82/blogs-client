import Navbar from "../HomeComponents/Navbar";
import LoginCardImage from "../../assets/signup.png";
import { useEffect, useRef, useState } from "react";
function Signup() {
  const [error, setError] = useState();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = (e: Event) => {
    e.preventDefault();
    signup(usernameRef.current.value, passwordRef.current.value);
  };
  const signup = async (username: object, password: object) => {
    try {
      const response = await fetch("http://localhost:3000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const err = await response.json();
        setError(err);
        return null;
      }
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  console.log(error);

  return (
    <div className="bg-[#eceaf6]">
      <Navbar />
      <div
        id="card-div"
        className=" flex justify-center items-center p-28 gap-0 "
      >
        <div className="flex w-[80%]">
          <div className="w-[50%]  bg-gradient-to-b from-[#dec5fd] to-blue-300 backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-md">
            <img src={LoginCardImage} alt="" />
          </div>
          <div
            id="card"
            className="bg-white   w-[50%]  pt-28 pb-48 pl-20 pr-20 rounded-md "
          >
            <p className="text-4xl font-bold pb-12">Sign up</p>
            <form
              className="flex flex-col"
              action="http://localhost:3000/signup/"
              onSubmit={handleSignup}
              method="POST"
            >
              <label className="pb-2 pt-2 text-lg" htmlFor="username">
                Username
              </label>
              <input
                ref={usernameRef}
                className={`rounded-md p-3 border-solid border-[1px] ${
                  error ? `border-red-400` : `border-gray-200`
                }`}
                type="text"
                id="username"
                name="username"
                required
              />
              <label className=" text-lg pb-2 pt-2 " htmlFor="password">
                Password
              </label>
              <input
                ref={passwordRef}
                className={`rounded-md p-3 border-solid border-[1px] ${
                  error ? `border-red-400` : `border-gray-200`
                }`}
                type="password"
                id="password"
                name="password"
                required
              />

              <div className="flex flex-col text-red-400 font-semibold transition-all duration-200">
                {error?.errors.map((err, index) => {
                  return <div key={index}>{err.msg}</div>;
                })}
              </div>

              <button
                type="submit"
                className="font-bold text-xl text-white bg-gradient-to-r from-[#5eacfa] via-[#5f66fa] to-[#9686fc]  mt-4 rounded-md p-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
