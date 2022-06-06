import React, { useState, useEffect } from "react";
import axios from 'axios'

function Home() {
  const [series, setSeries] = useState()
  const [mapeamento, setMapeamento] = useState()
  const [dadoEditado, setDadoEditado] = useState()
  const [titulo, setTitulo] = useState()
  const [genero, setGenero] = useState()
  const [temporadas, setTemporadas] = useState()

  useEffect(() => {
    axios.get('https://streaming-d95a2-default-rtdb.firebaseio.com/series.json')
      .then((response) => setSeries(response.data))
  }, [mapeamento]);

  const cadastro = () => {
    axios.post('https://streaming-d95a2-default-rtdb.firebaseio.com/series.json', {
      titulo: titulo,
      genero: genero,
      temporadas: temporadas
    })
      .then(() => {
        alert('sua série foi cadastrada')
        setMapeamento(!mapeamento)
      })
      .catch(() => alert('não foi possível cadastrar a série'))
  }

  const deletar = (id) => {
    axios.delete(`https://streaming-d95a2-default-rtdb.firebaseio.com/series/${id}.json`, {})
      .then(() => {
        alert('sua série foi excluida')
        setMapeamento(!mapeamento)
      })
      .catch(() => alert('não foi possível excluir a série'))
  }

  const editar = (id) => {
    axios.patch(`https://streaming-d95a2-default-rtdb.firebaseio.com/series/${id}.json`, {
      titulo: dadoEditado
    })
      .then(() => {
        alert('sua série foi editada')
        setMapeamento(!mapeamento)
      })
      .catch(() => alert('não foi possível editar a série'))
  }

  return (
    <div className="content">
      <h1>Aula de Post, Patch e Delete</h1>
      <div className="app">
        {series && Object.entries(series).map(item => {
          return (
            <div className="box">
              <h3>Título: {item[1].titulo}</h3>
              <p>Gênero: {item[1].genero}</p>
              <p>Temporadas: {item[1].temporadas}</p>
              <input onChange={(e) => setDadoEditado(e.target.value)} />
              <button onClick={() => deletar(item[0])}>Excluir</button>
              <button onClick={() => editar(item[0])}>Editar</button>
            </div>
          )
        })}
      </div>
      <h2>Cadastrar nova série</h2>
      <form>
        <label>Título:</label><input onChange={(e) => setTitulo(e.target.value)} /><br />
        <label>Gênero:</label><input onChange={(e) => setGenero(e.target.value)} /><br />
        <label>Temporadas:</label><input onChange={(e) => setTemporadas(e.target.value)} /><br />
        <button onClick={(e) => { e.preventDefault(); cadastro() }}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Home;