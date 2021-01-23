/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Edward Kim`,
    menuLinks:[
      {
         name:'Home',
         link:'/'
      },
      {
         name:'About',
         link:'/about'
      },
      {
        name:'Food',
        link:'/food'
      },
      {
        name:'Life',
        link:'/life'
      },
      {
        name:'Tech',
        link:'/tech'
      },
      {
        name:'Tidbits',
        link:'/tidbits'
      }
    ]
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ]
}
