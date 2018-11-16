import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const NavContext = React.createContext()

const getMdxDetails = mdxNode => {
  const cleanPath = `/${mdxNode.parent.relativePath.slice(0, -4)}`
  return {
    ...mdxNode.frontmatter,
    path: cleanPath,
    project: mdxNode.parent.relativePath.split('/')[1],
  }
}

const getJSDetails = (jsNode, allJavascriptFrontmatter) => {
  const cleanPath = jsNode.path.slice(0, -1)
  const matchedFrontmatterEdge = allJavascriptFrontmatter.edges.find(
    edge => edge.node.node.absolutePath === jsNode.componentPath
  )
  console.log(cleanPath)
  return {
    ...((matchedFrontmatterEdge && matchedFrontmatterEdge.node.frontmatter) ||
      {}),
    path: cleanPath,
    project: cleanPath.split('/')[1],
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
    activeProject: activePage.project,
    activeMenu: activePage.menu,
    activeSubmenu: activePage.subMenu,
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
        allSitePage(
          filter: {
            pluginCreator: { name: { eq: "gatsby-plugin-page-creator" } }
          }
        ) {
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
                menu
                order
              }
              node {
                absolutePath
              }
            }
          }
        }
      }
    `}
    render={data => (
      <NavContext.Provider value={getNavData(data, props.pagePath)}>
        {props.children}
      </NavContext.Provider>
    )}
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
