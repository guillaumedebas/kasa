import { useNavigate, useParams } from "react-router-dom"
import { LogementList } from "../../datas/LogementList"
import "../../styles/RentalSheet.scss"
import Dropdown from "../../components/Dropdown"
import RatingScale from "../../components/RatingScale"
import HostIdentity from "../../components/HostIdentity"
import TagList from "../../components/TagList"
import Gallery from "../../components/Gallery"
import React, { useEffect } from "react"

function searchRental(id) {
  for (let i = 0; i < LogementList.length; i++) {
    if (LogementList[i].id === id) {
      return i
    }
  }
  return -1
}

function RentalSheetSelect() {
  const { id } = useParams()
  const navigate = useNavigate()
  const sheet = searchRental(id)

  useEffect(() => {
    if (sheet === -1) {
      navigate("/error")
    }
  }, [navigate, sheet])

  if (sheet === -1) {
    return null // Retourne null si la navigation est effectuée vers le composant Error
  }

  return (
    <main>
      <Gallery pictures={LogementList[sheet].pictures} />

      <section className="rental-sheet">
        <div className="rental-sheet__overview">
          <div className="housing">
            <h2 className="housing__title">{LogementList[sheet].title}</h2>
            <p className="housing__location">{LogementList[sheet].location}</p>
            <TagList sheet={sheet} />
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
    </main>
  )
}

export default RentalSheetSelect
