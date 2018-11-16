import React from 'react'
import { Box } from '@smooth-ui/core-em'
import { Link } from 'gatsby'

import { withNav } from './NavContext'

const Sidebar = ({ pages, activePage }) => (
  <Box>
    {pages.map(page => (
      <Box backgroundColor={page === activePage ? 'blue' : 'yellow'}>
        <Link to={page.path}>
          {page.menu} {page.subMenu}
        </Link>
      </Box>
    ))}
  </Box>
)

export default withNav(Sidebar)
