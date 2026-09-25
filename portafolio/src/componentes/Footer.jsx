import '../css/Footer.css'

const Footer = ({email}) => {






    return (
        <footer className="footer-container">
            <div className="footer-contenido">
                <a href={`mailto:${email}`} className="footer-mail">
                    {email}
                </a>
                <span className="footer-separador">|</span>
                <span className="footer-institucion">UTN FRT</span>
            </div>
        </footer>





    )
}
export default Footer