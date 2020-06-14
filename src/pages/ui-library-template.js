/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"
import PageHead from "@components/Repos/PageHead"
import Container from "@components/Repos/Container"
import Features from "@components/Repos/Features"
import GetStarted from "@components/Repos/GetStarted"
import Docs from "@components/Repos/Docs"
import Structure from "@components/Repos/Structure"
import Commands from "@components/Repos/Commands"
import Command from "@components/Repos/Command"
import Showcase from "@components/Repos/Showcase"

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
          href={"ui-library-template#features"}
        />
        <GetStarted href={"ui-library-template#get-started"}>
          <ol style={styles.list}>
            <li>Click {"Use this Template"} and create a new repo</li>
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
              Update <code>storybook/stories/Home.stories.tsx</code> text to
              match the name of your project
            </li>
            <li>Update Readme for your project</li>
          </ol>
        </GetStarted>
        <Docs href={"ui-library-template#documentation"}>
          <h4>Developing Components</h4>
          <p>
            Each component should have it's own folder under the{" "}
            <code>packages</code> folder, with it's own{" "}
            <code>package.json</code>. This allows you to publish and make
            available each component seperately. Though you can structure the
            packages and components however you want, but you'll need to update
            the lerna configuration depending on your structure.
          </p>
          <p>
            An example component is provided in <code>packages/example</code>.
            The storybook config looks for stories that have this extension:{" "}
            <code>stories.tsx.</code>. The tests look for stories with{" "}
            <code>.test.tsx</code> extension. Where you put these files doesn't
            really matter, but I find putting them right next to the component
            makes it easier.
          </p>
          <pre>
            <code>
              {`// packages/example/lib 
Example.stories.tsx 
Example.test.tsx
Example.tsx`}
            </code>
          </pre>
          <p>
            When I want to create a new component I usually use the{" "}
            <code>lerna create [name]</code> commmand, but this is not
            necessary, you can just create a new folder,{" "}
            <code>package.json</code>, and the required component files.
          </p>
          <h4>Publishing Your Components</h4>
          <p>
            Lerna makes this incredibly easy, just run{" "}
            <code>lerna publish </code> and all packages with updates will be
            published. Lerna provides a lot of options here however, checkout
            the{" "}
            <a href="https://github.com/lerna/lerna/tree/master/commands/publish#readme">
              docs on publishing{" "}
            </a>
            to learn more.
          </p>
          <h4>Publishing Your Storybook with Github Pages</h4>
          <p>
            You can publish the storybook web environment using the following
            command:
            <pre>
              <code>npm run run deploy-docs</code>
            </pre>
            This will bundle the storybook web project, create a separate branch
            gh, push the bundle to that branch, and make it available on github
            pages at a url like this:
            <pre>
              <code>https://react-universal.github.io/[package] </code>
            </pre>
            For example, the template ui library storybook is published here:{" "}
            <a href="https://react-universal.github.io/ui-library-template/">
              https://react-universal.github.io/ui-library-template/
            </a>
          </p>
          <h4>Independently Versioned Packages</h4>
          <p>
            The config for lerna is found in the <code>lerna.json</code> file at
            the project root. Currently, version is set to independent, which
            means that each package/component you add will be versioned
            independently of each other. If you want all packages to share the
            same version then change version to the semantic version you want,
            for example,
            <code>version: 1.1.3</code>. Check out the Lerna documentation to
            learn more about configuring Lerna.
          </p>
          <h4>Visual Regression Tests</h4>
          <p>
            For visual regression tests, we need to generate a starting
            reference image for how the component should look. We can do this
            initially by running the <code>test:loki-update</code> command,
            which will automatically create images for each story on chrome for
            three different sizes: <code>1366</code>, <code>iPhone7</code>, and{" "}
            <code>A4 paper</code>. You can customize Loki settings in the{" "}
            <code>package.json</code>.
          </p>

          <p>
            Once you have reference images, you can run the command{" "}
            <code>test:loki</code> to run visual regression tests. If
            differences are found, the current image will placed in
            <code>.loki/current</code> and the difference image in{" "}
            <code>.loki/difference</code>.
          </p>
          <h4>Stroybook style helper components</h4>
          <p>
            By default storybook adds the components directly in the top left
            without any styles. However, usually it looks better (though not
            always) to add some more spacing and title. Two helper components
            are provided for this: <code>Container</code> and{" "}
            <code>Header</code>.
          </p>
          <p>
            Another problem with default storybook styling is that the storybook
            environment (where the components actually are) is not wrapped in a{" "}
            <code>ScrollView</code>, which in React Native means the screen will
            not scroll if the content extends past the bottom. The
            <code>Container</code> component, therefore, also wraps the
            environment and allows you to scroll down on iOS and Android if your
            components grow larger than the screen.
          </p>
        </Docs>
        <Structure href={"ui-library-template#structure"}>
          <h4>storybook</h4>
          <p>
            Folder contains configuration for React Native storybook and
            storybook in general.
          </p>

          <h4>.storybook</h4>
          <p>Folder contains configuration for React Web storybook</p>

          <h4>packages</h4>
          <p>
            Folder contains all of the individual package folders (Button,
            Utils, etc.)
          </p>

          <h4>packages/[Component]</h4>
          <p>
            Each seperated package has it's own <code>package.json</code>, and
            the <code>lib</code> folder.
          </p>

          <h4>packages/[Component]/lib</h4>
          <p>
            Lib folder for each package contains the src files for that package
            as well as the <code>.stories.</code> and <code>.test.</code> files.
          </p>
        </Structure>
        <Commands href={"ui-library-template#commands"}>
          <Command
            title={"npm run android"}
            description={<span>Runs storybook on Android</span>}
          />
          <Command
            title={"npm run ios"}
            description={<span>Runs storybook on iOS</span>}
          />
          <Command
            title={"npm run web"}
            description={
              <span>
                Runs storybook on the web, also opens a tab at{" "}
                <code>localhost:9000.</code>
              </span>
            }
          />
          <Command
            title={"npm run deploy-docs"}
            description={<span>Runs Builds and deploys storybook docs</span>}
          />
          <Command
            title={"npm run build-storybook"}
            description={
              <span>
                Builds the storybook web project into a bundle in the{" "}
                <code>public</code> folder.
              </span>
            }
          />
          <Command
            title={"npm run push-docs"}
            description={
              <span>
                Deploys the contents of the public folder, which should be the
                storybook web project.
              </span>
            }
          />
          <Command
            title={"npm run see-npm-package"}
            description={
              <span>
                This command shows the exact files that will be published if you
                run the command <code>npm publish</code>. Useful for double
                checking if you are including something you do not want to
                include. If something does need to be ignored, you can ignore it
                in the <code>.npmignore</code> file.
              </span>
            }
          />
          <Command
            title={"npm run test"}
            description={<span>Runs Jest tests</span>}
          />
          <Command
            title={"npm run test:generate-output"}
            description={
              <span>
                Generates <code>jest-test-results.json </code>which is used by
                the jest addon in Storybook to show the latest test results for
                that component.
              </span>
            }
          />
          <Command
            title={"npm run test:loki"}
            description={<span>Runs loki visual regression tests</span>}
          />
          <Command
            title={"npm run test:loki-update"}
            description={
              <span>
                Generates the initial reference images that will be diffed later
                on.
              </span>
            }
          />
          <Command
            title={"npm run lint"}
            description={<span>Runs eslint</span>}
          />
        </Commands>
        <Showcase href={"ui-library-template#showcase"}>
          <p>
            All React Universal UI components use this template. For example:
          </p>
          <p>Libraries</p>
          <ul style={styles.list}>
            <li>
              <a href="https://github.com/react-universal/space">
                React Universal Space
              </a>
            </li>
          </ul>
          <p>Components</p>
          <ul style={styles.list}>
            <li>
              <a href="https://github.com/react-universal/Button">
                React Universal Button
              </a>
            </li>
          </ul>
        </Showcase>
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
