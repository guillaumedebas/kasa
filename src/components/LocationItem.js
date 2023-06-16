import '../styles/LocationItem.scss'

function LocationItem({ title, cover }) {
	return (
		<li className="location">
		<p className="location__title">{title}</p> <img className="location__background" src={cover} alt={title} />
	  </li>
	)
}

export default LocationItem


