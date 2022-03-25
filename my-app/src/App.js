import './App.css';

function App() {

  const mensagem = 'Você conseguiu'
  const valor = 4

  return (

    <div className='app'>
      <form className='box'>
        <label>Calculando Valores:</label>
        <input onChange={(e) => {alert(JSON.parse(e.target.value) + valor)}} />     
      </form>
      <div className='text' onClick={() => {alert(mensagem)}}>CLIQUE AQUI</div>
      
    </div>
  );
}

export default App;
