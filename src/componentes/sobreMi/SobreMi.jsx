import React from "react";
import Navegacion from "../navegacion/Navegacion";
import Habilidades from "./Habilidades";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";

const SobreMi = () => {

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
      <>
        <Navegacion/>
        <div className="container cajaCentral">
          <div className="row">
            <section className="col cajaSobreMi">
              <h3>Un poco sobre mi ...</h3>
              <p>Front End Jr. con mas de 2 años de trayectoria adquiriendo conocimientos de manera autodidacta y mediante cursos. He desarrollado proyectos personales con tecnologías como <span className="tecnologias">HTML5, CSS3(SASS), JavaScript, React Js, JQuery, Bootstrap, Git.</span></p>
              <p>Me encuentro motivado al logro y superación de objetivos propuestos a través de un saludable trabajo en equipo, considerándome una persona proactiva y con la capacidad de lograr un buen desempeño, aún trabajando bajo presión. Siempre teniendo como meta la calidad del proyecto final.</p>
            </section>

            <section className="seccionHabilidades">
              <h3>Habilidades:</h3>
              <Habilidades/>
            </section>
          </div>
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
  );
};

export default SobreMi;
