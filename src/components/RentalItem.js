import { Link } from "react-router-dom"
import "../styles/RentalItem.scss"

function RentalItem({ title, cover, id }) {
  return (
    <Link to={`/RentalSheet/${id}`}>
      <div className="rental">
        <p className="rental__title">{title}</p>{" "}
        <img className="rental__background" src={cover} alt={title} />
      </div>
    </Link>
  )
}

export default RentalItem
