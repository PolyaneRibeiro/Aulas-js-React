import React, { useState } from "react";


function Home() {
  const [loja, setLoja] = useState()
  const [cor, setCor] = useState()
  const [comodo, setComodo] = useState()
  const [fornecedor, setFornecedor] = useState()

  return (
    <>
      <div className="app">
        <div className="box">
          <h1>Loja</h1>
          <div className="box-radio">
            <input type="radio" name="loja" onClick={() => setLoja('riachuelo')} />
            <label>Riachuelo</label>
          </div>

          <div className="box-radio">
            <input type="radio" name="loja" onClick={() => setLoja('americanas')} />
            <label>Americanas</label>
          </div>

          <div className="box-radio">
            <input type="radio" name="loja" onClick={() => setLoja('magazine')} />
            <label>Magazine Luiza</label>
          </div>
        </div>
        <div className="box">
          <h1>Cor</h1>
          <div className="box-radio">
            <input type="radio" name="cor" onClick={() => setCor('azul')} />
            <label>Azul</label>
          </div>

          <div className="box-radio">
            <input type="radio" name="cor" onClick={() => setCor('amarelo')} />
            <label>Amarelo</label>
          </div>

          <div className="box-radio">
            <input type="radio" name="cor" onClick={() => setCor('vermelho')} />
            <label>Vermelho</label>
          </div>
        </div>

        <div className="box">
          <h1>Comodo</h1>
          <div className="box-radio">
            <input type="radio" name="comodo" onClick={() => setComodo('cozinha')} />
            <label>Cozinha</label>
          </div>

          <div className="box-radio">
            <input type="radio" name="comodo" onClick={() => setComodo('sala')} />
            <label>Sala</label>
          </div>

          <div className="box-radio">
            <input type="radio" name="comodo" onClick={() => setComodo('quarto')} />
            <label>Quarto</label>
          </div>
        </div>
        <div className="box">
          <h1>Fornecedor</h1>
          <div className="box-radio">
            <input type="radio" name="fornecedor" onClick={() => setFornecedor('madeira')} />
            <label>Madeira madeira</label>
          </div>

          <div className="box-radio">
            <input type="radio" name="fornecedor" onClick={() => setFornecedor('bonato')} />
            <label>Bonato</label>
          </div>

          <div className="box-radio">
            <input type="radio" name="fornecedor" onClick={() => setFornecedor('philco')} />
            <label>Philco</label>
          </div>
        </div>

      </div>
      <div className="app">
        <a href={`/loja?loja=${loja}&cor=${cor}&comodo=${comodo}&fornecedor=${fornecedor}`}>Buscar</a>
      </div>
    </>
  );
}

export default Home;