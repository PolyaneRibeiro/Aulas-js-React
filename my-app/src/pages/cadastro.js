import React, { useState, useEffect } from "react";
import axios from 'axios'

function Cadastro() {
  const [series, setSeries] = useState()
  const [filmes, setFilmes] = useState()
  const [tipo, setTipo] = useState()
  const [mapeamento, setMapeamento] = useState()
  const [tituloEditado, setTituloEditado] = useState()
  const [generoEditado, setGeneroEditado] = useState()
  const [imagemEditado, setImagemEditado] = useState()
  const [titulo, setTitulo] = useState()
  const [genero, setGenero] = useState()
  const [imagem, setImagem] = useState()

  console.log(tipo)

  useEffect(() => {
    axios.get('https://presencial14-default-rtdb.firebaseio.com/series.json')
      .then((response) => setSeries(response.data))
  }, [mapeamento]);

  useEffect(() => {
    axios.get('https://presencial14-default-rtdb.firebaseio.com/filmes.json')
      .then((response) => setFilmes(response.data))
  }, [mapeamento]);

  const cadastro = () => {
    if (tipo === 'serie') {
      return (
        axios.post('https://presencial14-default-rtdb.firebaseio.com/series.json', {
          titulo: titulo,
          genero: genero,
          img: imagem
        })
          .then(() => {
            alert('sua série foi cadastrada')
            setMapeamento(!mapeamento)
          })
          .catch(() => alert('não foi possível cadastrar a série'))
      )
    }
    else {
      return (
        axios.post('https://presencial14-default-rtdb.firebaseio.com/filmes.json', {
          titulo: titulo,
          genero: genero,
          img: imagem
        })
          .then(() => {
            alert('seu filme foi cadastrado')
            setMapeamento(!mapeamento)
          })
          .catch(() => alert('não foi possível cadastrar o filme'))
      )
    }
  }

  const deletarSerie = (id) => {
    axios.delete(`https://presencial14-default-rtdb.firebaseio.com/series/${id}.json`, {})
      .then(() => {
        alert('sua série foi excluida')
        setMapeamento(!mapeamento)
      })
      .catch(() => alert('não foi possível excluir a série'))
  }

  const deletarFilme = (id) => {
    axios.delete(`https://presencial14-default-rtdb.firebaseio.com/filmes/${id}.json`, {})
      .then(() => {
        alert('seu filme foi excluido')
        setMapeamento(!mapeamento)
      })
      .catch(() => alert('não foi possível excluir o filme'))
  }

  const editarSerie = (id) => {
    axios.patch(`https://presencial14-default-rtdb.firebaseio.com/series/${id}.json`, {
      titulo: tituloEditado,
      genero: generoEditado,
      img: imagemEditado
    })
      .then(() => {
        alert('sua série foi editada')
        setMapeamento(!mapeamento)
      })
      .catch(() => alert('não foi possível editar a série'))
  }

  const editarFilme = (id) => {
    axios.patch(`https://presencial14-default-rtdb.firebaseio.com/filmes/${id}.json`, {
      titulo: tituloEditado,
      genero: generoEditado,
      img: imagemEditado
    })
      .then(() => {
        alert('seu filme foi editado')
        setMapeamento(!mapeamento)
      })
      .catch(() => alert('não foi possível editar o filme'))
  }

  return (
    <div className="content">
      <h1>Filmes</h1>
      <div className="app">
        {filmes && Object.entries(filmes).map(item => {
          return (
            <div className="box">
              <h3>Título: {item[1].titulo}</h3>
              <p>Gênero: {item[1].genero}</p>
              <label>Título:</label><input onChange={(e) => setTituloEditado(e.target.value)} />
              <label>Gênero:</label><input onChange={(e) => setGeneroEditado(e.target.value)} />
              <label>Imagem:</label><input onChange={(e) => setImagemEditado(e.target.value)} />
              <button onClick={() => editarFilme(item[0])}>Editar</button>
              <button onClick={() => deletarFilme(item[0])}>Excluir</button>
            </div>
          )
        })}
      </div>

      <h1>Séries</h1>
      <div className="app">
        {series && Object.entries(series).map(item => {
          return (
            <div className="box">
              <h3>Título: {item[1].titulo}</h3>
              <p>Gênero: {item[1].genero}</p>
              <label>Título:</label><input onChange={(e) => setTituloEditado(e.target.value)} />
              <label>Gênero:</label><input onChange={(e) => setGeneroEditado(e.target.value)} />
              <label>Imagem:</label><input onChange={(e) => setImagemEditado(e.target.value)} />
              <button onClick={() => editarSerie(item[0])}>Editar</button>
              <button onClick={() => deletarSerie(item[0])}>Excluir</button>
            </div>
          )
        })}
      </div>
      <h2>Cadastrar nova série</h2>
      <form>
        <label>Título:</label><input onChange={(e) => setTitulo(e.target.value)} /><br />
        <label>Gênero:</label><input onChange={(e) => setGenero(e.target.value)} /><br />
        <label>Imagem:</label><input onChange={(e) => setImagem(e.target.value)} /><br />
        <p>Tipo:</p>
        <p onClick={() => setTipo('serie')}>Série</p>
        <p onClick={() => setTipo('filme')}>Filme</p>
        <button onClick={(e) => { e.preventDefault(); cadastro() }}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;