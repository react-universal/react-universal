import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Commands = ({ children }) => {
  return (
    <Section title={"Commands"} id="sommands">
      {children}
    </Section>
  )
}

Commands.propTypes = {
  children: PropTypes.array,
}

export default Commands
