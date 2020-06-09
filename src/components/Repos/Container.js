import React from "react"
import PropTypes from "prop-types"

function Container({ children }) {
  return <div style={styles}>{children}</div>
}
const styles = {
  maxWidth: 800,
  margin: "60px auto",
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
