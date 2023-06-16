// import LocationList from "./LocationList";

// import RentalSheet from "./RentalSheet";

import APropos from "./APropos";
import image from '../assets/banner-a-propos-image.png'
import Banner from "./Banner";

function Main() {
  return (
    <main>
      <Banner image={image} slogan={''}/>
      <APropos /> 
     
      {/* <RentalSheet /> */}
     
       {/* <LocationList /> */}
    </main>
  );
}

export default Main;
