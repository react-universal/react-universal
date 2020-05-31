import PropTypes from "prop-types"
import React from "react"

import { FaTwitter, FaGithub } from "react-icons/fa"
import "./Header.css"
import Logo from "../Logo/Logo"
import SocialIcon from "../SocialIcon"

const Header = ({ siteTitle }) => (
  <header className={"Header"}>
    <div className={"Header__inner"}>
      <Logo />
      <div className="Header__social">
        <SocialIcon
          link={"https://twitter.com/codyapearce"}
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
