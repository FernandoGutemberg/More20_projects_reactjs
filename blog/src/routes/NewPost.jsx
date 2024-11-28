import "./NewPost.css";
import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";




const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();



  return <div className="new-post">
    <h2>Inserir novo Post:</h2>
    <form action="">
      <div className="form-control">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite o título"
        />

      </div>

      <div className="form-control">
        <label htmlFor="body">Conteúdo:</label>
        <textarea
          name="body"
          id="body"
          placeholder="Digite o conteúdo"
        ></textarea>
      </div>
      <input type="submit" value="Criar Post" className="btn" />
    </form>
  </div>;
};

export default NewPost;
