import { Link } from "react-router-dom"
import "../../styles/Error.scss"

function Error() {
  return (
    <main className="error">
      <p className="error__type">404</p>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default Error
