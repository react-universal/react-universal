import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/pages/home.css"
import Hero from "../components/Home/Hero.js"

const IndexPage = () => (
  <Fragment>
    <div className="home__background">
      <Layout>
        <SEO title="Home" />
        <Hero />
      </Layout>
    </div>
  </Fragment>
)

export default IndexPage
