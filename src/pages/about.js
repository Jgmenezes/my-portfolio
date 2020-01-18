import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import About from "../components/About/about";

const SecondPage = () => (
  <Layout>
      <SEO title="About" />
      <About />
  </Layout>
)

export default SecondPage
