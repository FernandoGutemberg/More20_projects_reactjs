import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import { Link } from "react-router-dom";

import "./Admin.css";


const Admin = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {

    try {

      const response = await blogFetch.get("/posts");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="admin">
      <h1>Gerencia Posts</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link className="btn edit-btn">Editar</Link>
              <button className="btn delete-btn">Excluir</button>
            </div>

          </div>

        ))
      )}

    </div>
  )
};

export default Admin;
