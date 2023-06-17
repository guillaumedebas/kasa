import React, { useState } from "react"
import "../styles/Carousel.scss"

const Carousel = ({ pictures }) => {
  const [currentItem, setCurrentItem] = useState(0)

  const next = () => {
    setCurrentItem((currentItem + 1) % pictures.length)
  }

  const prev = () => {
    setCurrentItem((currentItem - 1 + pictures.length) % pictures.length)
  }

  if (pictures.length === 1) {
    return (
      <div className="carousel">
        <div className="carousel__container">
          <img
            src={pictures[0]}
            alt="Slide 1"
            className="carousel__image active"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="carousel">
      <div className="carousel__container">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index + 1}`}
            className={
              index === currentItem
                ? "carousel__image active"
                : "carousel__image"
            }
          />
        ))}
      </div>
      <div className="carousel__pagination">
        {currentItem + 1} / {pictures.length}
      </div>
      <button className="carousel__prev" onClick={prev}>
        Précédent
      </button>
      <button className="carousel__next" onClick={next}>
        Suivant
      </button>
    </div>
  )
}

export default Carousel
