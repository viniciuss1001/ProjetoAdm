import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
//components

//pages
import Home from './pages/Home';
import Navbar from './components/Navbars/Navbar';

function App() {
  return (
    <div className="App">
      {/*Estabelecimento de rotas da aplicação */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
