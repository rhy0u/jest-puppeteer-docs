import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const NavContext = React.createContext()

const getMdxDetails = mdxNode => {
  const cleanPath = `/${mdxNode.parent.relativePath.slice(0, -4)}`
  return {
    tableOfContents: mdxNode.tableOfContents,
    ...mdxNode.frontmatter,
    path: cleanPath,
  }
}

const getJSDetails = (jsNode, allJavascriptFrontmatter) => {
  const cleanPath = jsNode.path.slice(0, -1)
  const matchedFrontmatterEdge = allJavascriptFrontmatter.edges.find(
    edge => edge.node.node.absolutePath === jsNode.componentPath
  )
  return {
    ...((matchedFrontmatterEdge && matchedFrontmatterEdge.node.frontmatter) ||
      {}),
    path: cleanPath || '/',
  }
}

const getNavData = (graphqlData, pagePath) => {
  const activePath = `/${pagePath}`
  // regroup mdx and js pages, clean special pages and sort them using order field
  const pages = [
    ...graphqlData.allMdx.edges.map(edge => getMdxDetails(edge.node)),
    ...graphqlData.allSitePage.edges.map(edge =>
      getJSDetails(edge.node, graphqlData.allJavascriptFrontmatter)
    ),
  ]
    .filter(page => page)
    .sort((pageA, pageB) => pageA.order - pageB.order)
  const activePage = pages.find(page => page.path === activePath)
  const navData = {
    activeMenu: activePage && activePage.menu,
    activeSubmenu: activePage && activePage.subMenu,
    activePage,
    pages,
  }
  return navData
}

const NavContextProvider = props => (
  <StaticQuery
    query={graphql`
      {
        allMdx {
          edges {
            node {
              tableOfContents
              frontmatter {
                title
                menu
                subMenu
                order
              }
              parent {
                ... on File {
                  relativePath
                }
              }
            }
          }
        }
        allSitePage {
          edges {
            node {
              path
              componentPath
            }
          }
        }
        allJavascriptFrontmatter {
          edges {
            node {
              frontmatter {
                title
              }
              node {
                absolutePath
              }
            }
          }
        }
      }
    `}
    render={data => {
      const navData = getNavData(data, props.pagePath)
      return (
        <NavContext.Provider value={navData}>
          {props.children(navData)}
        </NavContext.Provider>
      )
    }}
  />
)

export const withNav = Component => props => (
  <NavContext.Consumer>
    {data => <Component {...props} {...data} />}
  </NavContext.Consumer>
)

export default {
  Consumer: NavContext.Consumer,
  Provider: NavContextProvider,
}
