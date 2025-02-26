import Form from "./components/Form";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500">Inscreva-se</h1>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Cadastrar
      </button>

      <Form />
    </>
  );
}

export default App;
