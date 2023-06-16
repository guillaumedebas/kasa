import "../styles/RentalItem.scss"

function RentalItem({ title, cover }) {
  return (
    <li className="rental">
      <p className="rental__title">{title}</p>{" "}
      <img className="rental__background" src={cover} alt={title} />
    </li>
  )
}

export default RentalItem
