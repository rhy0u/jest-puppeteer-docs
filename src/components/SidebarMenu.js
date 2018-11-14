import React from 'react'
import { Box, Toggler, styled, th } from '@smooth-ui/core-sc'
import { StaticQuery, graphql, Link } from 'gatsby'
import ArrowDown from 'components/icons/ArrowDown'
import ArrowUp from 'components/icons/ArrowUp'

import 'components/layout.css'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${th('black')};
`

const ItemWithSubmenu = ({ item }) => (
  <Toggler>
    {({ toggled, onToggle }) => (
      <Box mb={20}>
        <Box display="flex" justifyContent="space-between" onClick={onToggle}>
          <Box style={{ textTransform: 'uppercase' }}>{item.subMenu}</Box>
          {item.pages && (
            <>
              {toggled ? (
                <ArrowUp style={{ flexShrink: 0 }} />
              ) : (
                <ArrowDown style={{ flexShrink: 0 }} />
              )}
            </>
          )}
        </Box>
        {toggled &&
          item.pages.map((itemPage, index) => (
            <StyledLink
              to={itemPage.fields.slug}
              key={index}
              activeStyle={{ textDecoration: 'underline' }}
            >
              <Box ml={10} mb="5px">
                {itemPage.frontmatter.title}
              </Box>
            </StyledLink>
          ))}
      </Box>
    )}
  </Toggler>
)

const ItemWithoutSubmenu = ({ item }) => (
  <Toggler>
    {({ toggled, onToggle }) => (
      <Box mb={20}>
        <Box
          display="flex"
          justifyContent="space-between"
          onClick={onToggle}
          style={{ textTransform: 'uppercase' }}
        >
          {toggled && item.pages.tableOfContents.items[0].items ? (
            <Box>{item.pages.frontmatter.title}</Box>
          ) : (
            <StyledLink to={item.pages.fields.slug}>
              <Box>{item.pages.frontmatter.title}</Box>
            </StyledLink>
          )}

          {item.pages.tableOfContents.items[0].items && (
            <>
              {toggled ? (
                <ArrowUp style={{ flexShrink: 0 }} />
              ) : (
                <ArrowDown style={{ flexShrink: 0 }} />
              )}
            </>
          )}
        </Box>
        {toggled &&
          item.pages.tableOfContents.items[0].items &&
          item.pages.tableOfContents.items[0].items.map((itemPage, index) => (
            <StyledLink
              to={item.pages.fields.slug}
              key={index}
              activeStyle={{ textDecoration: 'underline' }}
            >
              <Box ml={10} mb="5px">
                {itemPage.title}
              </Box>
            </StyledLink>
          ))}
      </Box>
    )}
  </Toggler>
)

const issubMenuInArray = (acc, current) => {
  let menuIndex = null
  acc.forEach((item, index) => {
    if (item.subMenu === current.node.frontmatter.subMenu) {
      menuIndex = index
    }
  })
  return menuIndex
}

const getOrderedMenu = menu =>
  menu.reduce((acc, current) => {
    const SubMenuIndex = issubMenuInArray(acc, current)

    if (current.node.frontmatter.subMenu) {
      return SubMenuIndex
        ? acc[SubMenuIndex].pages.push(current.node) && acc
        : [
            ...acc,
            {
              subMenu: current.node.frontmatter.subMenu,
              pages: [current.node],
            },
          ]
    }
    return [...acc, { subMenu: null, pages: current.node }]
  }, [])

const SidebarMenu = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(
          filter: { frontmatter: { menu: { eq: "documentation" } } }
          sort: { fields: [frontmatter___order], order: ASC }
        ) {
          edges {
            node {
              tableOfContents
              frontmatter {
                title
                slug
                # subMenu
              }
              fields {
                slug
              }
              parent {
                ... on File {
                  relativeDirectory
                  name
                }
              }
            }
          }
        }
        file {
          absolutePath
        }
      }
    `}
    render={data => {
      const orderedMenu = getOrderedMenu(data.allMdx.edges)
      console.log(orderedMenu)
      return (
        <Box p="20px 10px" overflow="scroll">
          {orderedMenu.map((menuItem, index) => (
            <Box key={index}>
              {menuItem.subMenu ? (
                <ItemWithSubmenu item={menuItem} />
              ) : (
                <ItemWithoutSubmenu item={menuItem} />
              )}
            </Box>
          ))}
        </Box>
      )
    }}
  />
)

export default SidebarMenu
