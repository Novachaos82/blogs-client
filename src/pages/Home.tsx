import React, { useState, useEffect } from "react";
import Navbar from "../components/HomeComponents/Navbar";
import Head from "../components/HomeComponents/Head";

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    getPosts();
  });
  async function getPosts() {
    try {
      const response = await fetch("http://localhost:3000/api/posts/");
      const data = await response.json();
      console.log(data); // do something with the data
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-[#eceaf6] w-full min-h-screen h-full pb-20 ">
      <Navbar />
      <Head />
    </div>
  );
}

export default Home;
