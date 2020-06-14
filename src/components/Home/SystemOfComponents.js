import React from "react"

import SOCCircle from "./SOCCircle"
import Arrow from "./Arrow"

function SystemOfComponents() {
  return (
    <div className="SystemOfComponents">
      <h2 className="SystemOfComponents__title">Hierarchy Of Components</h2>
      <div className="SystemOfComponents__row">
        <SOCCircle
          title={"Primitives"}
          hover={
            <div className="SOC__primitives">
              <div className="SOC__primitives__top">Forces</div>

              <div className="SOC__primitives__middle">
                <span>Matter</span>
                <span>Particles</span>
              </div>

              <div className="SOC__primitives__bottom">Space</div>
            </div>
          }
        />
        <Arrow className="SOC__arrow" />
        <SOCCircle
          title={"Atomic Design"}
          hover={
            <div className="SOC__primitives SOC__primitives--atomic">
              <div className="SOC__primitives__top">Atoms</div>

              <div className="SOC__primitives__middle">
                <span>Molecules</span>
                <span>Organisms</span>
              </div>

              <div className="SOC__primitives__bottom">Components</div>
            </div>
          }
        />
        <Arrow className="SOC__arrow" />
        <SOCCircle
          title={"Headless API"}
          hover={
            <div className="SOC__primitives SOC__primitives--headless">
              <div className="SOC__primitives__top">TextField</div>

              <div className="SOC__primitives__middle">
                <span>Button</span>
                <span>Dropdown</span>
              </div>

              <div className="SOC__primitives__bottom">Table</div>
            </div>
          }
        />
        <Arrow className="SOC__arrow" />
        <SOCCircle
          title={"UI Libraries"}
          hover={
            <div className="SOC__primitives SOC__primitives--ui">
              <div className="SOC__primitives__top">{`<TextField>`}</div>

              <div className="SOC__primitives__middle">
                <span className="SOC__primitives__small">{`<Button>`}</span>
                <span className="SOC__primitives__smallest">{`<Dropdown>`}</span>
              </div>

              <div className="SOC__primitives__bottom">{`<Table>`}</div>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default SystemOfComponents
