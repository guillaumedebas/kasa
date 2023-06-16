import "../styles/APropos.scss"
import Dropdown from "./Dropdown"
import { AProposData } from "../datas/AProposData"

function DropdownAPropos() {
  return (
    <section className="a-propos">
      <Dropdown
        dropdownLabel={AProposData[0].label}
        content={<p>{AProposData[0].content}</p>}
      />

      <Dropdown
        dropdownLabel={AProposData[1].label}
        content={<p>{AProposData[1].content}</p>}
      />

      <Dropdown
        dropdownLabel={AProposData[2].label}
        content={<p>{AProposData[2].content}</p>}
        c
      />

      <Dropdown
        dropdownLabel={AProposData[3].label}
        content={<p>{AProposData[3].content}</p>}
      />
    </section>
  )
}

export default DropdownAPropos
