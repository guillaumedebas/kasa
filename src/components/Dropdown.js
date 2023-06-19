import dropdownHandle from "../assets/dropdown-handle.svg"
import "../styles/Dropdown.scss"
import { useState } from "react"

function Dropdown({ dropdownLabel, content }) {
  const [classNameSuffixValue, modifyClassNameSuffixValue] = useState("")
  const [isOpen, modifyOpen] = useState(false)
  const display = (
    <div className={`dropdown__hidden-box${classNameSuffixValue}`}>
      {content}
    </div>
  )

  function dropdownRotate() {
    if (classNameSuffixValue === "") {
      modifyOpen(true)
      setTimeout(() => {
        modifyClassNameSuffixValue("--open")
      }, 601)
    } else {
      modifyClassNameSuffixValue("")
      setTimeout(() => {
        modifyOpen(false)
      }, 601)
    }
  }

  return (
    <div className="dropdown">
      <div className={`dropdown__background${classNameSuffixValue}`}>
        <div className="dropdown__title">
          <p className="dropdown__title__label">{dropdownLabel}</p>
          <img
            src={dropdownHandle}
            onClick={dropdownRotate}
            alt="dropdown-handle"
            className={`dropdown__title__handle${classNameSuffixValue}`}
          />
        </div>
        {isOpen && display}
      </div>
    </div>
  )
}

export default Dropdown
