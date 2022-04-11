import './style.css';

function ModaNerd() {
    const redirect = () => {
        return window.location.href = `https://www.piticas.com.br/`
  }

    const mock = {
        banner: 'https://lojapiticas.vteximg.com.br/arquivos/ids/166645/banner%20home%20hp.png?v=637837484502070000',
        titulo: 'Moda Nerd',
        slogan: 'PARA O SEU LADO NERD'
    }
    return (
      <>
      <img onClick={() => redirect()}src={mock.banner}/>
        <h1>{mock.titulo}</h1>
        <h2>{mock.slogan}</h2>        
      </>
    );
  }
  
  export default ModaNerd;