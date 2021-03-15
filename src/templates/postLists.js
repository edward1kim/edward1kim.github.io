import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function PostLists({ data, pageContext }) {
  const title = pageContext.title
  let posts = data.allMarkdownRemark.edges
  posts = posts.filter(post => post.node.frontmatter.isHead === false)

  return (
    <Layout pageTitle={title}>
      <h1 className='headTitle'>{title}</h1>
      <div className='nextPrevBox'>
        {pageContext.prev ? <Link to={pageContext.prev} className='nextPrev'>Prev</Link> : <p></p>}
        {pageContext.next ? <Link to={pageContext.next} className='nextPrev'>Next</Link> : <p></p>}
      </div>
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
      <div className='nextPrevBox bottomPrevBox'>
        {pageContext.prev ? <Link to={pageContext.prev} className='nextPrev'>Prev</Link> : <p></p>}
        {pageContext.next ? <Link to={pageContext.next} className='nextPrev'>Next</Link> : <p></p>}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($category: [String], $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], 
        order: DESC 
      }
      filter: {
        frontmatter: {
          category: {in: $category}
          isHead: {eq: false}
        }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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