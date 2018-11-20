import React from 'react'
import { ThemeProvider, styled } from '@smooth-ui/core-sc'
import theme from 'style/theme'
import WebsiteHeader from './WebsiteHeader'
import ProjectHeader from './ProjectHeader'
import GlobalStyle from './GlobalStyle'

const Headers = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
`

const PageWrapper = styled.div`
  margin-top: 105px;
`

const SimpleLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Headers>
        <WebsiteHeader />
        <ProjectHeader />
      </Headers>
      <PageWrapper>{children}</PageWrapper>
    </div>
  </ThemeProvider>
)

export default SimpleLayout
