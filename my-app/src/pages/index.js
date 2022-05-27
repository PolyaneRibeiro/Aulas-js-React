import React, { useState, useEffect } from "react";
import axios from 'axios'

function Home() {
  const [series, setSeries] = useState()

  useEffect(() => {
    axios.get('https://streaming-d95a2-default-rtdb.firebaseio.com/series.json')
      .then((response) => setSeries(response.data))
  }, []);

  return (
    <div className="content">
      <h1>Aula de Get</h1>
      <div className="app">
        {series && Object.values(series).map(item => {
          return (
            <div className="box">
              <h3>Titulo: {item.titulo}</h3>
              <p>Gênero: {item.genero}</p>
              <p>Temporadas: {item.temporadas}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home;