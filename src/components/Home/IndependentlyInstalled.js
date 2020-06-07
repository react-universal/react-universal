import React from "react"

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
          <pre>
            <code>{`import { Touchable, Grid, Row, Circle} from ‘@reactuniversal/primitives’;`}</code>
          </pre>
        </div>
        <div className="IndependentInstalled__row ">
          <span></span>
          <div>
            <Arrow className="IndependentlyInstalled__arrow" />
          </div>
        </div>

        <div className="IndependentInstalled__row">
          <h4>Sub Libraries</h4>
          <pre>
            <code>{`import { Grid, Row } from ‘@reactuniversal/space’;
import { Circle } from ‘@reactuniversal/particles’;`}</code>
          </pre>
        </div>
        <div className="IndependentInstalled__row ">
          <span></span>
          <div>
            <Arrow className="IndependentlyInstalled__arrow" />
          </div>
        </div>
        <div className="IndependentInstalled__row">
          <h4>Individual Components</h4>
          <pre>
            <code>{`import Row from ‘@reactuniversal/row’;
import Circle from ‘@reactuniversal/circle’;`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default IndependentlyInstalled
