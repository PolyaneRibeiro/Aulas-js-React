import './style.css';

function ModaMasculina() {
    const redirect = () => {
        return window.location.href = `https://www.benoliel.com.br/moda-masculina`
  }

    const mock = {
        banner: 'https://benoliel.vteximg.com.br/arquivos/ids/156251/banner%20moda%20masculina.png?v=637440114094000000',
        titulo: 'Moda Masculina',
        slogan: '#vistasebem'
    }
    return (
      <>
      <img onClick={() => redirect()}src={mock.banner}/>
        <h1>{mock.titulo}</h1>
        <h2>{mock.slogan}</h2>        
      </>
    );
  }
  
  export default ModaMasculina;