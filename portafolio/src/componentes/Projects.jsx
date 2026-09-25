import {Card, Col} from 'react-bootstrap'
import '../css/Projects.css'

const Projects = ({titulo, descripcion}) => {






    return (
       <Col xs={12} md={6} lg={5} className="d-flex justify-content-center">
      <div className="card-contenedor w-100">
        <Card className="project-card">
          <Card.Body>
            <Card.Title className="project-title">{titulo}</Card.Title>
            <Card.Text className="project-text">
              {descripcion}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>




    )
}
export default Projects