import React from 'react'
import { motion } from 'framer-motion';
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  const [candado, setCandado] = useState(true);

  const [mostrar, setMostrar] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
        setMostrar(true);
    }, 800);
  }, []); 

  return (
    <>
    { mostrar 
    ?
    //TRUE
      <div className='col-12 container containerInicio'>
        <h1 className='miNombre'>Jesús Cobarrubia</h1>
          <h3 className='frontEnd'>Front End Jr.</h3>
            <img className='imagenInicio' src="./img/fondoInicio.jpg" alt="fondoInicio" />

            <Link to={'/sobreMi'} className='candado'
              onMouseEnter={() => setCandado(false)}
              onMouseLeave={() => setCandado(true)}
              >

              {
                candado ?
                //TRUE
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-lock candado" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                </svg>
              :
              //FALSE
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-unlock candado" viewBox="0 0 16 16">
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
                </svg>
              }
            </Link>

              <motion.p
                  animate={{
                    y: -10,
                    transition: {
                      duration: 1,
                      ease: "easeIn",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  className='flechaInicio'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
              </motion.p>
          <h3 className='textoFlecha'>Hola, bienvenido/a.</h3>
      </div>
      :
      //FALSE
      <div className="container text-center spinner">
        <div className="spinner-grow" role="status">
      </div>
    </div>
  }
    </>
    )
}

export default Inicio