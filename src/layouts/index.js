import React from 'react'
import { Box, ThemeProvider } from '@smooth-ui/core-sc'
import theme from 'style/theme'
import { Helmet } from 'react-helmet'

// Layout parts
import NavContext from './NavContext'
import Header from './Header'
import ProjectHeader from './ProjectHeader'
import Sidebar from './Sidebar'
import TableOfContents from './TableOfContents'

const Layout = props => (
  <ThemeProvider theme={theme}>
    <NavContext.Provider pagePath={props['*']}>
      {({ activePage }) => (
        <Box height="100vh" display="flex" flexDirection="column">
          <Helmet>
            <meta charSet="utf-8" />
            <title>SVGR - {activePage && activePage.title} - Smooth code</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <Header />
          <ProjectHeader />
          <Box flex={1} overflow="auto">
            <Box
              display="flex"
              position="relative"
              height="100%"
              overflow="hidden"
              p={2}
            >
              {activePage && activePage.menu && (
                <Box height="100%">
                  <Sidebar />
                </Box>
              )}
              <Box
                height="100%"
                flex={1}
                overflow="auto"
                id="mainWrapper"
                p={2}
              >
                {props.children}
              </Box>
              {activePage && activePage.tableOfContents && (
                <Box height="100%" display={{ xs: 'none', sm: 'block' }}>
                  <TableOfContents
                    data={activePage.tableOfContents}
                    pagePath={activePage.path}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </NavContext.Provider>
  </ThemeProvider>
)

export default Layout
