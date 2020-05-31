import React, { Fragment } from "React"
import "./SystemOfComponents.css"
import SOCCircle from "./SOCCircle"
import SOCAnimatedConnector from "./SOCAnimatedConnector"

function SystemOfComponents() {
  return (
    <div className="SystemOfComponents">
      <h2 className="SystemOfComponents__title">System Of Components</h2>
      <div className="SystemOfComponents__row">
        <SOCCircle
          title={"Primitives"}
          hover={
            <div className="SOC__primitives">
              <span>Forces</span>

              <span>Matter</span>
              <span>Particles</span>

              <span>Space</span>
            </div>
          }
        />
        <SOCAnimatedConnector />
        <SOCCircle
          title={"Atomic Design"}
          hover={
            <div className="SOC__primitives">
              <span>Atoms</span>

              <span>Molecules</span>
              <span>Organisms</span>

              <span>Components</span>
            </div>
          }
        />
        <SOCAnimatedConnector />
        <SOCCircle
          title={"Headless API"}
          hover={
            <div className="SOC__primitives">
              <span>TextField</span>

              <span>Button</span>
              <span>Dropdown</span>

              <span>Table</span>
            </div>
          }
        />
        <SOCAnimatedConnector />
        <SOCCircle
          title={"UI Libraries"}
          hover={
            <div className="SOC__primitives">
              <span>{`<\TextField\>`}</span>

              <span>{`<\Button\>`}</span>
              <span>{`<\Dropdown\>`}</span>

              <span>{`<\Table\>`}</span>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default SystemOfComponents
