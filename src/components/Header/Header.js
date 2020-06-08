import PropTypes from "prop-types"
import React from "react"

import { FaTwitter, FaGithub } from "react-icons/fa"
import "./Header.css"
import Logo from "../Logo/Logo"
import SocialIcon from "../SocialIcon"
import DarkModeToggle from "./DarkModeToggle"

const Header = ({ siteTitle }) => (
  <header className={"Header"}>
    <div className={"Header__inner"}>
      <Logo />
      <div className="Header__social">
        <DarkModeToggle />
        <SocialIcon
          link={"https://twitter.com/react_universal"}
          icon={<FaTwitter />}
          className={"Header__twitter"}
        />
        <SocialIcon
          link={"https://github.com/react-universal"}
          icon={<FaGithub />}
        />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
