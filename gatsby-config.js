module.exports = {
  siteMetadata: {
    title: 'Smooth UI',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/documentation/*`],
        defaultLayouts: {
          default: require.resolve('./src/components/layouts/BaseLayout.js'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `doc`,
        path: `${__dirname}/src/pages/documentation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/components/layouts/BaseLayout.js'),
          doc: require.resolve('./src/components/layouts/DocLayout.js'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#bd4932',
        theme_color: '#bd4932',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
