import React from 'react'
import Navegacion from '../navegacion/Navegacion'
import { motion } from 'framer-motion'
import { TRABAJOS } from "../api";
import { useEffect, useState } from "react";
import Footer from '../footer/Footer';

const Trabajos = () => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  const [mostrar, setMostrar] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
        setMostrar(true);
    }, 800);
  }, []); 

  return (
    <>
      { mostrar ?
      //TRUE
      <>
      <Navegacion/>
        <h3 className='textoTrabajos'>Trabajos</h3>
        <div className="container cajaCentral">
            <motion.section className="cajaTrabajos" 
                variants={container}
                initial="hidden"
                animate="visible"
            >
                    {TRABAJOS.map((index) => (
                              <motion.article className="trabajo" key={index.id} variants={item}>
                                  <a href={index.url} target="_blank"><img src={index.img} alt="..."/></a>
                                  <h6>{index.tecnologias}</h6>
                              </motion.article>
                            ))
                        }
            </motion.section>
        </div>
      <Footer/>
      </>
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

export default Trabajos