import "../styles/RentalSheet.scss"
import Carousel from "./Carousel"
import { LogementList } from "../datas/LogementList"
import Dropdown from "./Dropdown"
import RatingScale from "./RatingScale"
import HostIdentity from "./HostIdentity"
import Taglist from "./Taglist"

function RentalSheet({ sheet }) {
  return (
    <div>
      <Carousel pictures={LogementList[sheet].pictures} />

      <section className="rental-sheet">
        <div className="rental-sheet__overview">
          <div className="housing">
            <h2 className="housing__title">{LogementList[sheet].title}</h2>
            <p className="housing__location">{LogementList[sheet].location}</p>
            <Taglist sheet={sheet} />
          </div>
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
              <div className="dropdown__hidden-box__item">
                <ul>
                  {LogementList[sheet].equipments
                    .slice(0, 5)
                    .map((equipement, id) => (
                      <li key={id}>{equipement}</li>
                    ))}
                </ul>

                {LogementList[sheet].equipments.length > 5 && (
                  <ul>
                    {LogementList[sheet].equipments
                      .slice(5)
                      .map((equipement, id) => (
                        <li key={id}>{equipement}</li>
                      ))}
                  </ul>
                )}
              </div>
            }
          />
        </div>
      </section>
    </div>
  )
}

export default RentalSheet
