import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  let posts = data.allMarkdownRemark.edges.filter(({ node }) => !node.frontmatter.isHead)

  return (
    <Layout pageTitle='Home'>
      <h1 className='headTitle'>Home</h1>
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
  query {
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], 
        order: DESC 
      }
      filter: {}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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