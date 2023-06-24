import "../styles/Footer.scss"
import logoKasaWhite from "../assets/logo-kasa--white.svg"

/**
 * Footer component.
 * Displays the footer section of the website.
 */

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={logoKasaWhite}
        alt="logo de Kasa en Blanc"
      />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
