import "../styles/RentalList.scss"
import RentalItem from "./RentalItem"
import React from "react"
import rentals from "../datas/logements.json"

/**
 * RentalList component.
 * Displays a list of rental items.
 */

function RentalList() {
  return (
    <section key="RentalList" className="rental-list">
      {rentals.map(({ id, title, cover }) => (
        <RentalItem key={id} title={title} cover={cover} id={id} />
      ))}
    </section>
  )
}

export default RentalList
