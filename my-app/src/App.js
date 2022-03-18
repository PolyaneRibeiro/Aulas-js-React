import './App.css';

function App() {

  const familia = [
    {
      nome: 'José Carlos',
      dataNascimento: '12/03/1958',
      nomeMae: 'Maria',
      aposentado: true
    },
    {
      nome: 'Sônia Maria',
      dataNascimento: '03/09/1958',
      nomeMae: 'Ivanilde',
      aposentado: true
    },
    {
      nome: 'Polyane',
      dataNascimento: '25/04/1988',
      nomeMae: 'Sônia Maria',
      aposentado: false
    },
    {
      nome: 'Lana',
      dataNascimento: '18/05/2021',
      nomeMae: 'Polyane',
      aposentado: false
    }
  ]

  const favorito = [
    {
      nome: 'Felipe',
      idade: '30 anos',
      frutaFavorita: 'maçã',
    },
    {
      nome: 'Vinicius',
      idade: '34 anos',
      frutaFavorita: 'abacaxi',
    },
    {
      nome: 'Miguel',
      idade: '4 anos',
      frutaFavorita: 'abacaxi',
    }
  ]

  const filtrandoFamilia = familia.filter(membros => {
    return membros.aposentado === false
  })

  const filtrandoFavorito = favorito.filter(pessoas => {
    return pessoas.frutaFavorita === 'abacaxi'
  })


  return (
    <>
      <h1>Não são Aposentados</h1>
      <div className='app'>
        {filtrandoFamilia.map(membros => {                          
          return (
            <div className='box'>
              <p><b>Nome:</b> {membros.nome}</p>
              <p><b>Idade:</b> {membros.dataNascimento}</p>
              <p><b>Fruta Favorita:</b> {membros.nomeMae}</p>
            </div>
          )
        })
        }
      </div>
      <hr />
      <h1>Pessoas que amam Abacaxi</h1>
      <div className='app'>
        {filtrandoFavorito.map(pessoas => {
          return (
            <div className='box'>
              <p><b>Nome:</b> {pessoas.nome}</p>
              <p><b>Data de Nascimento:</b> {pessoas.idade}</p>
              <p><b>Nome da Mãe:</b> {pessoas.frutaFavorita}</p>
            </div>
          )
        })
        }
      </div>
    </>
  );
}

export default App;
