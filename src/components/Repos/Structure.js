import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Structure = ({ children, href }) => {
  return (
    <Section title={"Structure"} id="structure" href={href}>
      {children}
    </Section>
  )
}

Structure.propTypes = {
  children: PropTypes.array,
  href: PropTypes.string,
}

export default Structure
