import { useState } from "react"
import '../css/About.css'

const About = ({edad,emprendimiento,infoExtra,estadoCivil,provincia,presentacion,nombre,apellido,carrera}) => {

const [mostrarMas, setMostrarMas] = useState(false);

    return (
     <section id="sobre-mi" className="about-container">
      <h2 className="about-titulo">Sobre mí</h2>
      {mostrarMas && (
        <div className="about-detalles">
          <div className="about-grid">
            <p><strong>Nombre completo:</strong> {nombre} {apellido}</p>
            <p><strong>Edad:</strong> {edad} años</p>
            <p><strong>Estado civil:</strong> {estadoCivil}</p>
            <p><strong>Naci en:</strong> {provincia}, Argentina</p>
          </div>

          <div className="about-seccion-extra">
            <h4>Emprendimiento:</h4>
            <p>{emprendimiento}</p>
          </div>

          <div className="about-seccion-extra">
            <h4>Más sobre mí:</h4>
            <p>{infoExtra}</p>
          </div>
        </div>
      )}
      <button 
        className="about-btn" 
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
    </section>





    )
}
export default About