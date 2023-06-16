import "../styles/RentalSheet.scss";
import Carousel from "./Carousel";
import MainRentalInformation from "./MainRentalInformation";
import HostInformation from "./HostInformation";
import { LogementList } from "../datas/LogementList";
import Dropdown from "./Dropdown";

function RentalSheet() {
  const sheet = 10;
  return (
    <div>
      <Carousel sheet={sheet} />

      <section className="rental-sheet">
        <div className="rental-sheet__overview">
          <MainRentalInformation sheet={sheet} />
          <HostInformation sheet={sheet} />
        </div>
        <div className="rental-sheet__detail">
          <Dropdown
            dropdownLabel={"Description"}
            content={
              <p className="dropdown__content">
                {LogementList[sheet].description}
              </p>
            }
          />
          <Dropdown
            dropdownLabel={"Équipements"}
            content={
              <ul className="dropdown__content">
                {LogementList[sheet].equipments.map((equipement, id) => (
                  <li key={id} className="dropdown__content__item">
                    {equipement}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </div>
  );
}

export default RentalSheet;
