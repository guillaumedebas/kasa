import dropdownHandle from "../assets/dropdown-handle.svg"
import "../styles/Dropdown.scss"
import { useState } from "react"
import PropTypes from "prop-types"

/**
 * Dropdown component.
 *
 * Props:
 * - dropdownLabel: the label text for the dropdown.
 * - content: the content to display when the dropdown is open.
 */

function Dropdown({ dropdownLabel, content }) {
  const [classNameSuffixValue, modifyClassNameSuffixValue] = useState("")
  const [isOpen, modifyOpen] = useState(false)
  const display = (
    <div className={`dropdown__hidden-box${classNameSuffixValue}`}>
      {content}
    </div>
  )

  /**
   * Function to control rotation of the handle
   * and to toggle the open/closed state of the dropdown.
   */

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
Dropdown.propTypes = {
  dropdownLabel: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired 
};

export default Dropdown
