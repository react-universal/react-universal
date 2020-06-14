import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Docs = ({ children, href }) => {
  return (
    <Section title={"Documentation"} id="documentation" href={href}>
      {children}
    </Section>
  )
}

Docs.propTypes = {
  children: PropTypes.array,
}

export default Docs
