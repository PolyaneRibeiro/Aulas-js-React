import './App.css';
import { msgConsoleIf, msgConsoleSwitch } from './utils'

function App() {
  
  return (
  <>
      <h1>Aula If Else e Switch Case</h1>
      <div className='app'>
      <div className='box'>
      <h3>Exercício 1</h3>
      <p>Digite um instrumento</p>
      <form>        
        <input onChange={(e) => { msgConsoleIf(e.target.value) }} />
      </form>
      </div>
      <div className='box'>
      <h3>Exercício 2</h3>
      <p>Digite um nome</p>
      <form>        
        <input onChange={(e) => { msgConsoleSwitch(e.target.value) }} />
      </form>
      </div>

    </div>
    </>
  );
}

export default App;
