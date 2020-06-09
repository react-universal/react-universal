import React from "react"
import PropTypes from "prop-types"
import "./Drawer.css"

export default function MenuButton({ toggleisOpen, isOpen }) {
  const isActive = isOpen ? "is-active" : ""
  return (
    <button
      className={`MenuButton hamburger hamburger--elastic ${isActive}`}
      type="button"
      onClick={toggleisOpen}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}

MenuButton.propTypes = {
  toggleisOpen: PropTypes.func,
  isOpen: PropTypes.bool,
}
