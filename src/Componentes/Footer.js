import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Corregido



function Footer() {
  return (
    <footer>
      <div className="container my-4">
        <div className="footer-top d-flex justify-content-center py-1">
          <a href="https://www.instagram.com/florlp.makeup/" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg btn-floating mx-2"> {/* Añadido rel="noopener noreferrer" por seguridad */}
            <FontAwesomeIcon icon={faInstagram} size="3x"/>
          </a>
        </div>
        <div className="footer-bottom text-center text-white p-3">
          © 2024 Web Design Romina López
        </div>
      </div>
    </footer>
  );
}

export default Footer;