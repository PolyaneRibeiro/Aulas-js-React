import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/index.js'
import Avatar from './pages/avatar';
import Harry from './pages/harry';


function App() {
  
  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/avatar' element={<Avatar />} />
        <Route path='/harry' element={<Harry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;