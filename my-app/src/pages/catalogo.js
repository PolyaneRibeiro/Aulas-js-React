function Catalogo() {
  const link = (tipo) => {
    return (window.location.href = tipo);
  };

  return (
    <>
      <h1>Catalogo</h1>
      <p onClick={() => link("/moda-feminina")}>Moda Feminina</p>
      <p onClick={() => link("/moda-masculina")}>Moda Maculina</p>
      <p onClick={() => link("/moda-infantil")}>Moda Infantil</p>
      <p onClick={() => link("/moda-nerd")}>Moda Nerd</p>
    </>
  );
}

export default Catalogo;
