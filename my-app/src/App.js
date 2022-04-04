import "./App.css";

function App() {
  const familia = [
    {
      nome: "José Carlos",
      dataNascimento: "12/03/1958",
      nomeMae: "Maria",
      gostaFazer: [
        {
          muito: "Futebol",
          pouco: "Nadar",
        },
        {
          muito: "Basquete",
          pouco: "Andar de Blicicleta",
        },
      ],
    },
    {
      nome: "Sônia Maria",
      dataNascimento: "03/09/1958",
      nomeMae: "Ivanilde",
      gostaFazer: [
        {
          muito: "Futebol",
          pouco: "Nadar",
        },
        {
          muito: "Basquete",
          pouco: "Ler",
        },
      ],
    },
  ];

  return (
    <div className="app">
      {familia.map((item) => {
        const filtrandoFamilia = item.gostaFazer.filter((membros) => {
          return membros.muito !== "Futebol";
        });
        console.log(filtrandoFamilia, "filtrandoFamilia");
        return (
          <div className="box">
            <p>
              <b>Nome:</b> {item.nome}
            </p>
            <p>
              <b>Data de Nascimento:</b> {item.dataNascimento}
            </p>
            <p>
              <b>Nome da Mãe:</b> {item.nomeMae}
            </p>
            <br />
            <p>
              <b>Gosta de fazer</b>
            </p>
            {filtrandoFamilia.map((filter) => (
              <>
                <p>{filter.muito}</p>
                <p>{filter.pouco}</p>
              </>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
