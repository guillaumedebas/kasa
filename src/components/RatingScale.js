import fullStar from "../assets/full-star.svg"
import emptyStar from "../assets/empty-star.svg"
import PropTypes from 'prop-types'
import "../styles/RatingScale.scss"

/**
 * RatingScale component.
 * Displays a rating scale using stars based on the given scaleValue.
 *
 * Props:
 * - scaleValue: the rating value to display on the scale.
 */
function RatingScale({ scaleValue }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {/* Map over the range array to generate stars */}
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          // Display a full star if scaleValue is greater than or equal to the current range element
          <img
            src={fullStar}
            alt={scaleValue}
            key={rangeElem.toString()}
            className="rating__star"
          />
        ) : (
          // Otherwise, display an empty star
          <img
            src={emptyStar}
            alt={scaleValue}
            key={rangeElem.toString()}
            className="rating__star"
          />
        )
      )}
    </div>
  )
}
RatingScale.propTypes = {
  scaleValue: PropTypes.string.isRequired,
};

export default RatingScale
