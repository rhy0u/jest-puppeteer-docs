import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Link to="/" style={{ color: 'white' }}>
      Home
    </Link>
    <Link to="/page-2" style={{ color: 'white', marginLeft: 20 }}>
      Page 2
    </Link>
    <Link to="/markdown-page" style={{ color: 'white', marginLeft: 20 }}>
      Markdown example
    </Link>
  </div>
)

export default Header
