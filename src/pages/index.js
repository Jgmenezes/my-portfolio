import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Home from "../components/Home/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
