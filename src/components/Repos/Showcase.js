import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Showcase = ({ children, href }) => {
  return (
    <Section title={"Showcase"} id="showcase" href={href}>
      {children}
    </Section>
  )
}

Showcase.propTypes = {
  children: PropTypes.array,
}

export default Showcase
