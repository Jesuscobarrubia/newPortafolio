import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Nav, Navbar } from "react-bootstrap";

const Navegacion = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className='navbar'>
        <Navbar.Brand>
        <motion.a className="nav-link JC" aria-current="page" href="#" 
        animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            transition:{repeat: Infinity, duration: 5}
        }}
        >
            JC
        </motion.a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to={'/sobreMi'} className="nav-link" aria-current="page" href="#">
            Sobre mi
        </Link>
        <Link to={'/trabajos'} className="nav-link" href="#">
            Trabajos
        </Link>
        <Link to={'/contacto'} className="nav-link" href="#">
            Contacto
        </Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navegacion


{/* <nav className="navbar navbar-expand-lg">
<div className="container container-fluid">
    <ul className="navbar-nav">
        <li className="nav-item">
        <motion.a className="nav-link JC" aria-current="page" href="#" 
        animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            transition:{repeat: Infinity, duration: 5}
        }}
        >
            JC
        </motion.a>
        </li>
        <li className="nav-item px-3">
        <Link to={'/sobreMi'} className="nav-link" aria-current="page" href="#">
            Sobre mi
        </Link>
        </li>
        <li className="nav-item px-3">
        <Link to={'/trabajos'} className="nav-link" href="#">
            Trabajos
        </Link>
        </li>
        <li className="nav-item px-3">
        <Link to={'/contacto'} className="nav-link" href="#">
            Contacto
        </Link>
        </li>
    </ul>
</div>
</nav> */}