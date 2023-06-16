import { Link } from "react-router-dom"
import "../styles/RentalItem.scss"

function RentalItem({ title, cover, id }) {
  return (
    <Link to={`/RentalSheetPage/${id}`}>
      <li className="rental">
        <p className="rental__title">{title}</p>{" "}
        <img className="rental__background" src={cover} alt={title} />
      </li>
    </Link>
  )
}

export default RentalItem
