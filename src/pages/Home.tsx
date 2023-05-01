import { useEffect } from "react";
import Navbar from "../components/HomeComponents/Navbar";
import Head from "../components/HomeComponents/Head";
import Main from "../components/HomeComponents/Main";

function Home() {
  return (
    <div className="bg-[#eceaf6] w-full min-h-screen h-full pb-20 ">
      <Navbar />
      <Head />
      <Main />
    </div>
  );
}

export default Home;
