/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { ReactChild } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import theme from "../theming/theme"
import Header from "./base/header/header.component"
import GlobalStyle from "./global-style.component"

const ContentWrapper = styled.div`
  min-height: 80vh;
  width: 60vw;
  margin: 0 auto;

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    margin: 0 20px;
    width: 90vw;
  }
`

const Layout = ({ children }: { children: ReactChild | ReactChild[] }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
    </ThemeProvider>
  )
}

export default Layout
