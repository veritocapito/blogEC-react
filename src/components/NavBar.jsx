

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <a href="#subcribirse" className="text-button text-button-md">Suscribirse</a>
                </li>
                <li>
                    <a href="https://veritocapito.github.io/EC_FrontEnd/" target="_blank"
                        className="button button-primary"><i
                            className="bi bi-globe2"></i>Estudio Capobianco</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/estudio_capobianco/" target="_blank"
                        className="button button-secondary"><i
                            className="bi bi-instagram"></i>Instagram</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
