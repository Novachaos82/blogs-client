import Navbar from "../HomeComponents/Navbar";
import LoginCardImage from "../../assets/login.png";
import { useRef, useState } from "react";
function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e: Event) => {
    e.preventDefault();

    login(usernameRef.current.value, passwordRef.current.value);
  };
  const login = async (username: object, password: object) => {
    try {
      const response = await fetch("http://localhost:3000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("response error");
      }
      const result = await response.json();
      localStorage.setItem("secret_token", result.token);
      console.log(result.token);
      return result;
    } catch (err) {
      console.error("There was a problem with the fetch operation:", err);
    }
  };
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
            <p className="text-4xl font-bold pb-12">Login</p>
            <form className="flex flex-col" action="" onSubmit={handleLogin}>
              <label className="pb-2 pt-2 text-lg" htmlFor="username">
                Username
              </label>
              <input
                ref={usernameRef}
                className="rounded-md p-3 border-solid border-[1px] border-gray-200"
                type="text"
                id="username"
                name="username"
              />

              <label className=" text-lg pb-2 pt-2 " htmlFor="password">
                Password
              </label>
              <input
                ref={passwordRef}
                className="rounded-md  p-3  border-solid border-[1px] border-gray-200 relative"
                type="password"
                id="password"
                name="password"
              />

              {/*<label className=" text-lg pb-2 pt-2 " htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="rounded-md  p-3  border-solid border-[1px] border-gray-200"
                type="text"
                id="confirmPassword"
                name="confirmPassword"
              />*/}
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

export default Login;
