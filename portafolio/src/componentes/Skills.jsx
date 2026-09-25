 import '../css/Skills.css'
 
 const Skills = ({conocimientos}) => {






    return (

            <section id="habilidades" className="skills-container">
      <h2 className="skills-titulo">Cuento con conocimientos en:</h2>
      
      <div className="skills-grid">
        {conocimientos.map((conocimiento) => (
          <div className="skill-card">
            <span className="skill-badge">{conocimiento}</span>
          </div>
        ))}
      </div>
    </section>






    )
}
export default Skills