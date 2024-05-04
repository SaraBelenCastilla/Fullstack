import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Inicio from './views/Inicio'
import Productos from './views/Productos'

import NuevoUsuario from './views/NuevoUsuario'
import Login from './views/Login'
import Footer from './components/Footer'
import MiPerfil from './views/MiPerfil'

import EditarPerfiles from './views/EditarPerfiles'

import Consultas from './views/Consultas'
import EditarConsultas from './views/EditarConsultas'
import BorrarConsultas from './views/BorrarConsultas'
import NuevaConsulta from './views/NuevaConsulta'
import Nosotros from './views/Nosotros'
//importo los archivos para hacer las rutas y los archivos de react para hacer las rutas

//importo la hoja de estilos
import './css/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 
  

  <Router>
 {/* el header que es comun para todaslas rutas */}
  <Header/>
  
    <Routes>
   {/* todos los archivos con sus rutas restringidas menos la pagina de inicio,con un ternario para que tengan que estar logeados para acceder */}
       <Route path='/' element={<Inicio/>}/> 
      <Route path='/login' element={localStorage.getItem('Usuario') == null? <Login/>:<Inicio/>}/>
      <Route path ='/login/nuevoUsuario' element = {<NuevoUsuario/>}/>
      <Route path ='/productos' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Productos/>}/>
      <Route path ='/nosotros' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Nosotros/>}/>
     
     
      <Route path ='/miPerfil' element = {localStorage.getItem('Usuario') ==null? <Login/>:<MiPerfil/>}/>
      <Route path ='/miPerfil/editar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<EditarPerfiles/>}/>
      
      
     
      <Route path ='/Consultas' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Consultas/>}/>
      <Route path ='/Consultas/editar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<EditarConsultas/>}/>
      <Route path ='/Consultas/borrar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<BorrarConsultas/>}/>
      <Route path ='/Consultas/nuevaConsulta' element = {localStorage.getItem('Usuario') ==null? <Login/>:<NuevaConsulta/>}/>
     
    </Routes>
 {/* el footer comun para todas las rutas */}
    <Footer/>

  </Router>

  </>
)
