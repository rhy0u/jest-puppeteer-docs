module.exports = {
  siteMetadata: {
    title: 'SVGR',
    github: 'https://github.com/smooth-code/svgr',
  },
  plugins: [
    // Relative import
    'gatsby-plugin-resolve-src',

    // Styled components
    'gatsby-plugin-styled-components',

    // Helmet
    'gatsby-plugin-react-helmet',

    // Offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SVGR',
        short_name: 'svgr',
        start_url: '/',
        background_color: '#bd4932',
        theme_color: '#bd4932',
        display: 'minimal-ui',
      },
    },

    // Pages
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
        ignore: [`**/docs/**`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/pages/docs`,
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/SimpleLayout'),
          docs: require.resolve('./src/components/DocLayout'),
        },
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-autolink-headers' },
          {
            resolve: 'gatsby-remark-highlights',
            options: { scopePrefix: 'syntax--' },
          },
        ],
      },
    },

    // Images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
