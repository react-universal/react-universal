import React from "react"
import "./CrossPlatform.css"
import CrossPlatformSVG from "./CrossPlatformSVG"

function CrossPlatform() {
  return (
    <div className="CrossPlatform">
      <div className="CrossPlatform__text">
        <h3>Cross Platform by default</h3>
        <p>
          All primitives, atomic, headless, and ui components are built from
          React Native Primitives and therefore support all platforms.
        </p>
      </div>
      <div className="CrossPlatform__media">
        <CrossPlatformSVG />
      </div>
    </div>
  )
}

export default CrossPlatform
