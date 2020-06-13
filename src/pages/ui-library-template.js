import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHead from "../components/Repos/PageHead"
import Container from "../components/Repos/Container"
import Features from "../components/Repos/Features"
import GetStarted from "../components/Repos/GetStarted"

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
        <GetStarted>
          <ol style={styles.list}>
            <li>Click "Use this Template" and create a new repo</li>
            <li>
              Run <code>npm i</code> to install the dependencies
            </li>
            <li>
              Start the storybook web environment: <code>npm run web</code>
            </li>
            <li>
              Start a native storybook environment: <code>npm run ios</code> or{" "}
              <code>npm run android</code>
            </li>
            <li>Start creating components</li>
          </ol>
          <p>Optional</p>
          <ol style={styles.list}>
            <li>
              Update fields in Package.json to match your project (name, author,
              version, etc)
            </li>
            <li>
              Update <code>storybook/stories/Home.stories.tsx</code>text to
              match the name of your project
            </li>
            <li>Update Readme for your project</li>
          </ol>
        </GetStarted>
      </Container>
    </Layout>
  </Fragment>
)

const styles = {
  list: {
    marginLeft: 16,
  },
}

export default IndexPage
