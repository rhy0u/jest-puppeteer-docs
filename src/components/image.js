import { graphql } from 'gatsby'

export const optimizedPicture = graphql`
  fragment optimizedPicture on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
