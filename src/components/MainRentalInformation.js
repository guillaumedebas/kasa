import { LogementList } from "../datas/LogementList";
import '../styles/MainRentalInformation.scss'

function MainRentalInformation({ sheet }) {
  return (
    <div className="housing">
      <h2 className="housing__title">
        {LogementList[sheet].title}
      </h2>
      <p className="housing__location">
        {LogementList[sheet].location}
      </p>
      <ul className="housing__tag-list">
        {LogementList[sheet].tags.map((tag, id) => (
          <li key={id} className="housing__tag-list__item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainRentalInformation;
