import React from 'react';

const UserForm = ({ data, updateFielHandler }) => {
  return (
    <div>
      <h2>User Form</h2>
      <div className="form-control" required>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite o seu nome"
          required
          value={data.name || ""}
          onChange={(e) => updateFielHandler("name", e.target.value)}
        /> 
      </div>
      <div className="form-control">
        <label htmlFor="email" required>E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => updateFielHandler("email", e.target.value)}


        />
      </div>

    </div>
  );
};

export default UserForm;
