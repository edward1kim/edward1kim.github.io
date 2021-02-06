const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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
  const postListResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { isHead: {eq: true} }
        }
      ) {
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

  const postResult = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { isHead: {ne: true} }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  postListResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/postLists.js`),
      context: {
        category: node.frontmatter.category
      },
    })
  })

  postResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.fields.slug
      },
    })
  })

}