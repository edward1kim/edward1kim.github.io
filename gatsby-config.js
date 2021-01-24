module.exports = {
  siteMetadata: {
    title: `Edward Kim`,
    menuLinks:[
      {
         name:'HOME',
         link:'/'
      },
      {
         name:'ABOUT',
         link:'/about/'
      },
      {
        name:'FOOD',
        link:'/food/'
      },
      {
        name:'LIFE',
        link:'/life/'
      },
      {
        name:'TECH',
        link:'/tech/'
      },
      {
        name:'TIDBITS',
        link:'/tidbits/'
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
            options: {},
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            }
          },
          {
            resolve: "gatsby-remark-external-links",
          }
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
        path: `${__dirname}/static/images`,
      },
    },
  ]
}
