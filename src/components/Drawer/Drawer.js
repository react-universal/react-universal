import React, { useRef } from "react"
import PropTypes from "prop-types"

import "./Drawer.css"
import DrawerLink from "./DrawerLink"
import SocialLinks from "../Header/SocialLinks"
import useClickOutside from "@utils/useClickOutside"

export default function Drawer({ isOpen, onClose }) {
  const clickRef = useRef()
  useClickOutside(clickRef, onClose)

  return (
    <div className={`Drawer ${isOpen ? "Drawer--open" : ""}`} ref={clickRef}>
      <div className="Drawer__links">
        <DrawerLink to={`/`} title={"Home"} />
        <DrawerLink to={`/ui-library-template`} title={"Library Template"} />
      </div>
      <div className="Drawer__SocialLinks">
        <SocialLinks />
      </div>
    </div>
  )
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}
