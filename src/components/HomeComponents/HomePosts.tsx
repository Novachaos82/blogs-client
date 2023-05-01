import mainImg from "../../assets/mainImg.jpeg";

function HomePosts({ posts }) {
  posts.forEach((post) => {
    console.log(post.title);
  });
  return (
    <div className="flex justify-center mt-20 ">
      {posts ? (
        posts.map((post) => {
          return (
            <div className="flex justify-center w-full h-full" key={post._id}>
              <div className="flex flex-col w-2/3 max-w-lg h-full">
                <img
                  className="rounded-tl-lg rounded-tr-lg w-full h-[100%] object-cover object-center my-4"
                  src={mainImg}
                  alt=""
                />
                <div className="font-bold text-2xl mt-6 ">{post.title}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div>no</div>
      )}
    </div>
  );
}

export default HomePosts;
