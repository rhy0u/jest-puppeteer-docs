module.exports = {
  siteMetadata: {
    title: 'SVGR',
    menuLinks: [
      {
        name: 'About',
        link: '/',
      },
      {
        name: 'Playground',
        link: '/playground',
      },
      {
        name: 'Documentation',
        link: '/documentation',
      },
      {
        name: 'Github',
        link: 'https://github.com/smooth-code/svgr',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `doc`,
        path: `${__dirname}/src/documentation/`,
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
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
    'gatsby-mdx',
    'gatsby-transformer-remark',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
