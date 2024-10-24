import './App.css';
import SearchBar from './components/SearchBar';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([
    { nome: "Ana", idade: 25, cargo: "Engenheira" },
    { nome: "João", idade: 30, cargo: "Desenvolvedor" },
    { nome: "Maria", idade: 22, cargo: "Designer" },
    { nome: "Carlos", idade: 40, cargo: "Gerente" },
    { nome: "Sofia", idade: 28, cargo: "Analista" },
  ]);

  const [searchTerm, setSearchTerm] = useState(null);
  const [sortConfig, setSortConfig] = useState("");

  const sortedData = [...data].sort((a, b) => {

    if(sortConfig !== null) {
      if(a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if(a[setSortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "descending" ? 1 : -1;
      }
    }

    return 0;
  });

  return (
    <div className="container">
      <h1>Tabela de Usuários</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={searchTerm}/>
      <table>
        <TableHeader />
        <tbody>
          {sortedData.map((row, index) => (
            <TableRow key={index} row={row}/>  

          ))}
        </tbody>
      </table>

    </div>
  );
};

export default App;
