module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-transformer-javascript-frontmatter',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'smoothcode-opensource-docs',
        short_name: 'smoothcode-docs',
        start_url: '/',
        background_color: '#bd4932',
        theme_color: '#bd4932',
        display: 'minimal-ui',
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
