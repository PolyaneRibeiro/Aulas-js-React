function Home() {
  let valor;
  const digite = (valorDigitado) => {
    valor = valorDigitado;
  };
  const click = () => {
    window.location.href = `/lojas?${valor}`;
  };
  return (
    <div className="box">
    <h1>Pesquise uma loja</h1>  
    <form>
       
      <input onChange={(e) => digite(e.target.value)} />
      <button
        onClick={(e) => {
          e.preventDefault();
          click();
        }}
      >
        Buscar
      </button>
    </form>
    </div>
  );
}

export default Home;
