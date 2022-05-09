import React from "react";

const avatar = {
  personagem: 'aang',
  //aang, katara, toph
  elemento: 'ar',
  //ar, agua, terra
  personalidade: 'calmo',
  //calmo, extrovertido, ranzinza
}

const harry = {
  personagem: 'harry',
  //harry, luna, draco
  casa: 'grifinoria',
  //grifinoria, sonserina, corvinal
  patrono: 'cervo',
  //cervo, lebre, desconhecido
  varinha: 'fenix',
  //fenix, unicornio, desconhecido
  sangue_puro: false,
  //true, false
}

function Home() {
   return (
    <div className="app">
      <div className="box">
        <h1>Split</h1>
        <a href={`/avatar?personagem=${avatar.personagem}&elemento=${avatar.elemento}&personalidade=${avatar.personalidade}`}>Avatar</a>
      </div>
      <div className="box">
        <h1>Query String</h1>
        <a href={`/harry?personagem=${harry.personagem}&casa=${harry.casa}&patrono=${harry.patrono}&varinha=${harry.varinha}&sangue_puro=${harry.sangue_puro}`}>Harry Potter</a>
      </div>
    </div>
  );
}

export default Home;