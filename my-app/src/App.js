import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jogadores, setJogadores] = useState('Alisson, Danilo, Marquinhos, Thiago Silva, Guilherme Arana, Casemiro, Fred, Lucas Paquetá, Antony, Neymar e Vinícius Júnior')
  const [nomes, setNomes] = useState('Aquira, Ana, Adrianne, Ana Lucia, Ayla, Alana, Ametista, Ana Célia, Ariane, April')
  const [titSelecao, setTitSelecao] = useState('Seleção Brasileira')
  const [acionador, setAcionador] = useState('selecao')
  const [acionadorNomes, setAcionadorNomes] = useState(0)

  useEffect(() => {
    if (acionador === 'corinthians') {
      setJogadores('Cássio, Bruno Melo, Fábio Santos, Belezi, Gil, Breno Bidon, Du Queiroz, Giuliano, Adson, Felipe e Giovane')
      setTitSelecao('Corinthians')
    }
    else if (acionador === 'sao paulo') {
      setJogadores('Weverton, Marcos Rocha, Luan, Gustavo Gómez, Piquerez, Danilo, Zé Rafael, Raphael Veiga, Gustavo Scarpa, Dudu e Rony') 
      setTitSelecao('São Paulo')

    }
    else if (acionador === 'palmeiras') {
      setJogadores('Weverton, Marcos Rocha, Mayke, Gustavo Gómez, Luan, Kuscevic, Danilo, Jailson, Patrick de Paula, Dudu e Rony')
      setTitSelecao('Palmeiras')
    }
    else if (acionador === 'selecao') {
      setJogadores('Alisson, Danilo, Marquinhos, Thiago Silva, Guilherme Arana, Casemiro, Fred, Lucas Paquetá, Antony, Neymar e Vinícius Júnior')
      setTitSelecao('Seleção Brasileira')
    }
  }, [acionador])

  useEffect(() => {
    if (acionadorNomes === 1) {
      setNomes('Lana, Lara, Larissa, Luana, Linda, Lucimara, Leia, Leo, Luan, Lucas')
    }
    else if (acionadorNomes === 2) {
      setNomes('Poly, Paloma, Pâmela, Paula, Pedro, Penélope, Patricia, Priscila, Pandora, Paola')
    }
  }, [acionadorNomes])

  return (
    <>
      <h1>useEffect</h1>
      <div className='app'>
        <div className='box'>
          <h3>Exercício 1</h3>
          <h2>{titSelecao}</h2>
          <p>{jogadores}</p>
          <button onClick={() => setAcionador('selecao')}>SELEÇÃO BRASILEIRA</button>
          <button onClick={() => setAcionador('corinthians')}>CORINTHIANS</button>
          <button onClick={() => setAcionador('sao paulo')}>SÃO PAULO</button>
          <button onClick={() => setAcionador('palmeiras')}>PALMEIRAS</button>
        </div>
        <div className='box'>
          <h3>Exercício 2</h3>
          <p>{nomes}</p>
          <button onClick={() => setAcionadorNomes(acionadorNomes + 1)}>MUDAR NOMES</button>
        </div>

      </div>
    </>
  );
}

export default App;
