import React from 'react'
import component from "../assets/blog-authors-writing-articles_179970-1523.avif"
function Head() {
  return (
    <div className='flex justify-center items-center  text-5xl  font-extrabold pt-[10%] font-sans leading-snug'>
        <p className='w-[60%]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa illo aspernatur doloribus vitae? 

        </p>

        <img className='w-[20%] rounded-2xl' src={component} alt="" />
        
    </div>
  )
}

export default Head