import logo from './img/logo/logoECw.png'
import NavBar from './components/NavBar'

const Header = () => {
  return (
    <header className="main-navbar">
    <a href="../index.html" className="logo">
      <img src={logo} alt="Logo de Estudio Capobianco" />
    </a>
    <NavBar />
  </header>
  )
}

export default Header
