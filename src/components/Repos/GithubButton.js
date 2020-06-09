import React from "react"
import PropTypes from "prop-types"

const GithubButton = ({ href }) => {
  if (!href) return null
  return (
    <div>
      <a href={github} className="Home__btn--secondary">
        Github
      </a>
    </div>
  )
}

GithubButton.propTypes = {
  href: PropTypes.string,
}

export default GithubButton
