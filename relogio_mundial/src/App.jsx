import { useState, useEffect } from "react";
import TimeZoneCLock from "./components/TimeZoneCLock";


function App() {

  const fusosHorarios = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo", 
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusosHorariosSelecionados, setfusosHorariosSelecionados] = useState([
    fusoHorarioLocal,

  ]);
  console.log(fusoHorarioLocal);


  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select >
        <option value="" disabled select>
          Selecione um fuso horário
        </option>
      </select>
      <div>
        {fusosHorariosSelecionados.map((fuso) => (
          <TimeZoneCLock key={fuso} timeZone={fuso}/>
        ))}
      </div>
    </div>
  );
}

export default App;
