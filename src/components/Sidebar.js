import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const MDX_QUERY = graphql`
  query MDX {
    mdx {
      tableOfContents
    }
  }
`

const Sidebar = () => (
  <StaticQuery
    query={MDX_QUERY}
    render={data => {
      // console.log(data)
      return null
    }}
  />
)

export default Sidebar
