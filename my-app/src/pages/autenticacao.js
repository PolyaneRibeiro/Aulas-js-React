import React, { useState, useEffect } from "react";



function Autenticacao() {
    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()
    const [foto, setFoto] = useState()
    const [validacao, setValidacao] = useState()

    const usuario = localStorage.getItem("usuario");
    const senha = localStorage.getItem("senha");

    useEffect(() => {
        if (usuario === 'felipe@fpr.com.br' && senha === 'celula08') {
            setIdade('30')
            setFoto('./felipe.jpg')
            setNome('Felipe')
        }
        else if (usuario === 'douglas@fpr.com.br' && senha === 'celula08') {
            setIdade('28')
            setFoto('./douglas.jpg')
            setNome('Douglas')

        }
        else if (usuario === 'nathan@fpr.com.br' && senha === 'celula08') {
            setIdade('34')
            setFoto('./nathan.jpg')
            setNome('Nathan')

        }
        else if (usuario === 'emanuel@fpr.com.br' && senha === 'celula08') {
            setIdade('28')
            setFoto('./emanuel.jpg')
            setNome('Emanuel')

        }
        else if (usuario === 'poly@fpr.com.br' && senha === 'celula08') {
            setIdade('34')
            setFoto('./poly.jpg')
            setNome('Poly')

        }
        else if (usuario === 'gelinho@fpr.com.br' && senha === 'celula08') {
            setIdade('23')
            setFoto('./gelinho.jpg')
            setNome('Gelinho')

        }
        else if (usuario === 'marcelo@fpr.com.br' && senha === 'celula08') {
            setIdade('30')
            setFoto('./marcelo.jpg')
            setNome('Marcelo')

        }
        else if (usuario === 'mauricio@fpr.com.br' && senha === 'celula08') {
            setIdade('48')
            setFoto('./mauricio.jpg')
            setNome('Mauricio')
        }
        else setValidacao(true)
    }, [])

    const logout = () => {
        window.location.href = '/'
    }

    return (
        <div className="app">
            <div className="box">
                {validacao ? (
                    <h1>Não existe esse cadastro</h1>
                ) : (
                    <>

                        <h1>Bem vindo {nome}</h1>
                        <h2>{idade} anos</h2>
                        <img src={foto} />
                    </>
                )
                }
                <button onClick={() => logout()}>LOGOUT</button>
            </div>
        </div>
    )
}

export default Autenticacao;