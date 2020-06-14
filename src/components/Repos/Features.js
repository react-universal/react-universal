import React from "react"
import PropTypes from "prop-types"
import Section from "./Section"

const Features = ({ list, href }) => {
  return (
    <Section title={"Features"} id="features" href={href}>
      <ul style={styles.list}>
        {list.map((item, index) => (
          <li key={index} style={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </Section>
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
  href: PropTypes.string,
}

export default Features
