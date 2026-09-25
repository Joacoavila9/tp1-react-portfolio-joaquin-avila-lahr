import About from "./componentes/About"
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Hero from "./componentes/Hero"
import Projects from "./componentes/Projects"
import Skills from "./componentes/Skills"
import { Row } from "react-bootstrap"
import { useState, useEffect } from "react"
const App = () => {

const desarrollados = [
{titulo: 'GeoLotes', descripcion:'Pagina para poder visualizar lotes a la venta' },
{titulo: 'Pet Match', descripcion: 'Plataforma para el seguimiento y gestión de adopción de mascotas.' },
]

  const persona = {
    nombre: 'Joaquin',
    apellido: 'Avila Lahr',
    carrera: 'Tecnicatura Universitaria en Programación',
    presentacion: 'Soy estudiante de Programacion en la UTN-FRT y un gran apasionado en aprender cosas nuevas',
    edad: 19,
    provincia: 'Tucumán',
    email: 'Joaquinavilalahr330@gmail.com',
    conocimientos: [' JavaScript ', ' C# ', ' HTML / CSS ', ' React ', ' GitHub / Git ', ' SQL '],
    estadoCivil: 'soltero',
    emprendimiento: 'Estoy comenzando con un emprendimiento llamado NFC.TUC, en el cual estoy incursionando en el rubro de la venta de productos personalizados con tecnología NFC incluida',
    infoExtra:'Fuera de la pantalla, en mis tiempos libres, me apasiona el diseño visual y la creación de proyectos independientes como NFC.TUC. Disfruto entrenar en el gimnasio, aprender de forma autodidacta y enfrentar nuevos retos.',
  };

  const [proyectos, setProyectos] = useState([])

  useEffect(()=>{
    setProyectos(desarrollados)
  }, [])

  return (
    <div>
     {<Header nombre={persona.nombre} apellido={persona.apellido} carrera={persona.carrera}/>}
     { <Hero nombre={persona.nombre} presentacion={persona.presentacion}/>}
     {<About carrera={persona.carrera} nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad} provincia={persona.provincia} infoExtra={persona.infoExtra} emprendimiento={persona.emprendimiento} estadoCivil={persona.estadoCivil} presentacion={persona.presentacion}/>}
     {<Skills conocimientos={persona.conocimientos}/>}
     <Row className="justify-content-center g-4">
     {proyectos.map((proyecto)=> <Projects titulo={proyecto.titulo} descripcion={proyecto.descripcion}/>)}
     </Row>
     {<Footer email={persona.email}/>}
    </div>

  )
}
export default App