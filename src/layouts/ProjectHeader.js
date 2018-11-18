import React from 'react'
import { Box, styled } from '@smooth-ui/core-em'
import svgrLogo from 'images/svgr-logo.png'
import githubLogo from 'images/GitHub-Mark-32px.png'
import Link from 'components/Link'

const BoxLink = props => <Box as={Link} color="gray800" ml={2} {...props} />
const StyledLink = styled(BoxLink)`
  text-decoration: none;
`

const ProjectHeader = () => (
  <Box
    py={1}
    px={2}
    backgroundColor="gray100"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
    <Box display="flex" alignItems="center">
      <Box as="img" src={svgrLogo} alt="" width={32} height={32} m={0} mr={2} />
      <Box fontSize={32}>SVGR</Box>
    </Box>
    <Box display="flex" alignItems="center">
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/documentation/gettingStarted">Documentation</StyledLink>
      <StyledLink to="/playground">Playground</StyledLink>
      <StyledLink to="https://github.com/smooth-code/svgr">
        <Box as="img" src={githubLogo} m={0} />
      </StyledLink>
    </Box>
  </Box>
)

export default ProjectHeader
