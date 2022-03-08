import { HashRouter, Routes, Route } from "react-router-dom"; 
import Trabajos from "./componentes/trabajos/Trabajos";
import Contacto from "./componentes/contacto/Contacto";
import Inicio from "./componentes/inicio/Inicio";
import SobreMi from "./componentes/sobreMi/SobreMi";

function App() {
  return ( 
      <HashRouter>
          <Routes>          
            <Route exact path='/' element={<Inicio/>}/>
            <Route exact path='/sobreMi' element={<SobreMi/>}/>
            <Route exact path='/trabajos' element={<Trabajos/>}/>
            <Route exact path='/contacto' element={<Contacto/>}/>
          </Routes> 
      </HashRouter>
  );
}

export default App;
