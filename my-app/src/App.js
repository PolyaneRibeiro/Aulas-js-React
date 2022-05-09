import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index.js'
import Loja from './pages/loja';


function App() {
  
  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loja' element={<Loja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;