import "./App.css";
import Card from "./components/Card";

function App() {
  const teste = {
    nome: "José Carlos",
    dataNascimento: "12/03/1958",
    nomePai: false,
    lista: [
      {
        string1: "teste",
        string2: "teste2",
        bolleano: true,
      },
      {
        string1: "lala",
        string2: "lala2",
        bolleano: true,
      },
      {
        string1: "blabla",
        string2: "blabla2",
        bolleano: true,
      },
    ],
  };

  return (
    <div className="app">
      {teste.lista.map((item) => {
        return (
          <Card
            string1={item.string1}
            string2={item.string2}
            bolleano={item.bolleano}
          />
        );
      })}
    </div>
  );
}

export default App;
