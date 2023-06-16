import '../styles/Carousel.scss'
import { LogementList } from "../datas/LogementList";

function Carousel({sheet}) {
    return (
    <div className='carousel'>
       <img src= {LogementList[sheet].pictures[0]} alt="paysage au bord d'une île - arrière plan de la bannière" className="carousel__background"/>
       <div className='carousel__next' />
       <div className='carousel__prev' />
       <p className='carousel__pagination'>1/4</p>
    </div>
    )
}

export default Carousel