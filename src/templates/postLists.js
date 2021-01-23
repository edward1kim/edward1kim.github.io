import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function PostLists({ data }) {
  let posts = data.allMarkdownRemark.edges.filter(({ node }) => !node.frontmatter.isHead)
  let categoryHead = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.isHead)[0].node  

  return (
    <Layout>
      <h1>{categoryHead.frontmatter.title}</h1>
      {posts.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}{" "}</Link>
          </h3>
          <h4>{node.frontmatter.date}</h4>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], 
        order: DESC 
      }
      filter: {
        frontmatter: {
          category: {eq: $category}
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY MMMM DD")
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