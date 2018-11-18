import React from 'react'
import { Link } from 'gatsby'
import StyledMenu from './StyledMenu'

const ItemWithoutSubmenu = ({ page }) => (
  <StyledMenu as={Link} to={page.path}>
    {page.menu}
  </StyledMenu>
)

export default ItemWithoutSubmenu
