import React, { useState, useEffect } from "react";
import axios from 'axios'


function Aula() {
    const [resposta, setResposta] = useState()
    const [tipo, setTipo] = useState()
    const [valor, setValor] = useState()
    const [cor, setCor] = useState()
    const [dadoEditado, setDadoEditado] = useState()
    const [mapeamento, setMapeamento] = useState()


    useEffect(() => {
        fetch('https://teste-aula-metodos-3b964-default-rtdb.firebaseio.com/roupas.json')
            .then(response => response.json())
            .then(data => setResposta(data))
    }, [mapeamento]);


    const cadastro = () => {
        axios.post('https://teste-aula-metodos-3b964-default-rtdb.firebaseio.com/roupas/femininas.json', {
            cor: cor,
            tipo: tipo,
            valor: valor
        })
            .then(() => {
                alert('sua roupa foi cadastrada')
                setMapeamento(!mapeamento)
            })
            .catch(() => alert('não conseguiu cadastrar'))
    }

    const deletar = (id) => {
        axios.delete(`https://teste-aula-metodos-3b964-default-rtdb.firebaseio.com/roupas/femininas/${id}.json/`, {})
            .then(() => {
                alert('sua roupa foi excluida')
                setMapeamento(!mapeamento)
            })
            .catch(() => alert('não conseguiu excluir a roupa'))
    }

    const editar = (id) => {
        axios.patch(`https://teste-aula-metodos-3b964-default-rtdb.firebaseio.com/roupas/femininas/${id}.json/`, {
            tipo: dadoEditado
        })
            .then(() => {
                alert('sua roupa foi editada')
                setMapeamento(!mapeamento)
            })
            .catch(() => alert('não conseguiu editar a roupa'))
    }


    return (
        <>
            <h2>Roupas Femininas</h2>
            {resposta && Object.entries(resposta.femininas).map(roupa => {
                console.log(roupa, 'roupa')
                return (
                    <div className="box">
                        {roupa[1].tipo}
                        <input onChange={(e) => setDadoEditado(e.target.value)} />
                        <button onClick={() => deletar(roupa[0])}>Excluir</button>
                        <button onClick={() => editar(roupa[0])}>Editar</button>
                        {/* <p>{roupa.valor}</p>
                    <p>{roupa.cor}</p> */}
                    </div>
                )
            })}
            <h2>Cadastrar nova roupa</h2>
            <form>
                <label>Tipo:</label><input onChange={(e) => setTipo(e.target.value)} /><br />
                <label>Valor:</label><input onChange={(e) => setValor(e.target.value)} /><br />
                <label>Cor:</label><input onChange={(e) => setCor(e.target.value)} /><br />
                <button onClick={(e) => { e.preventDefault(); cadastro() }}>Cadastrar</button>
            </form>
        </>
    );
}

export default Aula;