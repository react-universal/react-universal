import React from "react"
import PropTypes from "prop-types"

function SOCCircle({ title, hover }) {
  return (
    <div className="SystemOfComponents__circle">
      <h4 className="SystemOfComponents__circle__title">{title}</h4>
      <div className="SystemOfComponents__hover">{hover}</div>
    </div>
  )
}

SOCCircle.propTypes = {
  title: PropTypes.string,
  hover: PropTypes.string,
}

export default SOCCircle
