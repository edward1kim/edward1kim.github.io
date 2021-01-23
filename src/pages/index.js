import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  let posts = data.allMarkdownRemark.edges.filter(({ node }) => !node.frontmatter.isHead)

  return (
    <Layout>
      <h1>Home</h1>
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
  query {
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], 
        order: DESC 
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY MMMM DD")
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