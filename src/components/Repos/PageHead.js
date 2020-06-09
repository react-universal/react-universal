import React from "react"
import PropTypes from "prop-types"
import GithubButton from "./GithubButton"

function PageHead({ title, description, github }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <GithubButton github={github} />
    </header>
  )
}

PageHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
}

export default PageHead
