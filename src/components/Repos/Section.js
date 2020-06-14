import React from "react"
import PropTypes from "prop-types"
import "./Section.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Section({ children, id, title, href }) {
  return (
    <section id={id} className="Section">
      <h2>
        <AnchorLink to={href} title={title} className="Section__title">
          <span className="Section__hash">#</span> {title}
        </AnchorLink>
      </h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
}

export default Section
