import React from "react"
import { Link } from "gatsby"

function HeaderLink({ to, text }) {
  return (
    <Link to={to} className="HeaderLink">
      {text}
    </Link>
  )
}

export default HeaderLink
