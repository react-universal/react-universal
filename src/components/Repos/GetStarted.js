import React from "react"
import PropTypes from "prop-types"

const GetStarted = ({ children, description }) => {
  return (
    <div>
      <h2>Get Started</h2>
      {description ? <p>{description}</p> : null}
      {children}
    </div>
  )
}

const styles = {
  list: {
    marginLeft: 16,
  },
}

GetStarted.propTypes = {
  children: PropTypes.array,
}

export default GetStarted
