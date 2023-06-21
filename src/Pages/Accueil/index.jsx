import image from "../../assets/banner-accueil-image.jpeg"
import BannerGallery from "../../components/BannerGallery"
import RentalList from "../../components/RentalList"

function Accueil() {
  return (
    <main>
      <BannerGallery
        pictures={[image]}
        slogan="Chez vous, partout et ailleurs"
        banner={true}
      />
      <RentalList />
    </main>
  )
}

export default Accueil
