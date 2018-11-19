import React from 'react'
import { Box } from '@smooth-ui/core-sc'
import { Link } from 'gatsby'

import { withNav } from '../NavContext'
import StyledMenu from './StyledMenu'
import StyledSubmenu from './StyledSubmenu'

const ItemWithSubmenu = ({ menu, subMenus, activePage }) => (
  <Box>
    <Box>
      <StyledMenu isActive={activePage && activePage.menu === menu}>
        {menu}
      </StyledMenu>
    </Box>
    {subMenus.map((page, index) => (
      <Box key={index} pl={2}>
        <StyledSubmenu
          as={Link}
          to={page.path}
          isActive={
            activePage &&
            activePage.menu === page.menu &&
            activePage.subMenu === page.subMenu
          }
        >
          {page.subMenu}
        </StyledSubmenu>
      </Box>
    ))}
  </Box>
)

export default withNav(ItemWithSubmenu)
