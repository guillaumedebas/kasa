import "../styles/RentalSheet.scss"
import Carousel from "./Carousel"
import MainRentalInformation from "./MainRentalInformation"
import { LogementList } from "../datas/LogementList"
import Dropdown from "./Dropdown"
import RatingScale from "./RatingScale"
import HostIdentity from "./HostIdentity"

function RentalSheet({ sheet }) {
  return (
    <div>
      <Carousel sheet={sheet} />

      <section className="rental-sheet">
        <div className="rental-sheet__overview">
          <MainRentalInformation sheet={sheet} />
          <div className="rental-sheet__host">
            <HostIdentity sheet={sheet} />
            <RatingScale scaleValue={LogementList[sheet].rating} />
          </div>
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
