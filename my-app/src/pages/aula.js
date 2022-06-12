import React, { useState, useEffect } from "react";


function Aula() {
    const [usuario, setUsario] = useState()
    const [senha, setSenha] = useState()

    console.log(senha, 'senha')
    console.log(usuario, 'usuario')

    const entrar = () => {
        sessionStorage.setItem('usuario', usuario)
    }

    const name = sessionStorage.getItem('usuario')
    return (
        <>
            <h1>Login</h1>
            <label >Usuário</label>
            <input onChange={(e) => setUsario(e.target.value)} />
            <label>Senha</label>
            <input onChange={(e) => setSenha(e.target.value)} type='password' />
            <button onClick={() => entrar()}>Entrar</button>
            <p>Olá {name}</p>
        </>
    );
}

export default Aula;