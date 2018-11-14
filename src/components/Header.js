import React from 'react'
// import { Link } from 'gatsby'
import Link from 'components/Link'
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

const Header = ({ siteTitle, menu }) => (
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
      {menu.map((menuItem, index) => (
        <Link
          to={menuItem.link}
          key={index}
          activeStyle={{ textDecoration: 'underline' }}
        >
          {menuItem.name}
        </Link>
      ))}
    </MenuContainer>
  </Box>
)

export default Header
