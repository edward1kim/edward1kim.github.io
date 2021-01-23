import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Tidbits({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1>
        Tidbits
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
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
        filter: {
            frontmatter: {
                category: {eq: "tidbits"}
            }
        }
        ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY MMMM DD")
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`