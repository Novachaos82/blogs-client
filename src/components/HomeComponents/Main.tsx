import MainImg from "../../assets/mainImg.jpeg";
import HomePosts from "./HomePosts";

interface Props {
  posts: PostType[];
}
const Main: React.FC<Props> = ({ posts }) => {
  //posts.forEach((post) => {
  //  console.log(post);
  //});

  return (
    <div className="pl-36 pr-36 flex justify-center mt-52 flex-col ">
      <div className="flex justify-center items-center">
        <div className="bg-[#f6f5fb] flex justify-center w-[90%] rounded-3xl">
          <div className="bg-black w-[50%]  flex justify-center rounded-3xl pointer-events-none">
            <img className="rounded-3xl" src={MainImg} alt="" />
          </div>
          <div className=" rounded-tr-3xl rounded-br-3xl w-[50%] bg-[#f6f5fb] flex justify-center p-12 flex-col gap-4">
            <div className="text-3xl font-bold capitalize" id="title">
              {posts[0]?.title}
            </div>
            <div className="text-md text-gray-500">
              In today's fast-paced digital landscape, adaptability is key. From
              the ever-evolving world of social media to the intricacies of
              blockchain technology, our blog is your compass for navigating the
              dynamic realm of the internet. Delve into insightful articles that
              decode complex concepts, uncover the secrets of successful
              entrepreneurship, and explore the latest breakthroughs in science
              and innovation. Join us on a journey of discovery, where we bridge
              the gap between knowledge and curiosity. With a commitment to
              providing valuable content, we aim to empower and inspire you to
              thrive in an ever-changing world.
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
};

export default Main;
