import React from 'react'
import { ThemeProvider } from '@smooth-ui/core-sc'
import theme from 'style/theme'
import Sidebar from './Sidebar'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Sidebar />
      {children}
    </div>
  </ThemeProvider>
)

export default Layout
