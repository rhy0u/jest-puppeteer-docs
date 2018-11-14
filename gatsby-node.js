/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: `${node.frontmatter.menu}${
        node.frontmatter.subMenu ? `/${node.frontmatter.subMenu}` : ''
      }${node.frontmatter.slug ? `/${node.frontmatter.slug}` : ''}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  try {
    const { createPage } = actions
    const { data } = await graphql(`
      {
        allMdx(filter: { frontmatter: { menu: { eq: "documentation" } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                menu
              }
              parent {
                ... on File {
                  relativeDirectory
                  relativePath
                }
              }
            }
          }
        }
      }
    `)

    data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `./src/${node.frontmatter.menu ? `${node.frontmatter.menu}/` : ''}${
            node.parent.relativePath ? `${node.parent.relativePath}/` : ''
          }`
        ),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          //   slug: `${node.frontmatter.menu}/${node.parent.relativeDirectory &&
          //     `${node.parent.relativeDirectory}/`}${node.fields.slug}`,
        },
      })
    })
  } catch (error) {
    console.log(error)
  }
}
