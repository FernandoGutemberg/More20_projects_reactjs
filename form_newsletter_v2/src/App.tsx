import Form from "./components/Form";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500">Inscreva-se</h1>
      <p>Assine nossa Newsletter e mantenha-se informado</p>
      <div>
        <Form />
      </div>
      <p>
        Ao se inscrever, você passará a receber os nossos e-mails com as melhores dicas, novidades e ofertas.
      </p>

    </div>
  );
}

export default App;
