import "../styles/Header.scss"
import logoKasa from "../assets/logo-kasa.svg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="navbar__logo" to="/">
          <img
            src={logoKasa}
            alt="logo de Kasa"
            className="navbar__logo__svg"
          />
        </Link>
        <Link className="navbar__link" to="/">
          Accueil
        </Link>
        <Link className="navbar__link" to="/a-propos">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header