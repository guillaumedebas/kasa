import React, { useState } from "react"
import "../styles/BannerGallery.scss"

const BannerGallery = ({ pictures, slogan, banner }) => {
  const [currentItem, setCurrentItem] = useState(0)

  const next = () => {
    setCurrentItem((currentItem + 1) % pictures.length)
  }

  const prev = () => {
    setCurrentItem((currentItem - 1 + pictures.length) % pictures.length)
  }

  if (pictures.length === 1) {
    return (
      <div className={`gallery ${banner ? "banner" : ""}`}>
        <div className="gallery__container">
          <img
            src={pictures[0]}
            alt="Slide 1"
            className="gallery__image active"
          />
          {slogan && <h1 className="gallery__title">{slogan}</h1>}
        </div>
      </div>
    )
  }

  return (
    <div className={`gallery ${banner ? "banner" : ""}`}>
      <div className="gallery__container">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index + 1}`}
            className={
              index === currentItem ? "gallery__image active" : "gallery__image"
            }
          />
        ))}
      </div>
      <div className="gallery__pagination">
        {currentItem + 1} / {pictures.length}
      </div>
      <button className="gallery__prev" onClick={prev}>
        Précédent
      </button>
      <button className="gallery__next" onClick={next}>
        Suivant
      </button>
      {slogan && <h1 className="gallery__title">{slogan}</h1>}
    </div>
  )
}

export default BannerGallery
