import React from "react"
import { FaTwitter, FaGithub } from "react-icons/fa"
import SocialIcon from "../SocialIcon"

export default function SocialLinks() {
  return (
    <>
      <SocialIcon
        link={"https://twitter.com/react_universal"}
        icon={<FaTwitter />}
        className={"Header__twitter"}
      />
      <SocialIcon
        link={"https://github.com/react-universal"}
        icon={<FaGithub />}
      />
    </>
  )
}
