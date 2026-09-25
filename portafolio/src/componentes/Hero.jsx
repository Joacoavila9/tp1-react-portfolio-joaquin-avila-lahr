import '../css/Hero.css'
const Hero = ({nombre, presentacion}) => {






    return (
        <section className="hero-container">
            <h1 className="hero-titulo">¡Hola! mi nombre es {nombre}</h1>
            <p className="hero-subtitulo"> {presentacion} </p>
    </section>
        






    )
}
export default Hero