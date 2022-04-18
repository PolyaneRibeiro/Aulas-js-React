import ConteudoLojas from "../components/ConteudoLojas";

function Lojas() {
  const conteudoLojas = () => {
    if (window.location.href.includes("Pernambucanas")) {
      return (
        <ConteudoLojas
          banner="https://pernambucanas.surf.com.br/wp-content/uploads/2022/01/BannerHome.png"
          titulo="Pernambucanas"
          slogan="Da nossa casa para sua casa!"
        />
      );
    } else if (window.location.href.includes("Ponto")) {
      return (
        <ConteudoLojas
        banner="https://blog.gdigital.com.br/wp-content/uploads/2020/03/oferta-dia-do-consumidor-ponto-frio-site-1024x417.png"
        titulo="Ponto Frio"
        slogan="Direto ao ponto :>"
      />
      );
    } else if (window.location.href.includes("Americanas")) {
        return (
            <ConteudoLojas
            banner="https://mestredasmilhas.com/wp-content/uploads/2020/08/aniversariolojasamericanas-1024x291.png"
            titulo="Lojas Americanas"
            slogan="Todo Mundo Vai!"
          />
          );
    } else if (window.location.href.includes("Casas")) {
        return (
            <ConteudoLojas
            banner="https://www.meioemensagem.com.br/wp-content/uploads/2017/08/banner_background_casas_bahia.jpg"
            titulo="Casas Bahia"
            slogan="A casa é sua!"
          />
          );
    } else {
      return <h1>Essa loja não está cadastrada!</h1>;
    }
  };
  return (
    <>
      {conteudoLojas()}
    </>
  );
}

export default Lojas;
