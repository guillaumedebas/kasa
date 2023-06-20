import image from "../../assets/banner-a-propos-image.png"
import DropdownAPropos from "../../components/DropdownAPropos"
import Gallery from "../../components/Gallery"

function Apropos() {
  return (
    <main>
      <Gallery pictures={[image]} banner={true} />
      <DropdownAPropos />
    </main>
  )
}

export default Apropos
