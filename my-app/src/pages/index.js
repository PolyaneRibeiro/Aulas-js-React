import React from "react";

function Home() {
   return (
    <div className="app">
      <div className="box">
        <h1>Split</h1>
        <a href='/avatar?personagem=aang&elemento=ar&personalidade=calmo'>Avatar</a>
      </div>
      <div className="box">
        <h1>Query String</h1>
        <a>Lojas</a>
      </div>
    </div>
  );
}

export default Home;