import { LogementList } from "../datas/LogementList"
import "../styles/HostIdentity.scss"

function HostIdentity({ sheet }) {
  return (
    <div className="identity">
      <p className="identity__name">{LogementList[sheet].host.name}</p>
      <img
        src={LogementList[sheet].host.picture}
        alt={LogementList[sheet].host.name}
        className="identity__picture"
      />
    </div>
  )
}

export default HostIdentity
