import React from 'react';
import { NavLink } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className='inicio'>
      <section className='presentacion'>
        <div className='caja'>
          <h2>Sobre mí</h2>
          <p>Este texto es sobre mí</p>
        </div>
        <img src='/'/>
      </section>
      <hr/>
      <section className='signatures'>
            <h2>¡Elegí la materia en la que necesites ayuda y arranquémos!</h2>
            <article className="signature">
                <h3>Análisis Matemático CBC</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            <article className="signature">
                <h3>Álgebra CBC</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            <article className="signature">
                <h3>Física CBC</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
            <article className="signature">
                <h3>Geometría descriptiva</h3>
                <p>Descripción</p>
                <button>Más Info</button>
            </article>
      </section>
      <hr/>
      <section className='work-type'>
        <h3>Para contratar una clase conmigo debés seguir los siguientes pasos:</h3>

      </section>
      <hr/>
      <section className='contact'>
        <div className='contact-box'>
          <h3>Ponete en contacto ahora mismo</h3>
          <button><NavLink to='/contacto'>¡Charlemos!</NavLink></button>
        </div>
      </section>
    </div>
  )
}

