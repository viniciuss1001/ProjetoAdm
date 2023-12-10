import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
//hooks
import { AuthProvider } from './context/useAuthContext';
import { useEffect, useState } from 'react';
import { useAuthentication } from './hooks/useAutentication';
import { onAuthStateChanged } from 'firebase/auth';
//components
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbars/Navbar';
//pages
import Home from './pages/Home';
import Dev from './pages/developer/Dev';
import ErrorPage from './pages/404/404';
import Create from './pages/Create/Create';
import Login from './pages/Login/Login';
import AboutDev from './pages/developer/Components/About/AboutDev';
import Skills from './pages/developer/Components/Skills/Skills';
import Project from './pages/developer/Components/Project/Project';
import Contact from './pages/developer/Components/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Class from './pages/Class/Class';
import Teachers from './pages/Teachers/Teachers';
import DT from './pages/DT/DT';
import About from './pages/About/About';
import Student from './pages/Student/Student';


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
    return <Loader />
  }

  return (
    <div className="App">
      {/*Estabelecimento de rotas da aplicação */}
      <AuthProvider value={{user}}>
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        {/*student single page */}
        <Route path='/class/:id' element={<Student />} />
        <Route path='/dev' element={<Dev />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
        {/*about dev */}
        <Route path='/aboutdev' element={<AboutDev/>} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contactdev' element={<Contact />}/>
        {/*principal pages */}
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/class' element={<Class />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/dt' element={<DT />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
