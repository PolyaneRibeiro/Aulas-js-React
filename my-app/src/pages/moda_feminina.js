import './style.css';

function ModaFeminina() {
    const redirect = () => {
        return window.location.href = `https://baudamoda.com.br/`
  }

    const mock = {
        banner: 'https://baudamoda.com.br/wp-content/uploads/2021/09/BANNER-2-1.jpg',
        titulo: 'Moda Feminina',
        slogan: '#aposte'
    }
    return (
      <>
      <img onClick={() => redirect()}src={mock.banner}/>
        <h1>{mock.titulo}</h1>
        <h2>{mock.slogan}</h2>        
      </>
    );
  }
  
  export default ModaFeminina;