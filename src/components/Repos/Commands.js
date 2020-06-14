import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Commands = ({ children, href }) => {
  return (
    <Section title={"Commands"} id="commands" href={href}>
      {children}
    </Section>
  )
}

Commands.propTypes = {
  children: PropTypes.array,
  href: PropTypes.string,
}

export default Commands
