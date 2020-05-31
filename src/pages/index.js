import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/pages/home.css"
import HomeButtons from "../components/Home/HomeButtons"

const IndexPage = () => (
  <Fragment>
    <div className="home__background">
      <Layout>
        <SEO title="Home" />
        <div className="Home__hero">
          <div className="Home__content">
            <div>
              <h1 className="Home__title">UI That Scales</h1>
              <p className="Home__subtitle">
                Ecosystem of <strong>libraries</strong>,{" "}
                <strong>components</strong>, and <strong>tools</strong> for
                building consistent user interfaces with React on all platforms.
              </p>
            </div>
          </div>
          <div className="Home__graphics">
            <div className="Home__circle"></div>
            <div className="Home__graphicText">
              <h5>Design Tokens</h5>
              <h5>Theme Spec</h5>
              <h5>Primitives</h5>
              <h5>Atomic Design</h5>
              <h5>Headless Components</h5>
              <h5>Cross-Platform</h5>
              <h5>UI Libraries</h5>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  </Fragment>
)

export default IndexPage
