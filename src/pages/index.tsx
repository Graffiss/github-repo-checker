// import AppFunctionComponent from "@appnroll/app-function-component"
import React from "react"
import Layout from "../components/layout"
import Repositories from "../components/base/repositories/repositories.component"
import GlobalState from "../context/GlobalState"

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
        <Repositories />
      </Layout>
    </GlobalState>
  )
}

export default IndexPage
