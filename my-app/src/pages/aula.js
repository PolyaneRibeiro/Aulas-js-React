import React, { useState, useEffect } from "react";


function Aula() {
    const [usuario, setUsario] = useState()
    const [senha, setSenha] = useState()

    console.log(senha, 'senha')
    console.log(usuario, 'usuario')

    const entrar = () => {
        localStorage.setItem('usuario', usuario)
    }

    return (
        <>
            <h1>Login</h1>
            <label onChange={(e) => setUsario(e.target.value)}>Usuário</label>
            <input />
            <label>Senha</label>
            <input onChange={(e) => setSenha(e.target.value)} type='password' />
            <button onClick={() => entrar()}>Entrar</button>
        </>
    );
}

export default Aula;