import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layouts/Layout'
import { Box, Toggler } from '@smooth-ui/core-sc'
import { StaticQuery, graphql } from 'gatsby'
import ArrowDown from 'components/icons/ArrowDown'
import ArrowUp from 'components/icons/ArrowUp'

import 'components/layout.css'

const SecondaryLevelMenu = ({ items }) => (
  <Box ml={10}>
    <Box>{items.title}</Box>
  </Box>
)

const PrimaryLevelMenu = ({ edge }) => (
  <Toggler>
    {({ toggled, onToggle }) => (
      <Box mb={20}>
        <Box display="flex" justifyContent="space-between" onClick={onToggle}>
          <Box style={{ textTransform: 'uppercase' }}>
            {edge.node.frontmatter.title}
          </Box>
          {edge.node.tableOfContents.items[0].items && (
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
          edge.node.tableOfContents.items[0].items &&
          edge.node.tableOfContents.items.map(
            item =>
              console.log(item) ||
              console.log(edge) ||
              item.items.map((items, itemIndex) => (
                <SecondaryLevelMenu key={itemIndex} items={items} />
              ))
          )}
      </Box>
    )}
  </Toggler>
)

const SidebarMenu = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
          edges {
            node {
              tableOfContents
              id
              frontmatter {
                title
                menu
                order
              }
              parent {
                ... on File {
                  name
                  relativePath
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Box backgroundColor="lightgrey" p="20px 10px" width="25%">
        {console.log(data)}
        {data.allMdx.edges.map(edge => (
          <PrimaryLevelMenu edge={edge} key={edge.node.id} />
        ))}
      </Box>
    )}
  />
)

const DocLayout = props => (
  <Layout>
    <Box display="flex">
      <SidebarMenu />
      <Box p={20}>
        <div>{props.children}</div>
      </Box>
    </Box>
  </Layout>
)

DocLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocLayout
