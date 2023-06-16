import fullStar from '../assets/full-star.svg'
import emptyStar from '../assets/empty-star.svg'
import '../styles/RatingScale.scss'



function RatingScale({ scaleValue }) {
	const range = [1, 2, 3, 4, 5]
	

	return (
		<div className="rating">
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? 
					<img src={fullStar} alt={scaleValue} key={rangeElem.toString()} className="rating__star" />
				 : <img src={emptyStar} alt={scaleValue} key={rangeElem.toString()} className="rating__star"/>
			)}
		</div>
	)
}

export default RatingScale
