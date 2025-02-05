type UserProps = {
  data: {
    name: string,
    email: string
  };
  updateFielHandler: (key: string, value: string) => void;
};

const UserForm = ({ data, updateFielHandler }: UserProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required 
          value={data.name || ""}
          onChange={(e) => updateFielHandler("name", e.target.value)}
          />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
          value={data.email || ""}
          onChange={(e) => updateFielHandler("email", e.target.value)}


          
          />

      </div>
    </div>
  )
}

export default UserForm
