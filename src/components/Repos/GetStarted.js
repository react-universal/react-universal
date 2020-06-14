import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const GetStarted = ({ children, description, href }) => {
  return (
    <Section title={"Get Started"} id="get-started" href={href}>
      {description ? <p>{description}</p> : null}
      {children}
    </Section>
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
