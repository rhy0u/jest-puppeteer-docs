import React from 'react'
import { Box, styled, th, Toggler } from '@smooth-ui/core-sc'
import { Link } from 'gatsby'
import Arrows from 'components/Arrows'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${th('black')};
`

const PrimaryTitle = ({ toggled, item }) =>
  toggled && item.tableOfContents.items[0].items ? (
    <Box>{item.frontmatter.title}</Box>
  ) : (
    <StyledLink to={item.fields.slug}>
      <Box>{item.frontmatter.title}</Box>
    </StyledLink>
  )

const AnchorsOnH2 = ({ h2Items, slug }) =>
  h2Items.map((itemPage, index) => (
    <StyledLink
      to={`${slug}${itemPage.url}`}
      key={index}
      activeStyle={{ textDecoration: 'underline' }}
    >
      <Box ml={10} mb="5px">
        {itemPage.title}
      </Box>
    </StyledLink>
  ))

const ItemWithoutSubmenu = ({ menuItem, anchors }) => {
  const h1Item = menuItem.tableOfContents.items[0]
  const h2Items = h1Item && h1Item.items
  return (
    <Toggler>
      {({ toggled, onToggle }) => (
        <Box mb={20}>
          <Box
            display="flex"
            justifyContent="space-between"
            onClick={onToggle}
            style={{ textTransform: 'uppercase' }}
          >
            <PrimaryTitle toggled={toggled} item={menuItem} />
            {anchors && h2Items && <Arrows toggled={toggled} />}
          </Box>
          {anchors && toggled && h1Item && h2Items && (
            <AnchorsOnH2 slug={menuItem.fields.slug} h2Items={h2Items} />
          )}
        </Box>
      )}
    </Toggler>
  )
}

export default ItemWithoutSubmenu
