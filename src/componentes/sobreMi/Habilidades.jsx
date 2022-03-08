import React from "react";
import { HABILIDADES } from "../api";
import { motion } from "framer-motion";


const Habilidades = () => {

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

  return (
    <div className="container">
        <motion.section className="seccionHabilidades" 
            variants={container}
            initial="hidden"
            animate="visible"
        >
                {HABILIDADES.map((index) => (
                            <motion.article key={index.id} variants={item} className="item">{index.habilidad}</motion.article>
                        ))
                    }
        </motion.section>
    </div>
  );
};

export default Habilidades;