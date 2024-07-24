import React from 'react';
import novias from '../images/novias.jpg';
import social from '../images/social.jpg';
import artistico from '../images/artistico.jpg';
import cursos from '../images/cursos.jpg';

const Carrousel = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 mb-4">
            <div className="card">
              <div className="view overlay">
                <img className="card-img-top" src={novias} alt="Novias" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Novias</h4>
                <p className="card-text">
                  Esta sesión es toda una experiencia para un momento especial,
                  incluye la prueba de maquillaje, la preparación de la piel y el
                  make-up el día del evento.
                </p>
                <a href="https://mpago.la/2ZsV2Jq" target="_blank" rel="noopener noreferrer" className="btn btn-light-blue btn-md">
                  $80.000
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 mb-4">
            <div className="card">
              <div className="view overlay">
                <img className="card-img-top" src={social} alt="Social" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Social</h4>
                <p className="card-text">
                  Esta sesión es un comodín, podés solicitarla para cualquier
                  ocasión sea formal, informal, para una sesión de fotos, redes
                  sociales, lo que quieras.
                </p>
                <a href="https://mpago.la/2ZsV2Jq" target="_blank" rel="noopener noreferrer" className="btn btn-light-blue btn-md">
                  $50.000
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 mb-4">
            <div className="card">
              <div className="view overlay">
                <img className="card-img-top" src={artistico} alt="Artístico" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Artístico</h4>
                <p className="card-text">
                  Este tipo de maquillaje es diferente al resto, podés reservarlo
                  para una fiesta de disfraces, para eventos infantiles o para un
                  make-up bar en algún evento.
                </p>
                <a href="https://mpago.la/2ZsV2Jq" target="_blank" rel="noopener noreferrer" className="btn btn-light-blue btn-md">
                  Desde $30.000
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 mb-4">
            <div className="card">
              <div className="view overlay">
                <img className="card-img-top" src={cursos} alt="Cursos" />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Cursos</h4>
                <p className="card-text">
                  Actualmente el curso que está vigente es el de automaquillaje en
                  base a tus facciones y lo que es mejor para tu rostro. Se abre
                  por lista de espera.
                </p>
                <a href="https://mpago.la/2ZsV2Jq" target="_blank" rel="noopener noreferrer" className="btn btn-light-blue btn-md">
                  $20.000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Carrousel;