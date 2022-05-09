import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index.js'
import Avatar from './pages/avatar';


function App() {
  
  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/avatar' element={<Avatar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;