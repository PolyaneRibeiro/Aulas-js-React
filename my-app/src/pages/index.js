import React, { useState } from "react";

// const dados = [
//   {
//     login: 'felipe@fpr.com.br',
//     senha: 'celula08',
//   },
//   {
//     login: 'douglas@fpr.com.br',
//     senha: 'celula08',
//   },
//   {
//     login: 'nathan@fpr.com.br',
//     senha: 'celula08',
//   },
//   {
//     login: 'emanuel@fpr.com.br',
//     senha: 'celula08',
//   },
//   {
//     login: 'poly@fpr.com.br',
//     senha: 'celula08',
//   },
//   {
//     login: 'gelinho@fpr.com.br',
//     senha: 'celula08',
//   },
//   {
//     login: 'marcelo@fpr.com.br',
//     senha: 'celula08',
//   },
//   {
//     login: 'mauricio@fpr.com.br',
//     senha: 'celula08',
//   },
// ]

function Home() {
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()

  const enviar = () => {
    localStorage.setItem('usuario', usuario)
    localStorage.setItem('senha', senha)
    window.location.href = '/autenticacao'
  }

  return (
    <div className="app">
      <div className="box">
        <h2>Login</h2>
        <label>Usuário</label><input onChange={(e) => setUsuario(e.target.value)} />
        <label>Senha</label><input type='password' onChange={(e) => setSenha(e.target.value)} />
        <button onClick={() => enviar()}>Entrar</button>
      </div>
    </div>

  );
}

export default Home;