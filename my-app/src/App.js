import './App.css';
import { MsgConsole, Click } from './utils'

function App() {
  
  const nome = 'Felipe';
  const cargo = 'chefe';

  return (
    <div className='app'>
      <from>
        <input onChange={(e) => { MsgConsole(e.target.value) }} />
        <button onClick={() => { Click(nome, cargo) }}>Enviar</button>
      </from>

    </div>
  );
}

export default App;
