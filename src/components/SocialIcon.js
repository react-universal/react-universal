import React from "react"
import PropTypes from "prop-types"

export default function SocialIcon({ link, icon, style, className }) {
  return (
    <a href={link} className={`socialIcon ${className}`} style={style}>
      {React.cloneElement(icon, {
        size: 20,
      })}
    </a>
  )
}

SocialIcon.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.node,
  style: PropTypes.array,
  className: PropTypes.string,
}
