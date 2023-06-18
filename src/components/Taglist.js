import { LogementList } from "../datas/LogementList"
import "../styles/Taglist.scss"

function Taglist({ sheet }) {
  return (
    <ul className="tag-list">
      {LogementList[sheet].tags.map((tag, id) => (
        <li key={id} className="tag-list__item">
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Taglist
