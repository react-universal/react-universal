import React from "react"
import logo from "../../images/react-universal.svg"
import { Link } from "gatsby"
import "./Logo.css"

export default function Logo() {
  return (
    <Link to="/" className="Logo__link">
      <img src={logo} className="Logo__img" alt="React Universal Logo" />
      <div className="Logo__text">
        <span>REACT</span>
        <span className="Logo__universal">UNIVERSAL</span>
      </div>
    </Link>
  )
}
