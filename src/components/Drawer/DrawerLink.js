import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

export default function DrawerLink({ to, title }) {
  return (
    <Link to={to} className="DrawerLink">
      {title}
    </Link>
  )
}

DrawerLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
}
