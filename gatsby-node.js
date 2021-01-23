const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const menuLinks = require(`./gatsby-config`).siteMetadata.menuLinks.map(({ link }) => link)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (!menuLinks.includes(node.fields.slug)) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.fields.slug
        },
      })
    } else {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/postLists.js`),
        context: {
          category: node.frontmatter.category
        },
      })
    }
  })
}