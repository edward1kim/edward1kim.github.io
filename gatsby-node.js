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

  const totalPosts = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            category: {in: ["tech", "food", "tidbits", "life"]}, 
            isHead: {ne: true}
          }
        }
      ) { totalCount }
    }
  `)

  const totalTechPosts = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            category: {in: ["tech"]}, 
            isHead: {ne: true}
          }
        }
      ) { totalCount }
    }
  `)

  const totalFoodPosts = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            category: {in: ["food"]}, 
            isHead: {ne: true}
          }
        }
      ) { totalCount }
    }
  `)

  const totalLifePosts = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            category: {in: ["life"]}, 
            isHead: {ne: true}
          }
        }
      ) { totalCount }
    }
  `)

  const totalTidbitsPosts = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            category: {in: ["tidbits"]}, 
            isHead: {ne: true}
          }
        }
      ) { totalCount }
    }
  `)

  const totalCounts = {
    "Home": totalPosts.data.allMarkdownRemark.totalCount,
    "Tech": totalTechPosts.data.allMarkdownRemark.totalCount,
    "Food": totalFoodPosts.data.allMarkdownRemark.totalCount,
    "Life": totalLifePosts.data.allMarkdownRemark.totalCount,
    "Tidbits": totalTidbitsPosts.data.allMarkdownRemark.totalCount
  }

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
              title
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

  const limit = 15
  
  postListResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let skip = 0
    const totalIters = Math.ceil(totalCounts[node.frontmatter.title]/limit)

    for (let i = 1; i <= totalIters; i++) {
      let next = node.fields.slug
      let prev = node.fields.slug
      let pageNum = skip/limit + 1

      if (totalIters == 1) {
        next = null
        prev = null
      } else if (pageNum == 1) {
        next = `${node.fields.slug}${pageNum+1}`
        prev = null
      } else if (pageNum < totalIters) {
        next = `${node.fields.slug}${pageNum+1}`
        prev = pageNum == 2 ? node.fields.slug : `${node.fields.slug}${pageNum-1}`
      } else if (pageNum == totalIters) {
        next = null
        prev = pageNum == 2 ? node.fields.slug : `${node.fields.slug}${pageNum-1}`
      }

      createPage({
        path: skip == 0 ? node.fields.slug : `${node.fields.slug}${pageNum}`, 
        component: path.resolve(`./src/templates/postLists.js`),
        context: {
          category: node.frontmatter.category,
          title: node.frontmatter.title,
          limit, 
          skip,
          next,
          prev
        },
      })
      skip += limit
    }
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