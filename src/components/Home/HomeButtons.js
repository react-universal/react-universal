import React from "react"

export default function HomeButtons({ link, icon, style }) {
  return (
    <div className={"Home__butons"}>
      {/* <a
        href="https://github.com/react-universal"
        className="Home__btn--primary "
      >
        Get Started
      </a> */}
      <a
        href="https://github.com/react-universal"
        className="Home__btn--secondary"
      >
        Github
      </a>
    </div>
  )
}
