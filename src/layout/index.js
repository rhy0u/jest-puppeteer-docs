import React from 'react'
import { Box } from '@smooth-ui/core-em'
import { ThemeProvider } from '@smooth-ui/core-sc'
import theme from 'style/theme'

import './index.css'

// Layout parts
import NavContext from './NavContext'
import Header from './Header'
import ProjectHeader from './ProjectHeader'
import Sidebar from './Sidebar'

const Layout = props => (
  <ThemeProvider theme={theme}>
    <NavContext.Provider pagePath={props['*']}>
      <Box height="100vh" display="flex" flexDirection="column">
        <Header />
        <ProjectHeader />
        <Box flex={1} overflow="auto" backgroundColor="green">
          <Box
            display="flex"
            position="relative"
            height="100%"
            overflow="hidden"
          >
            <Box height="100%" backgroundColor="red">
              <Sidebar />
            </Box>
            <Box height="100%" flex={1} overflow="auto">
              {props.children}
            </Box>
          </Box>
        </Box>
      </Box>
    </NavContext.Provider>
  </ThemeProvider>
)

export default Layout
