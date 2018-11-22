import React from 'react'
import { Grid, ThemeProvider, styled, up, css, th } from '@smooth-ui/core-sc'
import theme from 'style/theme'
import Sidebar from './Sidebar'
import WebsiteHeader from './WebsiteHeader'
import ProjectHeader from './ProjectHeader'
import GlobalStyle from './GlobalStyle'
import Article from './Article'
import {
  Provider as MenuProvider,
  Consumer as MenuConsumer,
} from './MenuContext'

const PageWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - ${th('headerHeight')});
  margin-top: ${th('headerHeight')};
  width: 100%;
  position: relative;
  z-index: 0;
`

const SidebarContainer = styled.div`
  background-color: ${th('gray100')};
  border-left: 1px solid rgb(236, 236, 236);
  transition: transform 150ms ease-out;
  position: fixed;
  left: auto;
  right: 0;
  bottom: 0;
  top: ${th('headerHeight')};
  flex: 0 0 auto;

  ${p =>
    p.toggled &&
    css`
      transform: translateX(-200px);
    `}

  ${up(
    'sm',
    css`
      position: relative;
      top: 0;
      transform: none;
      flex: 0 0 200px;
      margin-left: 80px;
    `
  )}

  ${up(
    'lg',
    css`
      flex: 0 0 300px;
    `
  )}
`

const SidebarWrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: calc(100vh - ${th('headerHeight')});
  overflow-y: auto;
  margin-right: -999px;
  padding-right: 999px;
  background-color: rgb(247, 247, 247);
`

const Headers = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
`

const ArticleContainer = styled.div`
  flex-grow: 1;
  padding: 0 20px 50px;
  overflow: hidden;
`

const DocLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MenuProvider>
      <div>
        <GlobalStyle />
        <Headers>
          <WebsiteHeader />
          <ProjectHeader />
        </Headers>
        <Grid gutter={0}>
          <PageWrapper>
            <ArticleContainer>
              <Article>{children}</Article>
            </ArticleContainer>
            <MenuConsumer>
              {({ toggled }) => (
                <SidebarContainer toggled={toggled}>
                  <SidebarWrapper>
                    <Sidebar />
                  </SidebarWrapper>
                </SidebarContainer>
              )}
            </MenuConsumer>
          </PageWrapper>
        </Grid>
      </div>
    </MenuProvider>
  </ThemeProvider>
)

export default DocLayout
