import React from "react"
import PropTypes from "prop-types"

function Section({ children, id, title }) {
  return (
    <section id={id} style={styles.container}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

const styles = {
  container: {
    marginTop: 60,
  },
}

Section.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string,
}

export default Section
