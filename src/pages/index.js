import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/Home/Hero.js"
import Divider from "../components/Divider"
import SystemOfComponents from "../components/Home/SystemOfComponents"
// import CrossPlatform from "../components/Home/CrossPlatform"
// import IndependentlyInstalled from "../components/Home/IndependentlyInstalled"
// import Footer from "../components/Home/Footer"
import "../styles/pages/home.css"
import loadable from "@loadable/component"

const LazyDivider = loadable(() => import("../components/Divider"))
const CrossPlatform = loadable(() => import("../components/Home/CrossPlatform"))

const IndependentlyInstalled = loadable(() =>
  import("../components/Home/IndependentlyInstalled")
)
const Footer = loadable(() => import("../components/Home/Footer"))

const IndexPage = () => (
  <Fragment>
    <div className="home__background">
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Divider />
        <SystemOfComponents />
        <LazyDivider />
        <CrossPlatform />
        <LazyDivider />
        <IndependentlyInstalled />
        <LazyDivider />
        <Footer />
      </Layout>
    </div>
  </Fragment>
)

export default IndexPage
