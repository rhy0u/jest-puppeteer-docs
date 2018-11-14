import React from 'react'
import { Box } from '@smooth-ui/core-sc'
import { StaticQuery, graphql } from 'gatsby'
import ItemWithSubmenu from 'components/sidebar/ItemWithSubmenu'
import ItemWithoutSubmenu from 'components/sidebar/ItemWithoutSubmenu'
import 'components/layout.css'

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
                subMenu
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
      }
    `}
    render={({ allMdx: { edges } }) => {
      const orderedMenu = getOrderedMenu(edges)
      return (
        <Box p="20px 10px">
          {orderedMenu.map((menuItem, index) => (
            <Box key={index}>
              {menuItem.subMenu ? (
                <ItemWithSubmenu
                  pages={menuItem.pages}
                  subMenu={menuItem.subMenu}
                />
              ) : (
                <ItemWithoutSubmenu menuItem={menuItem.pages} />
              )}
            </Box>
          ))}
        </Box>
      )
    }}
  />
)

export default SidebarMenu
