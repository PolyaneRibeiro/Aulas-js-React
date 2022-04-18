import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index.js'
import Lojas from './pages/lojas';

function App() {
  
  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lojas' element={<Lojas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;