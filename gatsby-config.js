const path = require(`path`)

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-transformer-javascript-frontmatter',
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve(`./src/layouts/`),
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
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
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout'),
        },
        // gatsbyRemarkPlugins: [
        //   {
        //     resolve: 'gatsby-remark-autolink-headers',
        //     options: {
        //       offsetY: `100`,
        //       icon: null,
        //       className: null,
        //       maintainCase: false,
        //     },
        //   },
        // ],
      },
    },
    'gatsby-plugin-resolve-src',
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     custom: {
    //       families: ['Colfax'],
    //       url: 'https://www.smooth-code.com/assets/fonts.css',
    //     },
    //   },
    // },
  ],
}
