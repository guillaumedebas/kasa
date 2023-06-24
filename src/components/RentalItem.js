import { Link } from "react-router-dom"
import "../styles/RentalItem.scss"

/**
 * RentalItem component.
 * Displays a rental item with title, cover image, and a link to the rental sheet.
 *
 * Props:
 * - title: the title of the rental item.
 * - cover: the URL of the cover image for the rental item.
 * - id: the unique identifier of the rental item.
 */
function RentalItem({ title, cover, id }) {
  return (
    <Link to={`/RentalSheet/${id}`}>
      <div className="rental">
        <p className="rental__title">{title}</p>
        <img className="rental__background" src={cover} alt={title} />
      </div>
    </Link>
  )
}

export default RentalItem
