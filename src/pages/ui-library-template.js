import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHead from "../components/Repos/PageHead"
import Container from "../components/Repos/Container"

const IndexPage = () => (
  <Fragment>
    <Layout>
      <SEO title="UI Library Template" />
      <Container>
        <PageHead
          title="UI Template Library"
          description="A template for developing universal (web, iOS, android, desktop) React Native UI components."
          github={"https://github.com/react-universal/ui-library-template"}
        />
      </Container>
    </Layout>
  </Fragment>
)

export default IndexPage
