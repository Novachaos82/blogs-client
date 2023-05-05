import { useEffect } from "react";
import Navbar from "../components/HomeComponents/Navbar";
import Head from "../components/HomeComponents/Head";
import Main from "../components/HomeComponents/Main";

function Home({ posts }) {
  if (localStorage.getItem("secret_token") === null) {
    localStorage.clear();
  }
  return (
    <div className="bg-[#eceaf6] w-full min-h-screen h-full pb-20 ">
      <Navbar />
      <Head />
      <Main posts={posts} />
    </div>
  );
}

export default Home;
