import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Docs = ({ children }) => {
  return (
    <Section title={"Documentation"} id="documentation">
      {children}
    </Section>
  )
}

Docs.propTypes = {
  children: PropTypes.array,
}

export default Docs
