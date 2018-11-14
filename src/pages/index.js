import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Box } from '@smooth-ui/core-sc'
import ExternalLink from 'components/ExternalLink'

const IndexPage = ({ data }) => (
  <Box textAlign="center">
    <Box maxWidth={300} m="auto" pb={30}>
      <Img
        fluid={data.smoothUI.childImageSharp.fluid}
        style={{ margin: 'auto' }}
      />
    </Box>
    <Box>
      Transform SVGs into React components
      <span role="img" aria-label="logo-svgr">
        🦁
      </span>
    </Box>
    <Box>
      <ExternalLink
        href="https://www.youtube.com/watch?v=geKCzi7ZPkA"
        target="_blank"
      >
        Watch the talk at React Europe
      </ExternalLink>
    </Box>
  </Box>
)

export const query = graphql`
  query {
    smoothUI: file(relativePath: { eq: "svgr-logo.png" }) {
      ...optimizedPicture
    }
  }
`

export default IndexPage
