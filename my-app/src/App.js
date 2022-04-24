import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('Felipe')
  const [cargo, setCargo] = useState('Chefe')
  const [valor, setValor] = useState(1)

  const trocarNome = () => {
    setNome('Ítalo')
    setCargo('Tech Lead')

    if (nome === 'Ítalo' && cargo === 'Tech Lead') {
      setNome('Felipe')
      setCargo('Chefe')
    }
  }

  return (
    <>
      <h1>Aula useSate</h1>
      <div className='app'>
        <div className='box'>
          <h3>Exercício 1</h3>
          <p>O {nome} é o {cargo}</p>
          <button onClick={() => trocarNome()}>CLIQUE AQUI</button>
        </div>
        <div className='box'>
          <h3>Exercício 2</h3>
          <p>{valor}</p>
          <button onClick={() => setValor(valor * 4)}>MULTIPLIQUE</button>
          <button onClick={() => setValor(1)}>VOLTE PARA O VALOR INICIAL</button>
        </div>

      </div>
    </>
  );
}

export default App;
