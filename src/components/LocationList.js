import "../styles/LocationList.scss";
import { LogementList } from "../datas/LogementList";
import LocationItem from "./LocationItem";

function LocationList() {
  

  return (
    <ul key='LocationList' className="location-list">
     
      {LogementList.map(({id, title, cover}) => (
      <LocationItem
          key = { id }
          title = {title }
          cover = { cover }
      />
      ))}

    </ul>
  );
}

export default LocationList
