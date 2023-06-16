import image from '../../assets/banner-accueil-image.jpeg'
import Banner from '../../components/Banner'
import RentalList from '../../components/RentalList'

function Accueil() {
    return (
      <main>
        <Banner image={image} slogan={'Chez vous, partout et ailleurs'}/>      
        <RentalList /> 

      </main>
    )
  }

  export default Accueil