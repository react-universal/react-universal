import React from "react"
import PropTypes from "prop-types"

const Command = ({ title, description }) => {
  return (
    <div>
      <h4>
        <code>{title}</code>
      </h4>
      <p>{description}</p>
    </div>
  )
}

Command.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
}

export default Command
