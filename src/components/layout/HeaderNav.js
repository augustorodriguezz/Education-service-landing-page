import React from 'react'
import { NavLink } from 'react-router-dom'
import imagen from './docencia.png';

export const HeaderNav = () => {
  return (
    <header className='header'> 
        <nav className='nav'>
            <h1 className='name'>Augusto Rodriguez</h1>
            <ul>
                <li><NavLink to='/inicio'>Inicio</NavLink></li>
                <li><NavLink to='/paquetes'>Paquetes</NavLink></li>
                <li><NavLink to='/contacto'>Contacto</NavLink></li>
            </ul>
        </nav>
        <div className='header-container'>
            <div className='text-container'>
                <h2>Te ayudo a aprobar todo</h2>
                <p>Contrata mis clases que vas a aprobar todo, esta 100 por ciento asegurado no seas boludo!</p>
            </div>
            <figure className='illustration'>
                <img src={imagen} className='imagen-central'/>
            </figure>
        </div>
        
    </header>
  )
}
