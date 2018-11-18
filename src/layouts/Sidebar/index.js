import React from 'react'
import { Box } from '@smooth-ui/core-em'

import ItemWithSubmenu from './ItemWithSubmenu'
import ItemWithoutSubmenu from './ItemWithoutSubmenu'
import { withNav } from '../NavContext'

const Sidebar = ({ pages }) => {
  const menuItems = pages
    .map(page => page.menu)
    .filter((menuName, index, self) => self.indexOf(menuName) === index)
  return (
    <Box>
      {menuItems.map((menuItem, index) => {
        const ownPage = pages.find(
          page => page.menu === menuItem && !page.subMenu
        )
        const subMenus = pages.filter(
          page => page.menu === menuItem && page.subMenu
        )
        if (subMenus.length) {
          return (
            <Box mb={2}>
              <ItemWithSubmenu
                key={index}
                menu={menuItem}
                subMenus={subMenus}
              />
            </Box>
          )
        }
        if (ownPage) {
          return (
            <Box mb={2}>
              <ItemWithoutSubmenu key={index} menu={menuItem} page={ownPage} />
            </Box>
          )
        }
        return false
      })}
    </Box>
  )
}

export default withNav(Sidebar)
