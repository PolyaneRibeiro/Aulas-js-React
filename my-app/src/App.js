import "./App.css";

function App() {
  const series = [
    {
      nome: "Supernatural",
      temNetflix: false,
      personagens: [
        {
          principal1: "Dean",
          principal2: "Sam",
          coadjuvante: "Castiel",
        },
      ],
      sobre: [
        {
          critica: "supernatural e uma serie otima ela e engraçada misteriosa e mostra os afetos de dois irmaos",
          pessoaFamosa: true,
        },
        {
          critica: "Melhor série! Assisto desde sempre, amo muito! Recomendo...",
          pessoaFamosa: false,
        },
      ],
    },
    {
      nome: "The Hundred",
      temNetflix: true,
      personagens: [
        {
          principal1: "Clarky",
          principal2: "Bellany",
          coadjuvante: "Octavia",
        },
      ],
      sobre: [
        {
          critica: "Ótima série meio futurística com bastante ação e várias outras coisas onde dependendo da temporada muda o tema e incluem muitos personagem,tomate que chegue novas temporadas.",
          pessoaFamosa: false,
        },
        {
          critica: "umas das top 10 das minhas séries sensacional,e claro teve temporadas um pouco ruim mais a série é uma obre prima.",
          pessoaFamosa: true,
        },
      ],
    },
    {
      nome: "La Casa de Papel",
      temNetflix: true,
      personagens: [
        {
          principal1: "Professor",
          principal2: "Lisboa",
          coadjuvante: "Tokyo",
        },
      ],
      sobre: [
        {
          critica: "Expendida, fantástica, sensacional...",
          pessoaFamosa: true,
        },
        {
          critica: "A princípio, a série é ruim.... Mas retire todas as cenas com a Tóquio, e ela se tornaria excelente!",
          pessoaFamosa: true,
        },
      ],
    },
    {
      nome: "The Big bang Theory",
      temNetflix: false,
      personagens: [
        {
          principal1: "Leonard",
          principal2: "Sheldon",
          coadjuvante: "Penny",
        },
      ],
      sobre: [
        {
          critica: "é uma ótima série",
          pessoaFamosa: true,
        },
        {
          critica: "Melhor série! Assisto desde sempre! Recomendo...",
          pessoaFamosa: false,
        },
      ],
    },
  ];
  return (
    <div className="container">
      {series.map((serie, index) => {
        return (
          <div className="box" key={index}>
            <p><b>Série:</b> {serie.nome}</p>
            <p className="title">Personagens:</p>
            {serie.personagens.map((personagem, index) => {
              return (
                <div key={index}>
                  <p>{personagem.principal1}</p>
                  <p>{personagem.principal2}</p>
                  <p>{personagem.coadjuvante}</p>
                </div>
              );
            })}
            {serie.sobre.map((sobre, index) => {
              return (
                <div key={index}>
                  <p className="title">Criticas:</p>
                  <p>{sobre.critica}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
