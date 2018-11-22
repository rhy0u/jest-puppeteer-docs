import React from 'react'
import { theme, ThemeProvider } from '@smooth-ui/core-sc'
import { Header } from 'smooth-code-landers'

export default () => (
  <ThemeProvider theme={theme}>
    <Header variant="shadow" />
  </ThemeProvider>
)
