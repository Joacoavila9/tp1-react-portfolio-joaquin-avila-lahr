import '../css/Header.css'

const Header = ({nombre, carrera}) => {






    return (
       <header className="header-container">
        <h1 className='header-nombre'>{nombre}</h1>
        <h1 className='header-carrera'>{carrera}</h1>
       </header>
    )
}
export default Header