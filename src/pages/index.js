import React from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"

import Hero from "@components/Home/Hero.js"
import Divider from "@components/Divider"
import SystemOfComponents from "@components/Home/SystemOfComponents"
// import CrossPlatform from "@components/Home/CrossPlatform"
// import IndependentlyInstalled from "@components/Home/IndependentlyInstalled"
// import Footer from "@components/Home/Footer"
import "../styles/pages/home.css"
import loadable from "@loadable/component"

const LazyDivider = loadable(() => import("@components/Divider"))
const CrossPlatform = loadable(() => import("@components/Home/CrossPlatform"))

const IndependentlyInstalled = loadable(() =>
  import("@components/Home/IndependentlyInstalled")
)
const FooterCTA = loadable(() => import("@components/Home/FooterCTA"))
const Footer = loadable(() => import("@components/Home/Footer"))

const IndexPage = () => (
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
    <FooterCTA />
    <LazyDivider />
    <Footer />
  </Layout>
)

export default IndexPage
