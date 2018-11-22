import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ pageContext }) => (
  <Helmet>
    <title>{pageContext.frontmatter.title} - SVGR</title>
  </Helmet>
)

export default Head
