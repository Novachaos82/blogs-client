import React from 'react'
import blogsIcon from "../assets/blogs.png"
function Navbar() {
  return (
    <div className='w-full flex items-center justify-between flex-column font-semibold pt-8 pb-8 tracking-wider'>
        <ul className='flex flex-row gap-4 items-center text-3xl  text-[#56538b] font-bold'>
           <img src={blogsIcon} alt=""  className='bg-black w-16 h-16 rounded-full shadow-2xl '/>
           <p >Blogs</p>
        </ul>
        <ul className='flex text-lg flex-row gap-4 items-center '>
        <li>
            
                Home   
            </li>
            <li>
                Posts   
            </li>
            <li>
                About
            </li>
           
            
        </ul>

<ul className='flex text-lg flex-row gap-4 items-center '> <li>
             login
            </li>
            <li>
                signup
            </li></ul>
       

    </div>
  )
}

export default Navbar