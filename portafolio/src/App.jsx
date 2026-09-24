import About from "./componentes/About"
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Hero from "./componentes/Hero"
import Projects from "./componentes/Projects"
import Skills from "./componentes/Skills"
import { useState, useEffect } from "react"
const App = () => {

const desarrollados = [
{titulo: 'GeoLotes', descripcion:'Pagina para poder visualizar lotes a la venta' },
{titulo: 'Pet Match', descripcion: 'Plataforma para el seguimiento y gestión de adopción de mascotas.' }
]

  const persona = {
    nombre: 'Joaquin Avila Lahr',
    carrera: 'Tecnicatura Universitaria en Programación',
    presentacion: 'Soy estudiante de Programacion en la UTN-FRT y un gran apasionado en aprender cosas nuevas',
    edad: 19,
    provincia: 'Tucuman',
    email: 'Joaquinavilalahr330@gmail.com',
    conocimientos: ['JavaScript', 'C#', 'HTML / CSS', 'React', 'GitHub / Git', 'SQL'],
  };

  const [proyectos, setProyectos] = useState([])

  useEffect(()=>{
    setProyectos(desarrollados)
  }, [])

  return (
    <div>
     {proyectos.map((proyecto)=> <Projects titulo={proyecto.titulo} descripcion={proyecto.descripcion}/>)}
     {<Header nombre={persona.nombre} carrera={persona.carrera}/>}
    </div>

  )
}
export default App