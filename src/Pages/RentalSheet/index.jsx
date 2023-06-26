import { useNavigate, useParams } from "react-router-dom"
import rentals from "../../datas/logements.json"
import "../../styles/RentalSheet.scss"
import Dropdown from "../../components/Dropdown"
import RatingScale from "../../components/RatingScale"
import HostIdentity from "../../components/HostIdentity"
import TagList from "../../components/TagList"
import BannerGallery from "../../components/BannerGallery"
import React, { useEffect, useState } from "react"
import HousingSummary from "../../components/HousingSummary"

/**
 * RentalSheet page.
 * Displays the details of a specific rental sheet.
 */

function RentalSheet() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sheet, setSheet] = useState(null)

  useEffect(() => {
    // Search for the rental sheet based on the id parameter
    function searchRental(id) {
      for (let i = 0; i < rentals.length; i++) {
        if (rentals[i].id === id) {
          return i
        }
      }
      return -1
    }

    const sheet = searchRental(id)
    // Redirect to error page if the sheet is not found
    if (sheet === -1) {
      navigate("/error")
    } else {
      setSheet(sheet)
    }
  }, [id, navigate])

  if (sheet === null) {
    return null
  }

  return (
    <main>
      <BannerGallery pictures={rentals[sheet].pictures} />

      <section className="rental-sheet">
        <div className="rental-sheet__overview">
          <div className="rental-sheet__overview__housing">
            <HousingSummary sheet={sheet} />
            <TagList sheet={sheet} />
          </div>

          <div className="rental-sheet__overview__host">
            <HostIdentity sheet={sheet} />
            <RatingScale scaleValue={rentals[sheet].rating} />
          </div>
        </div>

        <div className="rental-sheet__detail">
          <Dropdown
            dropdownLabel={"Description"}
            content={
              <p className="dropdown__content">{rentals[sheet].description}</p>
            }
          />
          <Dropdown
            dropdownLabel={"Équipements"}
            content={
              <div className="dropdown__hidden-box__item">
                <ul>
                  {rentals[sheet].equipments
                    .slice(0, 7)
                    .map((equipement, id) => (
                      <li key={id}>{equipement}</li>
                    ))}
                </ul>

                {rentals[sheet].equipments.length > 7 && (
                  <ul>
                    {rentals[sheet].equipments
                      .slice(7)
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

export default RentalSheet
