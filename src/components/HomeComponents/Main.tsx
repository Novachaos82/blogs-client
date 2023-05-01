import { useEffect, useState } from "react";
import MainImg from "../../assets/mainImg.jpeg";
import HomePosts from "./HomePosts";
function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getPosts() {
    try {
      const response = await fetch("http://localhost:3000/api/posts/");
      const data = await response.json();
      //console.log(data.posts); // do something with the data
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
    }
  }

  //posts.forEach((post) => {
  //  console.log(post);
  //});

  return (
    <div className="pl-36 pr-36 flex justify-center mt-52 flex-col ">
      <div className="flex justify-center items-center">
        <div className="bg-[#f6f5fb] flex justify-center w-[90%] rounded-3xl">
          <div className="bg-black w-[50%]  flex justify-center rounded-3xl">
            <img className="rounded-3xl" src={MainImg} alt="" />
          </div>
          <div className=" rounded-tr-3xl rounded-br-3xl w-[50%] bg-[#f6f5fb] flex justify-center p-12 flex-col gap-4">
            <div className="text-3xl font-bold capitalize" id="title">
              {posts[0]?.title}
            </div>
            <div className="text-md text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              numquam accusantium culpa expedita, amet distinctio at quos
              commodi delectus illo labore beatae odio voluptate, quasi soluta
              tempore quas recusandae perspiciatis vel ab blanditiis cum est
              maiores! Voluptates culpa aspernatur aliquam voluptatum totam,
              perferendis aut libero quidem optio itaque, voluptatibus fuga
              pariatur, sed atque dolor. Doloribus unde suscipit soluta
              dignissimos, fugiat rem sed dolor repudiandae id tempora
              laudantium assumenda corrupti, cupiditate a alias ex asperiores
              voluptatem molestias est fuga in voluptate.
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-24 flex-col">
        <div className="text-3xl font-bold">All posts</div>
        <div id="all-posts">
          <HomePosts posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default Main;
