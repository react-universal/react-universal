import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Showcase = ({ children }) => {
  return (
    <Section title={"Showcase"} id="showcase">
      {children}
    </Section>
  )
}

Showcase.propTypes = {
  children: PropTypes.array,
}

export default Showcase
