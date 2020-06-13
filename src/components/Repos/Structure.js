import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Structure = ({ children }) => {
  return (
    <Section title={"Structure"} id="structure">
      {children}
    </Section>
  )
}

Structure.propTypes = {
  children: PropTypes.array,
}

export default Structure
