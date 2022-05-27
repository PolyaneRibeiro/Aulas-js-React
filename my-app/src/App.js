import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index.js'
import Aula from './pages/aula';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aula' element={<Aula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;