import rentals from "../datas/logements.json"
import PropTypes from 'prop-types'
import "../styles/TagList.scss"

/**
 * TagList component.
 * Displays a list of tags for a specific rental sheet.
 *
 * Props:
 * - sheet: the index of the rental sheet to display tags from.
 */

function TagList({ sheet }) {
  return (
    <ul className="tag-list">
      {rentals[sheet].tags.map((tag, id) => (
        <li key={id} className="tag-list__item">
          {tag}
        </li>
      ))}
    </ul>
  )
}
TagList.propTypes = {
  sheet: PropTypes.number.isRequired,
};

export default TagList
