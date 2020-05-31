import React from "react"

export default function SocialIcon({ link, icon, style, className }) {
  return (
    <a href={link} className={`socialIcon ${className}`} style={style}>
      {React.cloneElement(icon, {
        size: 20,
      })}
    </a>
  )
}
