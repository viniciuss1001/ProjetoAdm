import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
//components

//pages
import Home from './pages/Home';
import Navbar from './components/Navbars/Navbar';
import Dev from './pages/developer/Dev';
import ErrorPage from './pages/404/404';
import Create from './pages/Create/Create';
import Login from './pages/Login/Login';
//hooks
import { AuthProvider } from './context/useAuthContext';
import { useEffect, useState } from 'react';
import { useAuthentication } from './hooks/useAutentication';
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  //user
  const [user, setuser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setuser(user)
    })
  },[auth])

  //giving user data
  if(loadingUser){
    return <p>Carregando</p>
  }

  return (
    <div className="App">
      {/*Estabelecimento de rotas da aplicação */}
      <AuthProvider value={{user}}>
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dev' element={<Dev />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
