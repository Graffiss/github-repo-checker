// import AppFunctionComponent from "@appnroll/app-function-component"
import { graphql } from "gatsby"
import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Repositories from "../components/base/repositories/repositories.component"
import GlobalState from "../context/GlobalState"
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
  return (
    <GlobalState>
      <Layout>
        <SEO title="Home" />
        <Repositories />
      </Layout>
    </GlobalState>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allGithubData {
      edges {
        node {
          data {
            organization {
              avatarUrl
              description
              location
              name
              websiteUrl
            }
          }
        }
      }
    }
  }
`
