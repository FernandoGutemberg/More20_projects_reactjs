import axios from "axios";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";


const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {

    try {

      const response = await axios.get("http://jsonplaceholder.typicode.com/posts"

      );

      const data = response.data;

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div>
      <h1>Último posts</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : <p>Carregou</p>}

    </div>
  )
};

export default Home;
