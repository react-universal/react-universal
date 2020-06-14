import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

function HeaderLink({ to, text }) {
  return (
    <Link to={to} className="HeaderLink">
      {text}
    </Link>
  )
}

HeaderLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}

export default HeaderLink
