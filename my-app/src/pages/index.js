import React, { useState, useEffect } from "react";
import axios from 'axios'

function Home() {
  const [series, setSeries] = useState()
  const [filmes, setFilmes] = useState()

  useEffect(() => {
    axios.get('https://presencial14-default-rtdb.firebaseio.com/series.json')
      .then((response) => setSeries(response.data))
  }, []);

  useEffect(() => {
    axios.get('https://presencial14-default-rtdb.firebaseio.com/filmes.json')
      .then((response) => setFilmes(response.data))
  }, []);

  console.log(series, 'series')
  console.log(filmes, 'filmes')

  return (
    <div className="content">
      <h1>Filmes</h1>
      <div className="app">
        {filmes ? (
          <>
            {Object.entries(filmes).map(item => {
              return (
                <div className="box">
                  <img src={item[1].img} />
                  <h3>Título: {item[1].titulo}</h3>
                  <p>Gênero: {item[1].genero}</p>
                </div>
              )
            })}
          </>
        ) : (<h3>Não tem nenhum filme cadastrado</h3>)}
      </div>
      <h1>Séries</h1>
      <div className="app">
        {series ? (
          <>
            {Object.entries(series).map(item => {
              return (
                <div className="box">
                  <img src={item[1].img} />
                  <h3>Título: {item[1].titulo}</h3>
                  <p>Gênero: {item[1].genero}</p>
                </div>
              )
            })}
          </>
        ) : (<h3>Não tem nenhuma série cadastrada</h3>)}
      </div>
    </div>
  );
}

export default Home;