import React from 'react'
import { styled, up, css } from '@smooth-ui/core-sc'
import { StaticQuery, graphql, Link } from 'gatsby'

const QUERY = graphql`
  query Sidebar {
    allSitePage {
      edges {
        node {
          id
          path
          context {
            frontmatter {
              title
              menu
            }
          }
        }
      }
    }
  }
`

const createOrFindGroup = (name, groups) => {
  let group = groups.find(group => group.name === name)
  if (!group) {
    group = { name, pages: [] }
    groups.push(group)
  }
  return group
}

const pagesToNavGroups = pages =>
  pages.reduce((groups, page) => {
    if (!page.context.frontmatter.menu) {
      return groups
    }
    const group = createOrFindGroup(page.context.frontmatter.menu, groups)
    group.pages.push(page)
    return groups
  }, [])

const Nav = styled.nav`
  padding: 0 20px;
  width: 200px;

  ${up(
    'sm',
    css`
      padding-left: 40px;
      width: auto;
    `
  )}
`

const NavGroup = styled.div`
  margin-bottom: 20px;
`

const NavGroupTitle = styled.h3`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
`

const NavGroupMenu = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 20px;
`

const NavGroupMenuItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Sidebar = () => (
  <StaticQuery
    query={QUERY}
    render={data => {
      const navGroups = pagesToNavGroups(
        data.allSitePage.edges
          .map(edge => edge.node)
          .filter(node => node.context.frontmatter)
      )

      return (
        <Nav>
          {navGroups.map(navGroup => (
            <NavGroup key={navGroup.name}>
              <NavGroupTitle>{navGroup.name}</NavGroupTitle>
              <NavGroupMenu>
                {navGroup.pages.map(page => (
                  <NavGroupMenuItem key={page.id}>
                    <Link to={page.path}>{page.context.frontmatter.title}</Link>
                  </NavGroupMenuItem>
                ))}
              </NavGroupMenu>
            </NavGroup>
          ))}
        </Nav>
      )
    }}
  />
)

export default Sidebar
