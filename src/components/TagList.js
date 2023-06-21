import rentals from "../datas/logements.json"
import "../styles/TagList.scss"

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

export default TagList
