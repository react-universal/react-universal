import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHead from "../components/Repos/PageHead"
import Container from "../components/Repos/Container"
import Features from "../components/Repos/Features"

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
        <Features
          list={[
            "Develop cross-platform components for iOS, Android, Web, Windows, Macos, and Electron with React Native",
            "Cross-platform storybook environment with useful addons",
            "Publish storybook environment to Github pages with a single command",
            "Publish and version each component independently using a single command with Lerna",
            "Typescript Support",
            "Accessibility checks with ay11 addon",
            "Unit testing with Jest and React test renderer",
            "Visual Regression Tests with Loki",
            "Continuous Integration with Circle CI",
            "Maintainability scores with CodeClimate",
            "Eslint and Prettier Config",
            "Git hooks with Husky",
          ]}
        />
      </Container>
    </Layout>
  </Fragment>
)

export default IndexPage
