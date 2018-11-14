import React from 'react'
import { Link } from 'gatsby'
import { Box, Typography, styled } from '@smooth-ui/core-sc'

const MenuContainer = styled(Box)`
  a {
    color: white;
    text-decoration: none;
  }

  a + a {
    margin-left: 20px;
  }
`

const Header = ({ siteTitle }) => (
  <Box
    backgroundColor="#bd4932"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justify-content="space-around"
    p={20}
  >
    <Typography variant="h1" margin={0}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </Typography>
    <MenuContainer>
      <Link to="/playground" activeStyle={{ textDecoration: 'underline' }}>
        Playground
      </Link>
      <Link to="/" activeStyle={{ textDecoration: 'underline' }}>
        About
      </Link>
      <Link to="/documentation" activeStyle={{ textDecoration: 'underline' }}>
        Docs
      </Link>
      <a
        href="https://github.com/smooth-code/svgr"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </MenuContainer>
  </Box>
)

export default Header
