import { globalStyle, createGlobalStyle, th } from '@smooth-ui/core-sc'
import theme from 'style/theme'
import 'style/editor.css'

const GlobalStyle = createGlobalStyle`
  ${globalStyle(theme)};

  html, body {
    color: #3D3D3D;
  }

  a, a:hover {
    color: ${th('primary')};
    text-decoration: none;
  }
`

export default GlobalStyle
