import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container"> {/* Add a class for styling */}
      <a
        className="App-link"
        href="https://calendly.com/romina-jimenalopez/sesion-con- romina-lopez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Mis turnos</h2>
      </a>
      <a
        className="App-link"
        href="https://www.canva.com/design/DAF_HiKW3PI/9bkcDasMlhecyCZQ5GM7AA/edit?utm_content=DAF_HiKW3PI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Políticas de cancelación</h2>
      </a>
    </div>
  );
}

export default Header;