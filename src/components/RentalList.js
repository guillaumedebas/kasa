import "../styles/RentalList.scss"
import { LogementList } from "../datas/LogementList"
import RentalItem from "./RentalItem"

function RentalList() {
  return (
    <ul key="RentalList" className="rental-list">
      {LogementList.map(({ id, title, cover }) => (
        <RentalItem key={id} title={title} cover={cover} />
      ))}
    </ul>
  )
}

export default RentalList
