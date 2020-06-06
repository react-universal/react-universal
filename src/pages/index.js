import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/pages/home.css"
import Hero from "../components/Home/Hero.js"
import Divider from "../components/Divider"
import SystemOfComponents from "../components/Home/SystemOfComponents"
import CrossPlatform from "../components/Home/CrossPlatform"

const IndexPage = () => (
  <Fragment>
    <div className="home__background">
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Divider />
        <SystemOfComponents />
        <Divider />
        <CrossPlatform />
        <Divider />
      </Layout>
    </div>
  </Fragment>
)

export default IndexPage
