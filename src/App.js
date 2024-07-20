import logo from "./logo-flor.png";
import "./App.css";
import React from "react";
import Header from "./Componentes/Header";
import About from "./Componentes/About";
import Sesiones from "./Componentes/Sesiones";
import Testimonios from "./Componentes/Testimonios";
import Contacto from "./Componentes/Contacto";
import Footer from "./Componentes/Footer";

function App() {
    return (
    <main className="App">  {/* Add class for overall styling */}
      <Header />  {/* Render Header component */}
      <div className="fondo"> {/* Add class for background styling */}
        <img src={logo} className="App-logo" alt="logo-flor" />
          <div className="components-container"> {/* Add class for component organization */}
          <About />
          <Sesiones />
          <Testimonios />
          <Contacto />
        </div>
        <Footer />  {/* Render Footer component (if applicable) */}
      </div>
    </main>
  );
}

export default App;
