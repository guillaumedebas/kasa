import image from '../../assets/banner-a-propos-image.png'
import Banner from '../../components/Banner'
import DropdownAPropos from '../../components/DropdownAPropos'


function Apropos() {
    return (
      <main>
        <Banner image={image} slogan={''}/>      
        <DropdownAPropos /> 

      </main>
    )
  }

  export default Apropos