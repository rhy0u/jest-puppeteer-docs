import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Grid, styled, th, up } from '@smooth-ui/core-sc'
import { darken } from 'polished'
import Bars from 'components/icons/Bars'
import Close from 'components/icons/Close'
import { Consumer as MenuConsumer } from './MenuContext'

const QUERY = graphql`
  query Header {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 34, height: 34) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    site {
      siteMetadata {
        title
        github
      }
    }
  }
`

const Container = styled.div`
  background: linear-gradient(
    to bottom,
    ${th('primary')} 0%,
    ${th('primary', color => darken(0.07, color))} 100%
  );
  padding: 8px 0;
`

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
`

const LogoLink = styled(Link)`
  align-items: center;
  color: ${th('white')};
  display: flex;
  flex-flow: row nowrap;
  height: 34px;

  &:hover {
    color: ${th('white')};
  }
`

const LogoText = styled.h2`
  display: block;
  font-size: 1.25em;
  line-height: 18px;
  margin: 0;
  margin-left: 10px;
`

const Nav = styled.nav`
  height: 34px;
  margin-left: auto;
  position: relative;
`

const NavList = styled.ul`
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
`

const NavListItem = styled.li`
  list-style-type: none;
  flex: 1 1 auto;
  margin: 0;
  text-align: center;
  white-space: nowrap;

  a {
    color: hsla(0, 0%, 100%, 0.8);
    display: flex;
    font-size: 1em;
    height: 32px;
    line-height: 1.2em;
    padding: 6px 10px;
    transition: color 300ms;

    &:hover {
      color: ${th('white')};
    }
  }
`

const MenuButton = styled.button`
  color: hsla(0, 0%, 100%, 0.8);
  border: 0;
  background: transparent;

  &:focus {
    outline: none;
    color: ${th('white')};
  }

  ${up('sm', 'display: none;')}
`

const ProjectHeader = () => (
  <StaticQuery
    query={QUERY}
    render={data => (
      <Container>
        <Grid gutter={20}>
          <Header>
            <LogoLink to="/">
              <Img
                fixed={data.logo.childImageSharp.fixed}
                alt={data.site.siteMetadata.title}
              />
              <LogoText>{data.site.siteMetadata.title}</LogoText>
            </LogoLink>
            <Nav>
              <NavList>
                <NavListItem>
                  <Link to="/playground">Playground</Link>
                </NavListItem>
                <NavListItem>
                  <Link to="/docs">Usage</Link>
                </NavListItem>
                <NavListItem>
                  <Link to={data.site.siteMetadata.github}>GitHub</Link>
                </NavListItem>
              </NavList>
            </Nav>
            <MenuConsumer>
              {props =>
                props ? (
                  <MenuButton onClick={() => props.toggle()}>
                    {props.toggled ? (
                      <Close width="20" height="20" />
                    ) : (
                      <Bars width="20" height="20" />
                    )}
                  </MenuButton>
                ) : null
              }
            </MenuConsumer>
          </Header>
        </Grid>
      </Container>
    )}
  />
)

export default ProjectHeader
