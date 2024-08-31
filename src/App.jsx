
import { useEffect, useState } from 'react'
import './App.css'
import Swal from 'sweetalert2'
import phrases from './utils/phrases.json'
import Card from './components/Card'

function App() {
  


  return (
    <div className='app'>
      <div className='app-arriba'>
        <div className='app-titulo-logo'>
          <div className='app-logo'>
            <img src="../public/assets/logo-web-v1-f.jpg" alt="logo" />
          </div>
        <h1 className='app-titulo'>MIRADA SALUDABLE</h1>
        </div>
        <div>
        <h2 className='app-subtítulo'>"UNA MIRADA CLARA HACIA UN FUTURO SALUDABLE"</h2>
        </div>
        
      
      <p className='app-parrafo'>En la era digital actual, es común pasar largas horas frente a una pantalla, ya sea trabajando, estudiando o disfrutando de actividades recreativas. Sin embargo, esta exposición prolongada puede tener efectos negativos sobre nuestra salud y bienestar. Utilizar un temporizador es una herramienta sencilla pero eficaz para gestionar el tiempo frente a la pantalla y promover un equilibrio saludable</p>
      
      </div>
      <div className='app-card'>
      <Card/>
      </div>
      <footer className='app-abajo'>
        <div className='app-abajo-logo' >
          <img src="../public/assets/logo-carrera.svg" alt="" />
        </div>
        <div className='app-abajo-titulo'>
          <h3 className='app-titulo-3'>UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURÍMAC</h3>
          <hr />
          <br />
          <p className='app-parrafo-footer'>EAP. INGENIERÍA INFORMÁTICA Y SISTEMAS</p>
        </div>
      </footer>
     
    </div>
  )
}

export default App
