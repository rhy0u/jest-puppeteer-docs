import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ pageContext }) => (
  <Helmet>
    <title>{pageContext.frontmatter.title} - Jest-Puppeteer</title>
  </Helmet>
)

export default Head
