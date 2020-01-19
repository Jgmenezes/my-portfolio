/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components";

import Navigation from "../Navigation/navigation";
import GlobalStyles from "../../styles/global";
import theme from "../../styles/theme";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navigation />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
