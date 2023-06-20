import image from "../../assets/banner-accueil-image.jpeg"
import Gallery from "../../components/Gallery"
import RentalList from "../../components/RentalList"

function Accueil() {
  return (
    <main>
      <Gallery
        pictures={[image]}
        slogan="Chez vous, partout et ailleurs"
        banner={true}
      />
      <RentalList />
    </main>
  )
}

export default Accueil
