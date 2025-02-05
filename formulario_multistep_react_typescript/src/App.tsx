//components
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";


import { GrFormNext, GrFormPrevious } from "react-icons/gr";



//Hooks
import { useState } from "react";
import { useForm } from "./hooks/useForm";



//CSS
import './App.css';

type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string
}

const formtemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",

}

function App() {
  const [data, setData] = useState(formtemplate);

  const updateFielHandler = (key: string, value: string) => {

    setData((prev) => {
      return {...prev, [key]: value};
    });
  }

  const formComponents = [
    <UserForm data={data} updateFielHandler={updateFielHandler}/>,
    <ReviewForm />,
    <Thanks />
  ];

  const { currentStep, currentComponent, changeStep } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avalização</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />

              <span>Voltar</span>

            </button>
            <button>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>

        </form>
      </div>

    </div>

  )
}

export default App;
