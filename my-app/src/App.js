import './App.css';

function App() {

  const familia = [
    {
      nome: 'José Carlos',
      idade: 62,
      dataNascimento: '12/03/1958',
      nomeMae: 'Maria',
      nomePai: false
    },
    {
      nome: 'Sônia Maria',
      idade: 61,
      dataNascimento: '03/09/1958',
      nomeMae: 'Ivanilde'
    },
    {
      nome: 'Polyane',
      idade: 33,
      dataNascimento: '25/04/1988',
      nomeMae: 'Sônia Maria',
      nomePai: 'José Carlos'
    },
    {
      nome: 'Lana',
      idade: 1,
      dataNascimento: '18/05/2021',
      nomeMae: 'Polyane',
    },
    {
      nome: 'Felipe',
      idade: 30,
      dataNascimento: '06/05/1990',
      nomeMae: 'Sônia Maria',
      nomePai: 'José Carlos'
    }
  ]
  
  return (
    
    <div className='app'>
      {familia.map(item => {
        return(       
        <div className='box'>
          <p><b>Nome:</b> {item.nome}</p>
          <p><b>Idade:</b> {item.idade}</p>
          <p><b>Data de Nascimento:</b> {item.dataNascimento}</p>
          <p><b>Nome da Mãe:</b> {item.nomeMae}</p>
          {item.nomePai && <p><b>Nome do Pai:</b> {item.nomePai}</p>}
        </div>
      )
      })
      }
    </div>
  );
}

export default App;
