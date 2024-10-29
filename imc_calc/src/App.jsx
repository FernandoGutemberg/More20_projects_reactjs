import { useState } from 'react';

import { data } from "./data/data";

import './App.css';
import ImcCalc from './components/ImcCalc';
import ImcTable from './components/ImcTable';




function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className='container'>
      {!imc ? (
        <ImcCalc />

      ) : (
        <ImcTable />

      )}
    </div>
  );
};

export default App;
