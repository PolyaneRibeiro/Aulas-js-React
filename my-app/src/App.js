import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index.js'
import Aula from './pages/aula';
import Local from './pages/local';
import Session from './pages/session';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aula' element={<Aula />} />
        <Route path='/local' element={<Local />} />
        <Route path='/session' element={<Session />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;