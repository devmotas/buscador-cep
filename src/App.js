import { useState } from "react";
import { FiSearch } from "react-icons/fi"
import "./styles.css"
import api from "./services/api";

function App() {
  const [input, setInput] = useState("")
  const [cep, setCep] = useState({})

  function handleKeyPress(event) {
    if (event.key === "Enter") {    //Usado para enviar requisição com Enter
      handleSearch()
    }
  }

  async function handleSearch() {     // async usado para atrasar o carregamento ate o await carregar
    if (input === "") {
      alert("Informe o seu cep!")
      return
    }
    try {             // vai tentar resolver o bloco caso nao consiga pela para o catch
      const response = await api.get(`${input}/json`)   // await faz a requeseção e espera resultado da Api
      setCep(response.data)
      setInput("")
    } catch {       // executa caso o try nao funcione
      alert("Ops erro ao buscar")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>

      <div className="containerInput">
        <input className="input"
          onChange={(e) => setInput(e.target.value)}                //Quando houver mudanla vai atualizar o state
          onKeyPress={(event) => handleKeyPress(event)}     //Usado para chamar a função de executar com o button ENTER
          value={input}
          placeholder="Digite seu cep..."
          type="text" />

        <button className="buttonSearch"
          onClick={handleSearch}>
          <FiSearch size={25} color={"#FFF"} />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>{cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.complemento} {cep.bairro} </span>
          <span>{cep.localidade}-{cep.uf}</span>
        </main>)}
    </div>
  );
}

export default App;
