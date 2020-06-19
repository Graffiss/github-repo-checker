// import AppFunctionComponent from "@appnroll/app-function-component"
import { graphql } from "gatsby"
import React, { useState } from "react"
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

const IndexPage = ({ data }) => {
  const [q, setQ] = useState("org:Appnroll language:javascript")

  return (
    <Layout>
      <SEO title="Home" />
      <Repositories data={parseData(data)} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    githubData {
      data {
        search {
          edges {
            node {
              name
              description
              stargazers {
                totalCount
              }
              primaryLanguage {
                name
                color
              }
              id
              issues {
                totalCount
              }
              url
              watchers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
