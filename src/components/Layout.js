import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider, Grid, Row, Col } from '@smooth-ui/core-sc'
import theme from 'style/theme'
import { Sticky, StickyContainer } from 'react-sticky'

import Header from 'components/header'
import SidebarMenu from 'components/SidebarMenu'

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet title={data.site.siteMetadata.title} />
          <Header siteTitle={data.site.siteMetadata.title} />
          {location && location.pathname.includes('documentation') ? (
            <StickyContainer>
              <Grid maxWidth="none">
                <Row>
                  <Col md={3} p={0}>
                    <Sticky>
                      {({ style }) => (
                        <div
                          style={{
                            ...style,
                            backgroundColor: 'lightgrey',
                            height: '100vh',
                          }}
                        >
                          <SidebarMenu />
                        </div>
                      )}
                    </Sticky>
                  </Col>
                  <Col md={9} p={20}>
                    {children}
                  </Col>
                </Row>
              </Grid>
            </StickyContainer>
          ) : (
            <Grid p={20}>{children}</Grid>
          )}
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
