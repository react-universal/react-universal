import React from "react"
import "./IndependentlyInstalled.css"
import Arrow from "./Arrow"

function IndependentlyInstalled() {
  return (
    <div className="IndependentlyInstalled">
      <div className="IndependentlyInstalled__text">
        <h3>Install only what you want</h3>
        <p>Components can be installed individually or in groups.</p>
      </div>
      <div className="IndependentInstalled__media">
        <div className="IndependentInstalled__row">
          <h4>Library</h4>
          <div>
            <code>{`import { Touchable, Grid, Row, Circle} from ‘@reactuniversal/primitives’;`}</code>
          </div>
        </div>
        <div className="IndependentInstalled__row ">
          <span></span>
          <div>
            <Arrow className="IndependentlyInstalled__arrow" />
          </div>
        </div>

        <div className="IndependentInstalled__row">
          <h4>Sub Libraries</h4>
          <div>
            <code>{`import { Grid, Row } from ‘@reactuniversal/space’;
import { Circle } from ‘@reactuniversal/particles’;`}</code>
          </div>
        </div>
        <div className="IndependentInstalled__row ">
          <span></span>
          <div>
            <Arrow className="IndependentlyInstalled__arrow" />
          </div>
        </div>
        <div className="IndependentInstalled__row">
          <h4>Indiviual Components</h4>
          <div>
            <code>{`import Row from ‘@reactuniversal/row’;
import Circle from ‘@reactuniversal/circle’;`}</code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndependentlyInstalled
