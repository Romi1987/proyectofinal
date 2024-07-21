import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container my-4">
        <div className="d-flex justify-content-center py-1" style={{ backgroundColor: '#db30cd' }}>
          <a href="https://www.instagram.com/" target="_blank" className="btn btn-primary btn-lg btn-floating mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="text-center text-white p-3" style={{ backgroundColor: '#42085b' }}>
          © 2024 Web Design Romina López
        </div>
      </div>
    </footer>
  );
}

export default Footer;
