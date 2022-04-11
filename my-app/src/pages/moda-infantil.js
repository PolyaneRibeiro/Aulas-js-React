import './style.css';

function ModaInfantil() {
    const redirect = () => {
        return window.location.href = `https://www.mundoinfantilstore.com.br/?/vestido-ciganinha-infantil-flor-marinho-lumagy&gclid=CjwKCAjwo8-SBhAlEiwAopc9W2J4kKWNKqebipi385F7DCXXY1kaEF8awVS9eQsD8pnMgylvavfqmRoC_PgQAvD_BwE`
  }

    const mock = {
        banner: 'https://img.panoramasistemas.com.br/mundoinfantilstore.img/banner/24142/4-pecas-por-99-frete-gratis.webp',
        titulo: 'Moda Infantil',
        slogan: 'O mehor para seu filho'
    }
    return (
      <>
      <img onClick={() => redirect()}src={mock.banner}/>
        <h1>{mock.titulo}</h1>
        <h2>{mock.slogan}</h2>        
      </>
    );
  }
  
  export default ModaInfantil;