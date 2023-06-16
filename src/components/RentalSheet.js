import "../styles/RentalSheet.scss"
import Carousel from "./Carousel"
import MainRentalInformation from "./MainRentalInformation"
import HostInformation from "./HostInformation"
import { LogementList } from "../datas/LogementList"
import Dropdown from "./Dropdown"
import { useParams } from "react-router-dom"

function searchNumber(id) {
  for (let i = 0; i < LogementList.length; i++) {
    if (LogementList[i].id === id) {
      return i
    }
  }
  return -1 // Si l'ID n'est pas trouvé dans la liste
}

function RentalSheet() {
  const { id } = useParams()

  const sheet = searchNumber(id)
  return (
    <div>
      <Carousel sheet={sheet} />

      <section className="rental-sheet">
        <div className="rental-sheet__overview">
          <MainRentalInformation sheet={sheet} />
          <HostInformation sheet={sheet} />
        </div>
        <div className="rental-sheet__detail">
          <Dropdown
            dropdownLabel={"Description"}
            content={
              <p className="dropdown__content">
                {LogementList[sheet].description}
              </p>
            }
          />
          <Dropdown
            dropdownLabel={"Équipements"}
            content={
              <ul>
                {LogementList[sheet].equipments.map((equipement, id) => (
                  <li key={id} className="dropdown__hidden-box__item">
                    {equipement}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </div>
  )
}

export default RentalSheet
