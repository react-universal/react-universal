import React from "react"
import PropTypes from "prop-types"

const Features = ({ list }) => {
  return (
    <div>
      <h3>Features</h3>
      <ul style={styles.list}>
        {list.map((item, index) => (
          <li key={index} style={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  list: {
    marginLeft: 16,
  },
  item: {
    marginBottom: 0,
    fontSize: 15,
  },
}

Features.propTypes = {
  list: PropTypes.array,
}

export default Features
