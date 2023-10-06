import component from "../../assets/blog-authors-writing-articles_179970-1523.avif";
function Head() {
  return (
    <div className="flex justify-center items-center  text-5xl  font-extrabold pt-[10%] font-sans leading-snug pl-36 pr-36 pointer-events-none">
      <p className="w-[60%]">
        Your source for diverse, informative, and engaging blog content.
      </p>

      <img className="w-[40%] rounded-2xl" src={component} alt="" />
    </div>
  );
}

export default Head;
