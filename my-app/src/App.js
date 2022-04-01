import './App.css';
import Card from './components/Card';
import Link from './components/Link';

function App() {

  return (
    <>
      <div className='app'>
        <Card texto='Lana' />
        <Card texto='Poly' />
        <Card texto='Sônia' />
        <Card texto='José Carlos' />
      </div>
      <div className='app'>
        <Link mostrar={true} />
        <Link />
      </div>

    </>
  );
}

export default App;
