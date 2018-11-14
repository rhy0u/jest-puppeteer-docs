import React from 'react'
import { Box, Toggler, styled, th } from '@smooth-ui/core-sc'
import { Link } from 'gatsby'
import Arrows from 'components/Arrows'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${th('black')};
`

const SubMenuPages = ({ pages }) =>
  pages.map((page, index) => (
    <StyledLink
      to={page.fields.slug}
      key={index}
      activeStyle={{ textDecoration: 'underline' }}
    >
      <Box ml={10} mb="5px">
        {page.frontmatter.title}
      </Box>
    </StyledLink>
  ))

const ItemWithSubmenu = ({ pages, subMenu }) => (
  <Toggler>
    {({ toggled, onToggle }) => (
      <Box mb={20}>
        <Box display="flex" justifyContent="space-between" onClick={onToggle}>
          <Box style={{ textTransform: 'uppercase' }}>{subMenu}</Box>
          {pages && <Arrows toggled={toggled} />}
        </Box>
        {toggled && <SubMenuPages pages={pages} />}
      </Box>
    )}
  </Toggler>
)

export default ItemWithSubmenu
