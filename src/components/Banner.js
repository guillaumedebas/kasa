import '../styles/Banner.scss'


function Banner({image, slogan}) {
    
    return (
    <div className='banner'>
       <img src= {image} alt="paysage au bord d'une île - arrière plan de la bannière" className="banner__background"/>
        <h1 className='banner__title'> {slogan} </h1>
    </div>
    )
}

export default Banner