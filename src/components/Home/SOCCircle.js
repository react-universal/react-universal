import React from "React"

function SOCCircle({ title, hover }) {
  return (
    <div className="SystemOfComponents__circle">
      <h4 className="SystemOfComponents__circle__title">{title}</h4>
      <div className="SystemOfComponents__hover">{hover}</div>
    </div>
  )
}

export default SOCCircle
