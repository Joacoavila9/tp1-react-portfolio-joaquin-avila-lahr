import {Card} from 'react-bootstrap'
import '../css/Projects.css'

const Projects = ({titulo, descripcion}) => {






    return (
        <section>
            <h1>MIS PROYECTOS</h1>
      <div className="card-contenedor">
      <Card className="project-card">
      <Card.Body>
        <Card.Title className="project-title">{titulo}</Card.Title>
        <Card.Text className="project-text">
          {descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </section>





    )
}
export default Projects