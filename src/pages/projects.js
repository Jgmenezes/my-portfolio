import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects/projects";

const SecondPage = () => (
  <Layout>
      <SEO title="Project" />
      <Projects />
  </Layout>
)

export default SecondPage
