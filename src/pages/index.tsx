// import AppFunctionComponent from "@appnroll/app-function-component"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Repositories from "../components/base/repositories/repositories.component"
import GlobalState from "../context/GlobalState"
import { parseData } from "../helpers/dataParser"

/* interface Props {
  readonly data: {
    readonly placeholderImage: {
      readonly childImageSharp: {
        readonly fluid: FluidObject
      }
    }
  }
} */

const IndexPage = () => {
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
