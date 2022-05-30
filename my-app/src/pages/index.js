import React, { useState, useEffect } from "react";
import axios from 'axios'

function Home() {
  const [pokemon, setPokemon] = useState()
  const [card, setCard] = useState()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
      .then((response) => setPokemon(response.data.results))
  }, []);

  const modalPokemon = (id) => {
    setModal(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => setCard(response.data));
  };

  console.log(card)
  return (
    <div className="content">
      <h1>Pokemon</h1>
      {modal && (
        <>
          <p>{card?.name}</p>
          <p>Altura:{card?.height}</p>
          <p>Peso:{card?.weight}</p>
          {card?.types.map(pokeTypes => {
            return (
              <p>{pokeTypes.type.name}</p>
            )
          }
          )}
        </>
      )}
      {pokemon?.map((item, index) => {
        const id = index + 1
        return (
          <h3 onClick={() => modalPokemon(id)}>{item.name}</h3>
        )
      })}

    </div>
  );
}

export default Home;