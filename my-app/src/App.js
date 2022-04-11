
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalogo from './pages/catalogo.js'
import ModaFeminina from './pages/moda_feminina';
import ModaMasculina from './pages/moda-masculina';
import ModaInfantil from './pages/moda-infantil';
import ModaNerd from './pages/moda-nerd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Catalogo />} />
        <Route path='/moda-feminina' element={<ModaFeminina />} />
        <Route path='/moda-masculina' element={<ModaMasculina />} />
        <Route path='/moda-infantil' element={<ModaInfantil />} />
        <Route path='/moda-nerd' element={<ModaNerd />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;