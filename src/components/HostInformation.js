import { LogementList } from "../datas/LogementList";
import RatingScale from "./RatingScale";
import '../styles/HostInformation.scss'

function HostInformation({ sheet }) {
  return (
    <div className="host">
    <div className="host__identity">
      <p className="host__identity__name">
        {LogementList[sheet].host.name}
      </p>
      <img
        src={LogementList[sheet].host.picture}
        alt={LogementList[sheet].host.name}
        className="host__identity__picture"
      />
      </div>
      <RatingScale scaleValue={LogementList[sheet].rating} />
    </div>
  );
}

export default HostInformation;
