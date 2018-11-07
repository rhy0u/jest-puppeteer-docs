import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Box } from '@smooth-ui/core-sc'
import ExternalLink from 'components/ExternalLink'
import BaseLayout from 'components/layouts/BaseLayout'

const IndexPage = ({ data }) => (
  <BaseLayout>
    <Box maxWidth={300} m="auto" pb={20}>
      <Img
        fluid={data.smoothUI.childImageSharp.fluid}
        style={{ margin: 'auto' }}
      />
    </Box>
    <Box>
      Smooth UI is a style system / UI library for{' '}
      <ExternalLink href="https://reactjs.org/">React</ExternalLink>. It works
      with{' '}
      <ExternalLink href="https://www.styled-components.com/">
        Styled Components
      </ExternalLink>{' '}
      <span role="img" aria-label="styled-components">
        💅
      </span>{' '}
      or <ExternalLink href="https://emotion.sh/">Emotion</ExternalLink>{' '}
      <span role="img" aria-label="emotion">
        👩‍🎤
      </span>
      .<br />
    </Box>

    <Box>
      It is focused on developer experience, productivity. You can focus on what
      you want to build instead of on how to build it.
    </Box>
  </BaseLayout>
)

export const query = graphql`
  query {
    smoothUI: file(relativePath: { eq: "smooth-ui-logo.png" }) {
      ...optimizedPicture
    }
  }
`

export default IndexPage
