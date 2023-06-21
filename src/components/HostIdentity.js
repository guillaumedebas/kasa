import rentals from "../datas/logements.json"
import "../styles/HostIdentity.scss"

function HostIdentity({ sheet }) {
  return (
    <div className="identity">
      <p className="identity__name">{rentals[sheet].host.name}</p>
      <img
        src={rentals[sheet].host.picture}
        alt={rentals[sheet].host.name}
        className="identity__picture"
      />
    </div>
  )
}

export default HostIdentity
