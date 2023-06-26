import rentals from "../datas/logements.json"
import "../styles/HousingSummary.scss"

/**
 * HousingSummary component.
 *  Renders the summary of a housing, including the title and location.
 * Props:
 * sheet: The index of the rental sheet in the rentals array.
 */

function HousingSummary({ sheet }) {
  return (
    <div className="housing-summary">
      <h2 className="housing-summary__title">{rentals[sheet].title}</h2>
      <p className="housing-summary__location">{rentals[sheet].location}</p>
    </div>
  )
}

export default HousingSummary
