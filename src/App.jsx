import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
//components

//pages
import Home from './pages/Home';
import Navbar from './components/Navbars/Navbar';
import Dev from './pages/developer/Dev';
import ErrorPage from './pages/404/404';
import Create from './pages/Create/Create';

function App() {
  return (
    <div className="App">
      {/*Estabelecimento de rotas da aplicação */}
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dev' element={<Dev />} />
        <Route path='/create' element={<Create />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
