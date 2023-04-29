import React,{useState,useEffect} from 'react'

function Home() {

    const [data, setData] = useState();

  useEffect(()=>{
   getPosts()
  
  })
  async function getPosts() {
    try {
      const response = await fetch('http://localhost:3000/api/posts/');
      const data = await response.json();
      console.log(data); // do something with the data
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>Home</div>
  )
}

export default Home