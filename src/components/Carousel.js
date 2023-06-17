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

// import '../styles/Carousel.scss'
// import { LogementList } from "../datas/LogementList";

// function Carousel({sheet}) {
//     return (
//     <div className='carousel'>
//        <img src= {LogementList[sheet].pictures[0]} alt="paysage au bord d'une île - arrière plan de la bannière" className="carousel__background"/>
//        <div className='carousel__next' />
//        <div className='carousel__prev' />
//        <p className='carousel__pagination'>1/4</p>
//     </div>
//     )
// }

// export default Carousel
