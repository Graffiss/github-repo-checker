// import AppFunctionComponent from "@appnroll/app-function-component"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Repositories from "../components/base/repositories/repositories.component"
import { parseData } from "../parser/dataParser"

/* interface Props {
  readonly data: {
    readonly placeholderImage: {
      readonly childImageSharp: {
        readonly fluid: FluidObject
      }
    }
  }
} */

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Repositories data={parseData(data)} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    githubData {
      data {
        organization {
          repositories {
            nodes {
              description
              forkCount
              languages {
                nodes {
                  color
                  name
                }
              }
              name
              stargazers {
                totalCount
              }
              url
            }
          }
        }
      }
      id
    }
  }
`
