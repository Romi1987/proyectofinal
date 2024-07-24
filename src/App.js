import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import logo from "./logo-flor.png";
import "./App.css";

import Header from "./Componentes/Header";
import About from "./Componentes/About";
import Sesiones from "./Componentes/Sesiones";
import Carrousel from "./Componentes/Carrousel";
import Testimonios from "./Componentes/Testimonios";
import Contacto from "./Componentes/Contacto";
import Footer from "./Componentes/Footer";

import "./Componentes/Header.css";
import "./Componentes/About.css";
import "./Componentes/Sesiones.css";
import "./Componentes/Carrousel.css"; // Corregido
import "./Componentes/Testimonios.css";
import "./Componentes/Contacto.css";
import "./Componentes/Footer.css";

function App() {
    return (
        <main className="App"> {/* Add class for overall styling */}
            <Header /> {/* Render Header component */}
            <div className="fondo"> {/* Add class for background styling */}
                <img src={logo} className="App-logo" alt="logo-flor" />
                <div className="components-container"> {/* Add class for component organization */}
                    <div className='container'>
                    </div>
                    <About />
                    <Sesiones />
                    <Carrousel />
                    <Testimonios />
                    <Contacto />
                </div>
                <Footer /> {/* Render Footer component (if applicable) */}
            </div>
        </main>
    );
}

export default App;