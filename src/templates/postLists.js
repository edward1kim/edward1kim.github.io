import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function PostLists({ data }) {
  let posts = data.allMarkdownRemark.edges.filter(({ node }) => !node.frontmatter.isHead)
  let categoryHead = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.isHead)
  if (categoryHead.length > 1) {
    categoryHead = categoryHead.find(({ node }) => node.frontmatter.title === 'Home').node
  } else {
    categoryHead = categoryHead[0].node
  }

  return (
    <Layout pageTitle={categoryHead.frontmatter.title}>
      <h1 className='headTitle'>{categoryHead.frontmatter.title}</h1>
      {posts.map(({ node }) => (
        <Link to={node.fields.slug} className='postLink'>
          <div className='postBox' key={node.id}>
            <h3 className='postListsTitle'>
              {node.frontmatter.title}
            </h3>
            <h5 className='date'>{node.frontmatter.date}</h5>
            <p className='postText'>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($category : [String]) {
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], 
        order: DESC 
      }
      filter: {
        frontmatter: {
          category: {in: $category}
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            isHead
          }
          fields {
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`