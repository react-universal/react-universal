import PropTypes from "prop-types"
import React, { useState } from "react"

import { FaTwitter, FaGithub } from "react-icons/fa"
import "./Header.css"
import Logo from "../Logo/Logo"
import SocialIcon from "../SocialIcon"
import DarkModeToggle from "./DarkModeToggle"
import HeaderLink from "./HeaderLink"
import MenuButton from "../Drawer/MenuButton"
import Drawer from "../Drawer/Drawer"

const Header = ({ siteTitle }) => {
  const [isOpen, setisOpen] = useState(false)

  function toggleisOpen() {
    setisOpen(!isOpen)
  }

  function handleClickOutisde() {
    if (isOpen) setisOpen(false)
  }

  return (
    <>
      <header className={"Header"}>
        <div className={"Header__inner"}>
          <div className="Header__left">
            <Logo />
            <div className="Header__links">
              <HeaderLink
                to={"/ui-library-template"}
                text={"Library Template"}
              />
            </div>
          </div>

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
            <MenuButton toggleisOpen={toggleisOpen} isOpen={isOpen} />
          </div>
        </div>

        <Drawer isOpen={isOpen} onClose={handleClickOutisde} />
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
