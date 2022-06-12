import React, { useState } from "react";

function Home() {
  const [valor, setValor] = useState()

  const enviarLocal = () => {
    localStorage.setItem('nome', 'Poly')
    window.location.href = '/local'
  }

  const enviarSession = () => {
    const multiplicacao = valor * 10
    sessionStorage.setItem('valor', multiplicacao)
    window.location.href = '/session'
  }

  return (
    <div className="app">
      <div className="box">
        <h2>localStorage</h2>
        <button onClick={() => enviarLocal()}>Clique aqui</button>
      </div>
      <div className="box">
        <h2>sessionStorage</h2>
        <p>Digite um número para ser multiplicado por 10</p>
        <input onChange={(e) => setValor(e.target.value)} />
        <button onClick={() => enviarSession()}>Veja o resultado</button>
      </div>
    </div>

  );
}

export default Home;